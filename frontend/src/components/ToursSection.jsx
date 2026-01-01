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

// Map section IDs to background images
const sectionBackgrounds = {
  'nature': natureBg,
  'beach': beachBg,
  'divine': divineBg,
  'luxury': luxuryBg,
  'corporate': corporateBg,
  'group-tours': groupBg,
  'quick-tours': quickBg,
  'all-tours': allBg
}

export default function ToursSection({title, items=[], id}){
  const bgImage = sectionBackgrounds[id]
  const sectionStyle = bgImage ? {
    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.25), rgba(0,0,0,0.2)), url('${bgImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#f5f5f5'
  } : {}

  return (
    <section id={id || undefined} className={`tours-section container ${bgImage ? 'has-bg' : ''}`} style={sectionStyle}>
      <h2>{title}</h2>
      <Carousel items={items} autoplayInterval={3200} />
    </section>
  )
}
