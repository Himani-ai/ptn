import React, { useRef, useEffect, useState } from 'react'

export default function Carousel({ items = [], renderItem, autoplay = true, autoplayInterval = 3500 }){
  const ref = useRef(null)
  const [paused, setPaused] = useState(false)

  function scroll(dirOrDelta){
    const el = ref.current
    if (!el) return
    // support either numeric delta (pixels) or direction multiplier
    if (Math.abs(dirOrDelta) > 50) {
      el.scrollBy({ left: dirOrDelta, behavior: 'smooth' })
      return
    }
    const step = Math.floor(el.clientWidth * 0.8)
    el.scrollBy({ left: dirOrDelta * step, behavior: 'smooth' })
  }

  // autoplay effect
  useEffect(()=>{
    if (!autoplay || !items || items.length <= 1) return
    const id = setInterval(()=>{
      if (paused) return
      const el = ref.current
      if (!el) return
      const step = Math.floor(el.clientWidth * 0.8)
      // if near the end, smoothly go back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, Number(autoplayInterval) || 2000)
    return ()=> clearInterval(id)
  }, [autoplay, autoplayInterval, paused, items])

  if (!items || !items.length) return <div className="carousel-empty">No highlights</div>

  return (
    <div className="carousel-wrap" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      <button className="carousel-btn prev" onClick={()=>scroll(-1)} aria-label="previous">‹</button>
      <div className="carousel" ref={ref}>
        {items.map((it, idx) => (
          <div key={idx} className="carousel-item">
            {renderItem ? renderItem(it) : (
              <div className="card carousel-card">
                <div className="card-media" style={{backgroundImage: it.image ? `url(${it.image})` : undefined}} />
                <div className="card-body">
                  <h3>{it.title}</h3>
                  <p className="muted">{it.category}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={()=>scroll(1)} aria-label="next">›</button>
    </div>
  )
}
