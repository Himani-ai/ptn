import React, { useState } from 'react'
import divineBg from '../assets/new divine.png'
import uniqueBg from '../assets/unique.jpg'
import domesticBg from '../assets/domesticpng.png'
import internationalBg from '../assets/internationalpng.png'

// Import unique experiential category images
import treeHouseImg from '../assets/unique experiential category/tree house.jpg'
import forestStayImg from '../assets/unique experiential category/forest stay.jpg'
import riverFrontImg from '../assets/unique experiential category/river front.jpg'
import caveStayImg from '../assets/unique experiential category/cave stay.jpg'
import islandStayImg from '../assets/unique experiential category/island stay.jpg'
import hillStationImg from '../assets/unique experiential category/hill station.jpg'
import iglooImg from '../assets/unique experiential category/igloo.jpg'
import teaEstateImg from '../assets/unique experiential category/tea estate.jpg'
import palaceImg from '../assets/unique experiential category/palace.jpg'
import luxuryImg from '../assets/unique experiential category/luxury.jpg'
import cruiseStayImg from '../assets/unique experiential category/cruise stay.png'
import homestayImg from '../assets/unique experiential category/homestay.png'

// Import Divine Tours images
import ayodhyaImg from '../assets/divine tours/ayodhya.jpg'
import varanasi from '../assets/divine tours/varanasi.jpg'
import prayagrajImg from '../assets/divine tours/prayagraj.jpg'
import shirdiImg from '../assets/divine tours/shirdi.png'
import maduraiImg from '../assets/divine tours/madurai.jpg'
import kanyakumariImg from '../assets/divine tours/kanyakumari.jpg'
import rameshwaramImg from '../assets/divine tours/rameshwaram.jpg'
import ujjainImg from '../assets/divine tours/ujjain.jpg'
import somnathImg from '../assets/divine tours/somanth.png'
import dwarakaImg from '../assets/divine tours/dwaraka.png'
import jyotirlingaImg from '../assets/divine tours/jyothirlinga piligirmage.jpg'
import jagannathImg from '../assets/divine tours/jagannath puri.jpg'
import haridwarImg from '../assets/divine tours/haridwar.jpg'
import rishikeshImg from '../assets/divine tours/rishikesh.jpg'
import udupiDivineImg from '../assets/divine tours/udupi.png'
import gokarnaImg from '../assets/divine tours/gokarna-murudeshwara.jpg'
import vaishnoDeviImg from '../assets/divine tours/vaishnodevi.jpg'
import kamakhyaImg from '../assets/divine tours/Kamakhya temple .png'
import amritsarImg from '../assets/divine tours/amritsar.jpg'

// Import Domestic Tours images
import goldenTriangleImg from '../assets/domestic tours/golden triangle.jpg'
import shimlaManaliImg from '../assets/domestic tours/shimla manali.jpg'
import gujaratImg from '../assets/domestic tours/gujarat.png'
import rajasthanImg from '../assets/domestic tours/rajasthan.jpg'
import kashmirImg from '../assets/domestic tours/kashmir.jpg'
import ladakhImg from '../assets/domestic tours/ladakh.jpg'
import uttarakhandImg from '../assets/domestic tours/uttarakhand.jpg'
import westBengalImg from '../assets/domestic tours/westbengal.jpg'
import northEastImg from '../assets/domestic tours/north east.jpg'
import ootyImg from '../assets/domestic tours/ooty.jpg'
import goaImg from '../assets/domestic tours/goa.jpg'
import pondicherryImg from '../assets/domestic tours/pondicherry.jpg'
import keralaImg from '../assets/domestic tours/kerala.jpg'
import karnatakaImg from '../assets/domestic tours/karnataka.jpg'
import madhyaPradeshImg from '../assets/domestic tours/madhya pradesh.jpg'
import andamanImg from '../assets/domestic tours/andaman.jpg'

// Import International Tours images
import singaporeImg from '../assets/international tours/singapore.jpg'
import malaysiaImg from '../assets/international tours/malasia.jpg'
import indonesiaImg from '../assets/international tours/indonesia.jpg'
import vietnamImg from '../assets/international tours/vietnam.jpg'
import thailandImg from '../assets/international tours/thiland.jpg'
import uaeImg from '../assets/international tours/uae.jpg'
import hongKongImg from '../assets/international tours/Hong Kong & Macau.jpg'
import mauritiusImg from '../assets/international tours/mauritius.jpg'
import philippinesImg from '../assets/international tours/philippines.jpg'
import georgiaImg from '../assets/international tours/georgia.jpg'
import azerbaijanImg from '../assets/international tours/azerbaijan.jpg'
import maldivesImg from '../assets/international tours/maldives.jpg'
import nepalImg from '../assets/international tours/nepal.jpg'
import bhutanImg from '../assets/international tours/bhutan.jpg'
import japanImg from '../assets/international tours/japan.jpg'
import armeniaImg from '../assets/international tours/armenia.jpg'

// Normalize helper: lowercase, trim, collapse spaces, unify separators
function normalize(str){
  return String(str || '')
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, ' ')        // collapse spaces, hyphens, underscores
    .replace(/\s*\/\s*/g, ' / ')   // normalize slashes with spaces around
}

// Map category names to images using normalized keys
const categoryImages = {
  [normalize('Tree house stay')]: treeHouseImg,
  [normalize('Tree house stays')]: treeHouseImg,
  [normalize('Forest stay')]: forestStayImg,
  [normalize('Forest stays')]: forestStayImg,
  [normalize('River front stay')]: riverFrontImg,
  [normalize('River front stays')]: riverFrontImg,
  [normalize('Cave stay')]: caveStayImg,
  [normalize('Cave stays')]: caveStayImg,
  [normalize('Island stay')]: islandStayImg,
  [normalize('Island stays')]: islandStayImg,
  [normalize('Hill station stay')]: hillStationImg,
  [normalize('Hill station stays')]: hillStationImg,
  [normalize('Igloo stay')]: iglooImg,
  [normalize('Igloo stays')]: iglooImg,
  [normalize('Tea estate stay')]: teaEstateImg,
  [normalize('Tea estate stays')]: teaEstateImg,
  [normalize('Heritage / palace stay')]: palaceImg,
  [normalize('Heritage / palace stays')]: palaceImg,
  [normalize('Luxury stay')]: luxuryImg,
  [normalize('Luxury stays')]: luxuryImg,
  [normalize('Cruise stay')]: cruiseStayImg,
  [normalize('Cruise stays')]: cruiseStayImg,
  [normalize('Homestay')]: homestayImg,
  [normalize('Homestays')]: homestayImg
}

// Divine Tours image mapping
const divineImages = {
  [normalize('Ayodhya')]: ayodhyaImg,
  [normalize('Varanasi')]: varanasi,
  [normalize('Prayagraj')]: prayagrajImg,
  [normalize('Shirdi')]: shirdiImg,
  [normalize('Madurai')]: maduraiImg,
  [normalize('Kanyakumari')]: kanyakumariImg,
  [normalize('Rameshwaram')]: rameshwaramImg,
  [normalize('Ujjain')]: ujjainImg,
  [normalize('Somnath')]: somnathImg,
  [normalize('Dwarka')]: dwarakaImg,
  [normalize('Jyotirlinga pilgrimage')]: jyotirlingaImg,
  [normalize('Jagannath Puri')]: jagannathImg,
  [normalize('Haridwar')]: haridwarImg,
  [normalize('Rishikesh')]: rishikeshImg,
  [normalize('Udupi')]: udupiDivineImg,
  [normalize('Gokarna-Murudeshwara')]: gokarnaImg,
  [normalize('Gokarna Murudeshwara')]: gokarnaImg,
  [normalize('Vaishno Devi Temple')]: vaishnoDeviImg,
  [normalize('Vaishno Devi')]: vaishnoDeviImg,
  [normalize('Kamakhya Temple')]: kamakhyaImg,
  [normalize('Kamakhya')]: kamakhyaImg,
  [normalize('Amritsar')]: amritsarImg
}

// Domestic Tours image mapping
const domesticImages = {
  [normalize('Golden Triangle')]: goldenTriangleImg,
  [normalize('Shimla - Manali')]: shimlaManaliImg,
  [normalize('Gujarat')]: gujaratImg,
  [normalize('Rajasthan')]: rajasthanImg,
  [normalize('Kashmir')]: kashmirImg,
  [normalize('Leh Ladakh')]: ladakhImg,
  [normalize('Uttarakhand')]: uttarakhandImg,
  [normalize('West Bengal')]: westBengalImg,
  [normalize('North East')]: northEastImg,
  [normalize('Ooty - Kodaikanal')]: ootyImg,
  [normalize('Ooty')]: ootyImg,
  [normalize('Kodaikanal')]: ootyImg,
  [normalize('Goa')]: goaImg,
  [normalize('Pondicherry')]: pondicherryImg,
  [normalize('Kerala')]: keralaImg,
  [normalize('Karnataka')]: karnatakaImg,
  [normalize('Hampi-Aihole-Pattadakal')]: karnatakaImg,
  [normalize('Hampi Aihole Pattadakal')]: karnatakaImg,
  [normalize('Madhya Pradesh')]: madhyaPradeshImg,
  [normalize('Andaman')]: andamanImg
}

// International Tours image mapping
const internationalImages = {
  [normalize('Singapore')]: singaporeImg,
  [normalize('Malaysia')]: malaysiaImg,
  [normalize('Indonesia')]: indonesiaImg,
  [normalize('Vietnam')]: vietnamImg,
  [normalize('Thailand')]: thailandImg,
  [normalize('UAE')]: uaeImg,
  [normalize('Hong Kong & Macau')]: hongKongImg,
  [normalize('Hong Kong')]: hongKongImg,
  [normalize('Macau')]: hongKongImg,
  [normalize('Mauritius')]: mauritiusImg,
  [normalize('Philippines')]: philippinesImg,
  [normalize('Georgia')]: georgiaImg,
  [normalize('Azerbaijan')]: azerbaijanImg,
  [normalize('Maldives')]: maldivesImg,
  [normalize('Nepal')]: nepalImg,
  [normalize('Bhutan')]: bhutanImg,
    [normalize('Japan')]: japanImg,
    [normalize('Armenia')]: armeniaImg
}

function Section({ title, items = [] }){
  const [expandedCard, setExpandedCard] = useState(null)
  const t = (title || '').toLowerCase()
  const isDivine = t.includes('divine')
  const isUnique = t.includes('unique')
  const isDomestic = t.includes('domestic')
  const isInternational = t.includes('international')
  
  // Determine which image mapping to use
  const imageMapping = isDivine ? divineImages : isDomestic ? domesticImages : isInternational ? internationalImages : isUnique ? categoryImages : null
  const useImageCards = isDivine || isDomestic || isInternational || isUnique
  
  const sectionStyle = {}
  
  // Use special rendering for sections with individual images (unique, divine, domestic, international)
  if (useImageCards && imageMapping) {
    return (
      <section className="category-section" style={sectionStyle}>
        <h3>{title}</h3>
        <div className="unique-categories-grid">
          {items.map((it, idx)=> {
            const itemTitleRaw = it.title || it
            const itemTitle = normalize(itemTitleRaw)
            const categoryImg = imageMapping[itemTitle]
            const places = Array.isArray(it.places) ? it.places : null
            const placesText = places ? places.join(', ') : null
            const isExpanded = expandedCard === idx
            const shouldTruncate = placesText && placesText.length > 40
            
            return (
              <div 
                key={idx} 
                className={`unique-cat-card ${isExpanded ? 'expanded' : ''}`}
                onClick={(e) => {
                  if (e.target.classList.contains('places-more')) {
                    e.stopPropagation()
                    setExpandedCard(isExpanded ? null : idx)
                  } else if (!e.target.closest('.unique-cat-overlay')) {
                    setExpandedCard(null)
                  }
                }}
              >
                <div 
                  className="unique-cat-image" 
                  style={categoryImg ? {
                    backgroundImage: `url("${categoryImg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {
                    backgroundColor: '#e0e0e0'
                  }}
                >
                  <div className="unique-cat-overlay">
                    <div className="unique-cat-title">{itemTitleRaw}</div>
                    {placesText && (
                      <div className="unique-cat-places">
                        {shouldTruncate && !isExpanded ? (
                          <>
                            {placesText.substring(0, 40)}
                            <span className="places-more" onClick={(e) => {
                              e.stopPropagation()
                              setExpandedCard(idx)
                            }}>...more</span>
                          </>
                        ) : (
                          placesText
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
  
  return (
    <section className={`category-section ${bg ? 'has-bg' : ''}`} style={sectionStyle}>
      <h3>{title}</h3>
      <div className="category-grid">
        {items.map((it, idx)=> (
          <div className="category-card" key={idx}>
            <div className="category-media" />
            <div className="category-body">
              <div className="category-title">{it.title || it}</div>
              {it.subtitle ? <div className="muted" style={{fontSize:12}}>{it.subtitle}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const defaultCategories = [
  'Tree house stay','Forest stay','River front stay','Cave stay','Island stay','Hill station stay','Igloo stays','Tea-estate stays','Heritage palace stays','Luxury stays'
]

export default function Categories({ groups = null, categories = null }){
  // If `groups` provided (object), render each section. Otherwise render a single categories section.
  if (groups && Object.keys(groups).length) {
    return (
      <div className="categories-root container">
        {Object.keys(groups).map((k)=> (
          <Section key={k} title={k} items={groups[k] || []} />
        ))}
      </div>
    )
  }
  const list = Array.isArray(categories) ? categories : defaultCategories
  return (
    <section className="categories container">
      <h3>Unique experiential categories</h3>
      <div className="categories-grid unique-categories-grid">
        {list.map((c, i) => {
          const titleRaw = c.title || c
          const title = normalize(titleRaw)
          const categoryImg = categoryImages[title]
          return (
            <div key={i} className="unique-cat-card">
              <div 
                className="unique-cat-image" 
                style={categoryImg ? {
                  backgroundImage: `url("${categoryImg}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : {}}
              >
                <div className="unique-cat-overlay">
                  <div className="unique-cat-title">{titleRaw}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
