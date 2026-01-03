import React, {useState} from 'react'

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '')

export default function EnquiryForm(){
  const [form, setForm] = useState({name:'', phone:'', destination:'', people:'', days:''})
  const [status, setStatus] = useState(null)
  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }
  async function submit(e){
    e.preventDefault()
    try{
      const res = await fetch(`${API_BASE}/api/contact`, {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({type:'enquiry', ...form})})
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      setForm({name:'', phone:'', destination:'', people:'', days:''})
    }catch(err){ setStatus('error') }
  }
  return (
    <section id="enquiry" className="enquiry container">
      <h2>Plan an enquiry</h2>
      {status === 'sent' && <div className="notice">Enquiry sent. We'll contact you soon.</div>}
      <form className="enquiry-form" onSubmit={submit}>
        <input name="name" placeholder="Name" value={form.name} onChange={update} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={update} required />
        <input name="destination" placeholder="Destination" value={form.destination} onChange={update} required />
        <input name="people" placeholder="Number of people" value={form.people} onChange={update} />
        <input name="days" placeholder="Days" value={form.days} onChange={update} />
        <button className="btn primary">Send Enquiry</button>
      </form>
    </section>
  )
}
