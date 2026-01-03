import React from 'react'

export default function Hero({ onKnowMore }){
  const handleKnowMore = () => {
    if (onKnowMore) {
      onKnowMore()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="t-slogan">Escape. Explore. Evolve.</h1>
        <div className="t-subtext">
          <div className="row">
            <span>Unforgettable memories</span>
            <span>Beyond Boundaries</span>
          </div>
          <div className="row">
            <span>Nature's Embrace</span>
            <span>Rooted in Culture</span>
          </div>
          <div className="row">
            <span>Curated escapes</span>
            <span>Soulful journeys</span>
          </div>
        </div>
        <a className="cta" href="#about" onClick={handleKnowMore}>Know About Us</a>
      </div>
    </section>
  )
}
