const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const out = [];
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    page.on('console', msg => {
      out.push({type:'console',text:msg.text(),location:msg.location()});
      console.log('[console]', msg.type(), msg.text());
    });
    page.on('pageerror', err => {
      out.push({type:'pageerror',error:err.stack||err.message});
      console.error('[pageerror]', err.stack||err.message);
    });
    page.on('requestfailed', req => {
      out.push({type:'requestfailed',url:req.url(),failure: req.failure().errorText});
      console.error('[requestfailed]', req.url(), req.failure().errorText);
    });

    await page.goto('http://localhost:5000', { waitUntil: 'networkidle2', timeout: 20000 });
    // wait some extra time for runtime logs
    await new Promise(r => setTimeout(r, 3000));

    // capture DOM snapshot size
    const html = await page.content();
    out.push({type:'dom-length',length:html.length});
    console.log('[dom-length]', html.length);

    await browser.close();
  } catch (err) {
    out.push({type:'error',error:err.stack||err.message});
    console.error('[error]', err.stack||err.message);
  } finally {
    try { fs.writeFileSync('/workspaces/ptn/tools/headless-output.json', JSON.stringify(out, null, 2)); } catch(e){ console.error('failed-write', e); }
    process.exit(0);
  }
})();
