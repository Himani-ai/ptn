import React from 'react'
import staysBg from '../assets/stays.png'

export default function Stays({list=[]}){
  const staysStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.75)), url('${staysBg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section id="stays" className="stays container" style={staysStyle}>
      <h2>Stays</h2>
      <div className="stays-grid">
        {list.map((s,i)=> (
          <div key={i} className="stay-card card">
            <div className="card-media" />
            <div className="card-body">
              <strong>{s}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
