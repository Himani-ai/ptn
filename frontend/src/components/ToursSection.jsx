import React from 'react'
import Carousel from './Carousel'
import natureBg from '../assets/nature-stay.png'
import beachBg from '../assets/beach-stay.png'
import divineBg from '../assets/new divine.png'
import luxuryBg from '../assets/luxury-stay.png'
import corporateBg from '../assets/corporatepng.png'
import groupBg from '../assets/grouppng.png'
import quickBg from '../assets/quickpng.png'
import allBg from '../assets/all png.png'
import dayOutingBg from '../assets/day-outing.png'

// Map section IDs to background images
const sectionBackgrounds = {
  'nature': natureBg,
  'beach': beachBg,
  'divine': divineBg,
  'luxury': luxuryBg,
  'corporate': corporateBg,
  'group-tours': groupBg,
  'quick-tours': quickBg,
  'all-tours': allBg,
  'day-outing': dayOutingBg
}

const gridSections = new Set(['corporate','luxury','day-outing','group-tours'])

export default function ToursSection({title, items=[], id}){
  const bgImage = sectionBackgrounds[id]
  const sectionStyle = bgImage ? {
    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.05)), url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f5f5f5'
  } : {}

  const isGrid = gridSections.has(id)

  return (
    <section id={id || undefined} className={`tours-section container ${bgImage ? 'has-bg' : ''}`} style={sectionStyle}>
      <h2>{title}</h2>
      {isGrid ? (
        <div className="tours-grid">
          {items.map((it, idx)=>(
            <div key={`${it.title || idx}`} className="tour-card">
              <div className="tour-card-body">
                <div className="tour-chip">{(idx+1).toString().padStart(2,'0')}</div>
                <h3>{it.title || ''}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Carousel items={items} autoplayInterval={3200} />
      )}
    </section>
  )
}
