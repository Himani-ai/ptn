import React from 'react'

export default function Grid({items=[]}){
  if (!items.length) return <div className="grid empty">No tours available</div>
  return (
    <div className="grid">
      {items.map((it, idx)=> (
        <div key={idx} className="card">
          <div className="card-media" style={{backgroundImage: it.image ? `url(${it.image})` : undefined, backgroundSize: 'cover'}} />
          <div className="card-body">
            <h3>{it.title}</h3>
            <p className="muted">{it.category}</p>
            {it.description ? <p className="muted" style={{fontSize:13, marginTop:6}}>{it.description}</p> : null}
          </div>
        </div>
      ))}
    </div>
  )
}
