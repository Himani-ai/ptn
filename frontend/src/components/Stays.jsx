import React from 'react'
import staysBg from '../assets/stays.png'

// Import stay images - only for places we have images for
import coorgImg from '../assets/stays/Coorg.jpg'
import chikmagalurImg from '../assets/stays/Chikmagalur.jpg'
import sakleshpuraImg from '../assets/stays/sakleshpura.jpeg'
import mysoreImg from '../assets/stays/Mysore.jpg'
import wayanadImg from '../assets/stays/Wayanad.jpg'
import ootyImg from '../assets/stays/Ooty.jpg'
import kodaikanal from '../assets/stays/Kodaikanal.jpg'
import goaImg from '../assets/stays/Goa.jpg'
import pondicherryImg from '../assets/stays/pondicherry.jpeg'
import udupiImg from '../assets/stays/Udupi.jpg'
import mangaloreImg from '../assets/stays/Mangalore.jpg'
import kovallam from '../assets/stays/Kovallam.jpg'
import munnarImg from '../assets/stays/Munnar.jpg'
import varkalaImg from '../assets/stays/Varkala.jpg'

// Map stay names to images
const stayImages = {
  'Coorg': coorgImg,
  'Chikmagalur': chikmagalurImg,
  'Sakleshpur': sakleshpuraImg,
  'Mysore': mysoreImg,
  'Wayanad': wayanadImg,
  'Ooty': ootyImg,
  'Kodaikanal': kodaikanal,
  'Goa': goaImg,
  'Pondicherry': pondicherryImg,
  'Udupi': udupiImg,
  'Mangalore': mangaloreImg,
  'Kovallam': kovallam,
  'Munnar': munnarImg,
  'Varkala': varkalaImg
}

export default function Stays({list=[]}){
  const staysStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.75)), url('${staysBg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <section id="stays" className="stays container" style={staysStyle}>
      <h2>Stays</h2>
      <div className="stays-grid">
        {list.map((s,i)=> {
          const stayImg = stayImages[s] || null
          return (
            <div key={i} className="stay-card card" style={{
              backgroundImage: stayImg ? `url('${stayImg}')` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '180px',
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
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                borderRadius: '8px'
              }} />
              <div className="card-body" style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                textAlign: 'center'
              }}>
                <strong style={{
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px',
                  display: 'block'
                }}>{s}</strong>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
