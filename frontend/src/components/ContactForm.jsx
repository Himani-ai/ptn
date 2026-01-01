import React, {useState} from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', destination:'', people:'', days:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function valid(){ return form.name.trim() && form.destination.trim() && form.email.trim() }
  
  async function submit(e){
    e.preventDefault()
    if (!valid()) { setError('Please fill Name, Destination, and Email.'); return }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(form)})
      if (!res.ok) throw new Error('Network error')
      setSent(true)
      setForm({name:'', destination:'', people:'', days:'', email:'', message:''})
      setTimeout(() => setSent(false), 4000)
    } catch (err) {
      console.error(err)
      setError('Failed to send — try again later.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <section id="contact" className="contact">
      <h2>Plan Your Journey</h2>
      {sent ? <div className="notice">✓ Thank you! We've received your enquiry and will contact you soon.</div> : (
        <form onSubmit={submit} className="contact-form">
          {error ? <div className="notice error-notice">{error}</div> : null}
          <div className="form-row">
            <input name="name" placeholder="Your name *" value={form.name} onChange={update} />
            <input name="destination" placeholder="Destination *" value={form.destination} onChange={update} />
          </div>
          <div className="form-row">
            <input name="people" placeholder="Number of people" value={form.people} onChange={update} />
            <input name="days" placeholder="Days" value={form.days} onChange={update} />
          </div>
          <input name="email" placeholder="Email *" type="email" value={form.email} onChange={update} />
          <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={update} />
          <button className="btn primary" disabled={loading}>{loading ? 'Sending…' : 'Send Enquiry'}</button>
        </form>
      )}
    </section>
  )
}
