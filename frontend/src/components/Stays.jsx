import React from 'react'

export default function Stays({list=[]}){
  return (
    <section id="stays" className="stays container">
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
