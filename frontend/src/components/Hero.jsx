import React from 'react'

export default function Hero({ onKnowMore }){
  const handleKnowMore = () => {
    if (onKnowMore) {
      onKnowMore()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <header className="hero">
      <div className="hero-inner container">
        <h1 className="hero-title fade-in">Escape. Explore. Evolve.</h1>
        <div className="hero-lines fade-in" style={{animationDelay:'0.08s'}}>
          <p className="hero-line">Unforgettable memories</p>
          <p className="hero-line">Beyond Boundaries</p>
          <p className="hero-line">Nature's Embrace</p>
          <p className="hero-line">Rooted in Culture</p>
          <p className="hero-line">Curated escapes</p>
          <p className="hero-line">Soulful journeys</p>
          <p className="hero-line">Begin here</p>
        </div>
        <button className="hero-cta fade-in" style={{animationDelay:'0.16s'}} onClick={handleKnowMore}>Tap To Know More</button>
        <div className="hero-arrows fade-in" style={{animationDelay:'0.24s'}}>
          <span className="hero-arrow" aria-hidden="true"></span>
          <span className="hero-arrow" aria-hidden="true"></span>
          <span className="hero-arrow" aria-hidden="true"></span>
        </div>
      </div>
    </header>
  )
}
