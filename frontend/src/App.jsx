import React, {useEffect, useState} from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Grid from './components/Grid'
import ContactForm from './components/ContactForm'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import ContactUs from './components/ContactUs'
import Reviews from './components/Reviews'
import ToursSection from './components/ToursSection'
import Stays from './components/Stays'
import AboutUs from './components/AboutUs'
import destinations from './data/destinations'
import exploreHighlightsBg from './assets/explore-highlights.png'

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '')

export default function App(){
  const [tours, setTours] = useState([])
  const [showAbout, setShowAbout] = useState(false)
  
  useEffect(()=>{
    const url = `${API_BASE}/api/tours`
    fetch(url).then(r=>r.json()).then(setTours).catch(()=>setTours([]))
  },[])

  const highlights = tours.length ? tours.slice(0,6) : []
  // Use normalized lists as fallback when API doesn't return categorized tours
  const divine = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('divine')) : destinations.normalized.divine.map(d=>({title:d}))
  const domestic = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('domestic')) : destinations.normalized.domesticDetailed.map(d=>({title:d.title || d}))
  const international = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('international')) : destinations.normalized.internationalDetailed.map(d=>({title:d.title || d}))

  const groups = {
    'Unique Experiential Categories': destinations.normalized.experientialCategories.map(t=>({title:t})),
    'Divine Tours': destinations.normalized.divine.map(d=>({title:d})),
    'Domestic Tours': destinations.normalized.domesticDetailed.map(d=>({title:d.title || d, subtitle: Array.isArray(d.places) ? d.places.join(', ') : undefined})),
    'International Tours': destinations.normalized.internationalDetailed.map(d=>({title:d.title || d, subtitle: Array.isArray(d.places) ? d.places.join(', ') : undefined}))
  }

  // Additional highlight subsections requested by user
  const corporate = [{title:'Corporate Retreats'},{title:'Business Conferences'},{title:'Team Offsite'}]
  const natureStays = destinations.normalized.experientialCategories.filter(c=>c.toLowerCase().includes('forest')||c.toLowerCase().includes('river')||c.toLowerCase().includes('hill')).map(t=>({title:t}))
  const beachFront = ['Goa','Pondicherry','Varkala','Phuket','Bali'].map(t=>({title:t}))
  const luxury = ['Luxury Resorts','Palace Stays','Private Villas','Boutique Hotels'].map(t=>({title:t}))
  const dayOuting = ['Nandi Hills','Bannerghatta','Shivanasamudra','Mysore Day Trip'].map(t=>({title:t}))
  const quickTours = ['Weekend Goa','Ooty Weekend','Pondicherry Quick Trip'].map(t=>({title:t}))
  const groupTours = ['Group Pilgrimage','School Trips','Corporate Groups','Ladies Trips'].map(t=>({title:t}))
  
  const requestedDomestic = ['Gujarat','Rajasthan','North East','Golden Triangle','Madhya Pradesh']
  const requestedInternational = ['Thailand','Indonesia','Vietnam','Dubai','Singapore','Malaysia','Mauritius','Nepal','Bhutan','Georgia','Azerbaijan','Maldives']

  const mergeUnique = (base=[], extras=[]) => {
    const map = new Map()
    const pushItem = (item) => {
      const title = item?.title || item
      if (!title) return
      if (!map.has(title)) map.set(title, item.title ? item : {title})
    }
    base.forEach(pushItem)
    extras.forEach(pushItem)
    return Array.from(map.values())
  }

  const domesticFallback = ['Goa','Kerala','Karnataka','Uttarakhand','Tamil Nadu','Shimla - Manali','Kashmir','Golden Triangle','Gujarat','Rajasthan','North East','Madhya Pradesh'].map(title=>({title}))
  const internationalFallback = ['Singapore','Malaysia','Indonesia','Vietnam','Dubai','Mauritius','Thailand','Georgia','Azerbaijan','Bhutan','Nepal','Maldives'].map(title=>({title}))

  const domesticBase = (domestic && domestic.length) ? domestic : domesticFallback
  const internationalBase = (international && international.length) ? international : internationalFallback

  const domesticCarousel = mergeUnique(domesticBase, requestedDomestic)
  const internationalCarousel = mergeUnique(internationalBase, requestedInternational)
  
  // Unified all tours section
  const allTours = mergeUnique([...domesticCarousel, ...internationalCarousel], [])

  // top categories for the main highlights carousel (each links to a section below)
  const topCategories = [
    {id:'corporate', title:'Corporate Stays / Tours', active: true},
    {id:'nature', title:'Nature Stays', active: false},
    {id:'beach', title:'Beach Front Stays', active: false},
    {id:'luxury', title:'Luxury Stays', active: true},
    {id:'all-tours', title:'All Tours', active: false},
    {id:'day-outing', title:'Day Outing', active: true},
    {id:'quick-tours', title:'Quick Tours', active: false},
    {id:'group-tours', title:'Group Tours', active: true}
  ]

  return (
    <div className="app-root">
      <Header />
      {showAbout ? (
        <AboutUs onBackToHome={() => setShowAbout(false)} />
      ) : (
        <>
          <Hero onKnowMore={() => setShowAbout(true)} />
          <main className="container">
        <section
          className="highlights-section has-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url('${exploreHighlightsBg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h2 className="highlights-title">Explore Our Highlights</h2>
          <Carousel items={topCategories} renderItem={(it)=>(
            <div onClick={()=>{
              if (it.active) {
                document.getElementById(it.id)?.scrollIntoView({behavior:'smooth'})
              }
            }} style={{cursor: it.active ? 'pointer' : 'default', opacity: it.active ? 1 : 0.6}}>
              <div className="card carousel-card highlights-card">
                <div className="card-body highlights-card-body">
                  <h3>{(it.title || '').toUpperCase()}</h3>
                </div>
              </div>
            </div>
          )} autoplay={true} autoplayInterval={2000} />
        </section>

        <Categories groups={groups} />

        {/* Active sections */}
        <ToursSection id="corporate" title="Corporate Stays / Tours" items={corporate} />
        <ToursSection id="luxury" title="Luxury Stays" items={luxury} />
        <ToursSection id="day-outing" title="Day Outing" items={dayOuting} />
        <ToursSection id="group-tours" title="Group Tours" items={groupTours} />
        
        {/* HIDDEN SECTIONS - Code kept for future use */}
        {/* <ToursSection id="nature" title="Nature Stays" items={natureStays} />
        <ToursSection id="beach" title="Beach Front Stays" items={beachFront} />
        <ToursSection id="all-tours" title="All Tours" items={allTours} />
        <ToursSection id="quick-tours" title="Quick Tours" items={quickTours} /> */}

        <Stays list={["Coorg","Chikmagalur","Sakaleshpura","Mysore","Wayanad","Ooty","Kodaikanal","Goa","Pondicherry","Udupi","Mangalore"]} />

        <ContactForm />
        <ContactUs />
        <Reviews />
      </main>
        </>
      )}
    </div>
  )
}
