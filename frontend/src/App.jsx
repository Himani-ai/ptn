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

export default function App(){
  const [tours, setTours] = useState([])
  const [showAbout, setShowAbout] = useState(false)
  
  useEffect(()=>{
    fetch('/api/tours').then(r=>r.json()).then(setTours).catch(()=>setTours([]))
  },[])

  const highlights = tours.length ? tours.slice(0,6) : []
  // Use normalized lists as fallback when API doesn't return categorized tours
  const divine = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('divine')) : destinations.normalized.divine.map(d=>({title:d}))
  const domestic = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('domestic')) : destinations.normalized.domesticDetailed.map(d=>({title:d.title || d}))
  const international = tours.length ? tours.filter(t=>t.category && t.category.toLowerCase().includes('international')) : destinations.normalized.internationalDetailed.map(d=>({title:d.title || d}))

  const groups = {
    'Unique experiential categories': destinations.normalized.experientialCategories.map(t=>({title:t})),
    'Divine Tours': destinations.normalized.divine.map(d=>({title:d})),
    'Domestic Tours': destinations.normalized.domesticDetailed.map(d=>({title:d.title || d, subtitle: Array.isArray(d.places) ? d.places.join(', ') : undefined})),
    'International Tours': destinations.normalized.internationalDetailed.map(d=>({title:d.title || d, subtitle: Array.isArray(d.places) ? d.places.join(', ') : undefined}))
  }

  // Additional highlight subsections requested by user
  const corporate = [{title:'Corporate Retreats'},{title:'Business Conferences'},{title:'Team Offsite'}]
  const natureStays = destinations.normalized.experientialCategories.filter(c=>c.toLowerCase().includes('forest')||c.toLowerCase().includes('river')||c.toLowerCase().includes('hill')).map(t=>({title:t}))
  const beachFront = ['Goa','Pondicherry','Varkala','Phuket','Bali'].map(t=>({title:t}))
  const luxury = ['Luxury Resorts','Palace Stays','Private Villas','Boutique Hotels'].map(t=>({title:t}))
  const dayOuting = ['Nandi Hills','Bannerghatta','Shivanasamudra','Munnar Day Trip'].map(t=>({title:t}))
  const quickTours = ['Weekend Goa','Ooty Weekend','Pondicherry Quick Trip'].map(t=>({title:t}))
  const groupTours = ['Group Pilgrimage','School Trips','Corporate Groups'].map(t=>({title:t}))
  
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
    {id:'corporate', title:'Corporate stays / tours'},
    {id:'nature', title:'Nature stays'},
    {id:'beach', title:'Beach front stays'},
    {id:'luxury', title:'Luxury stays'},
    {id:'all-tours', title:'All Tours'},
    {id:'day-outing', title:'Day outing'},
    {id:'quick-tours', title:'Quick tours'},
    {id:'group-tours', title:'Group tours'}
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
          <h2 className="highlights-title">Explore our highlights</h2>
          <Carousel items={topCategories} renderItem={(it)=>(
            <div onClick={()=>{document.getElementById(it.id)?.scrollIntoView({behavior:'smooth'})}} style={{cursor:'pointer'}}>
              <div className="card carousel-card highlights-card">
                <div className="card-body highlights-card-body">
                  <h3>{it.title}</h3>
                </div>
              </div>
            </div>
          )} autoplay={true} autoplayInterval={2000} />
        </section>

        <Categories groups={groups} />

        <ToursSection id="corporate" title="Corporate stays / tours" items={corporate} />
        <ToursSection id="nature" title="Nature stays" items={natureStays} />
        <ToursSection id="beach" title="Beach front stays" items={beachFront} />
        <ToursSection id="luxury" title="Luxury stays" items={luxury} />
        <ToursSection id="all-tours" title="All Tours" items={allTours} />
        <ToursSection id="day-outing" title="Day outing" items={dayOuting} />
        <ToursSection id="quick-tours" title="Quick tours" items={quickTours} />
        <ToursSection id="group-tours" title="Group tours" items={groupTours} />

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
