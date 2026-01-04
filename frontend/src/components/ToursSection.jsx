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

// Explore our highlights images
import exploreCorporateGroups from '../assets/Explore our highlights/Corporate Groups.jpg'
import exploreLuxuryStays from '../assets/Explore our highlights/luxury stays.jpeg'
import exploreDayOuting from '../assets/Explore our highlights/dayouting.jpg'
import exploreGroupTours from '../assets/Explore our highlights/Group Tours.jpg'
import exploreNatureStays from '../assets/Explore our highlights/Nature Stays.jpg'
import exploreBeachFront from '../assets/Explore our highlights/Beach Front Stay.jpg'
import exploreAllTours from '../assets/Explore our highlights/all tours.jpeg'
import exploreQuickTours from '../assets/Explore our highlights/Quick Tours.jpg'

// Corporate Stays/Tours images
import corporateRetreat from '../assets/Corporate staystours/Corporate Retreat.jpg'
import businessConferences from '../assets/Corporate staystours/Business COnferences.jpg'
import teamOuting from '../assets/Corporate staystours/Team Outing.jpg'

// Day Outing images
import dayBannerghatta from '../assets/day outing/Bannerghatta.jpg'
import dayMysore from '../assets/day outing/Mysore.jpg'
import dayShivanaSamudra from '../assets/day outing/ShivanaSamudra.jpg'
import dayNandiHills from '../assets/day outing/nandi hills.jpg'

// Group Tours images
import groupCorporate from '../assets/group tours/Corporate Groups.jpg'
import groupPilgrimage from '../assets/group tours/Group Pilgrimage.jpg'
import groupLadies from '../assets/group tours/LAdies Tour.jpg'
import groupSchool from '../assets/group tours/School Trip.jpg'

// Luxury Stays images
import luxuryBoutique from '../assets/luxury stays/Boutique Hotels.jpg'
import luxuryResorts from '../assets/luxury stays/Luxury resorts.jpg'
import luxuryPalace from '../assets/luxury stays/Palace Stay.jpg'
import luxuryVilla from '../assets/luxury stays/Private Villa Stay.jpg'

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

// Card images mapping for each section - match by title name
const sectionCardImages = {
  'corporate': {
    'Corporate Retreats': corporateRetreat,
    'Business Conferences': businessConferences,
    'Team Offsite': teamOuting
  },
  'luxury': {
    'Luxury Resorts': luxuryResorts,
    'Palace Stays': luxuryPalace,
    'Private Villas': luxuryVilla,
    'Boutique Hotels': luxuryBoutique
  },
  'day-outing': {
    'Nandi Hills': dayNandiHills,
    'Bannerghatta': dayBannerghatta,
    'Shivanasamudra': dayShivanaSamudra,
    'Mysore Day Trip': dayMysore
  },
  'group-tours': {
    'Group Pilgrimage': groupPilgrimage,
    'School Trips': groupSchool,
    'Corporate Groups': groupCorporate,
    'Ladies Trips': groupLadies
  },
  'nature': {
    'Forest Stay': exploreNatureStays,
    'River Front Stay': exploreNatureStays,
    'Hill Station Stay': exploreNatureStays
  },
  'beach': {
    'Goa': exploreBeachFront,
    'Pondicherry': exploreBeachFront,
    'Varkala': exploreBeachFront,
    'Phuket': exploreBeachFront,
    'Bali': exploreBeachFront
  },
  'all-tours': {
    'All Tours': exploreAllTours
  },
  'quick-tours': {
    'Weekend Goa': exploreQuickTours,
    'Ooty Weekend': exploreQuickTours,
    'Pondicherry Quick Trip': exploreQuickTours
  }
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
  const sectionImages = sectionCardImages[id] || {}

  return (
    <section id={id || undefined} className={`tours-section container ${bgImage ? 'has-bg' : ''}`} style={sectionStyle}>
      <h2>{title}</h2>
      {isGrid ? (
        <div className="tours-grid">
          {items.map((it, idx)=>{
            const itemTitle = it.title || ''
            const cardImage = sectionImages[itemTitle] || null
            return (
              <div key={`${itemTitle || idx}`} className="tour-card" style={{
                backgroundImage: cardImage ? `url('${cardImage}')` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '140px',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                padding: '8px'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
                  borderRadius: '12px'
                }} />
                <div className="tour-card-body" style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: '#ffffff',
                    margin: 0,
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px'
                  }}>{itemTitle}</h3>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <Carousel items={items} autoplayInterval={3200} />
      )}
    </section>
  )
}
