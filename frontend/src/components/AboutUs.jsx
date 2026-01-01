import React from 'react'
import aboutBannerImg from '../assets/About us/About picTOURnic.png'
import whoWeAreImg from '../assets/About us/WHO ARE WE.png'
import iataCert from '../assets/About us/IATA CERTIFICATE.jpeg'
import nidhiCert from '../assets/About us/NIDHI CRETIFICATE .jpeg'
import startupCert from '../assets/About us/STARTUP CERTIFICATE.jpeg'
import tafiCert from '../assets/About us/TAFI CERTIFICATE.jpeg'
import curatedAccommodations from '../assets/About us/Curated Accommodations.png'
import customizedItineraries from '../assets/About us/Customized Itineraries.png'
import expertGuidance from '../assets/About us/EXPERT GUIDANCE.png'
import adventureExperiences from '../assets/About us/Adventure Experiences.png'
import spiritualJourney from '../assets/About us/SPIRITUAL JOURNEY.png'
import groupFamilyTours from '../assets/About us/GROUP AND FAMILY TOURS.png'

export default function AboutUs({ onBackToHome }) {
  const handleBackToHome = () => {
    if (onBackToHome) {
      onBackToHome()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePlanJourney = () => {
    if (onBackToHome) {
      onBackToHome()
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div className="about-us-page">
      {/* Back Button */}
      <button className="back-to-home" onClick={handleBackToHome}>
        ← Back to Home
      </button>

      {/* Hero Section */}
      <section className="about-banner" style={{ backgroundImage: `linear-gradient(135deg, rgba(0,149,183,0.7), rgba(43,45,66,0.6)), url('${aboutBannerImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="about-banner-overlay">
          <div className="about-banner-content fade-in-up">
            <h1>About picTOURnic</h1>
            <p className="about-banner-subtitle">Crafting journeys that bring happiness</p>
            <button className="about-cta-btn" onClick={handlePlanJourney}>Plan Your Journey</button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-who-we-are">
        <div className="container">
          <h2 className="about-section-title fade-in-up">Who We Are</h2>
          <div className="who-we-are-content">
            <div className="who-we-are-image fade-in-left">
              <img src={whoWeAreImg} alt="Who We Are" className="who-we-are-img" />
            </div>
            <div className="who-we-are-text fade-in-right">
              <p>At picTOURnic, we believe travel is more than just visiting destinations—it's about creating memories that last a lifetime. We are passionate travel experts dedicated to crafting personalized journeys that bring joy, discovery, and authentic experiences.</p>
              <p>From serene getaways to thrilling adventures, we handle every detail so you can focus on what matters most: enjoying the moment.</p>
              
              <div className="who-we-are-features">
                <div className="feature-icon-item">
                  <div className="feature-icon authenticity">🏆</div>
                  <span>Authenticity</span>
                </div>
                <div className="feature-icon-item">
                  <div className="feature-icon comfort">🛋️</div>
                  <span>Comfort</span>
                </div>
                <div className="feature-icon-item">
                  <div className="feature-icon adventure">⛰️</div>
                  <span>Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="about-certifications">
        <div className="container">
          <h3 className="certifications-title fade-in-up">We are Certified by</h3>
          <div className="certifications-grid">
            <div className="cert-badge fade-in-up">
              <img src={iataCert} alt="IATA Certificate" className="cert-img" />
            </div>
            <div className="cert-badge fade-in-up">
              <img src={nidhiCert} alt="NIDHI Certificate" className="cert-img" />
            </div>
            <div className="cert-badge fade-in-up">
              <img src={startupCert} alt="Startup Certificate" className="cert-img" />
            </div>
            <div className="cert-badge fade-in-up">
              <img src={tafiCert} alt="TAFI Certificate" className="cert-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content fade-in-up">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="mission-statement">We make travel stress-free, personalized, and joyful.</p>
            <p className="mission-description">Our mission is to transform the way people experience travel by providing seamless planning, authentic connections, and unforgettable moments that resonate long after the journey ends.</p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="about-what-we-offer">
        <div className="container">
          <h2 className="about-section-title fade-in-up">What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card fade-in-up">
              <div className="offer-icon">🏨</div>
              <img src={curatedAccommodations} alt="Curated Accommodations" className="offer-img" />
              <h4>Curated Accommodations</h4>
              <p>From luxury resorts to cozy homestays, we select the perfect stay for your journey.</p>
            </div>
            <div className="offer-card fade-in-up">
              <div className="offer-icon">✈️</div>
              <img src={customizedItineraries} alt="Customized Itineraries" className="offer-img" />
              <h4>Customized Itineraries</h4>
              <p>Personalized travel plans tailored to your interests and preferences.</p>
            </div>
            <div className="offer-card fade-in-up">
              <div className="offer-icon">🗺️</div>
              <img src={expertGuidance} alt="Expert Guidance" className="offer-img" />
              <h4>Expert Guidance</h4>
              <p>Local insights and recommendations to help you discover hidden gems.</p>
            </div>
            <div className="offer-card fade-in-up">
              <div className="offer-icon">🎒</div>
              <img src={adventureExperiences} alt="Adventure Experiences" className="offer-img" />
              <h4>Adventure Experiences</h4>
              <p>Thrilling activities and unique experiences you'll never forget.</p>
            </div>
            <div className="offer-card fade-in-up">
              <div className="offer-icon">🕉️</div>
              <img src={spiritualJourney} alt="Spiritual Journeys" className="offer-img" />
              <h4>Spiritual Journeys</h4>
              <p>Peaceful pilgrimages and divine tours to sacred destinations.</p>
            </div>
            <div className="offer-card fade-in-up">
              <div className="offer-icon">👨‍👩‍👧‍👦</div>
              <img src={groupFamilyTours} alt="Group & Family Tours" className="offer-img" />
              <h4>Group & Family Tours</h4>
              <p>Memorable experiences designed for groups, families, and friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-choose-us">
        <div className="container">
          <h2 className="about-section-title fade-in-up">Why Choose Us</h2>
          <div className="why-choose-strip">
            <div className="why-item fade-in-up">
              <div className="why-icon">🛡️</div>
              <h4>Trust & Safety</h4>
              <p>Verified partners and secure bookings you can rely on</p>
            </div>
            <div className="why-item fade-in-up">
              <div className="why-icon">🎧</div>
              <h4>24/7 Support</h4>
              <p>Always here to help before, during, and after your trip</p>
            </div>
            <div className="why-item fade-in-up">
              <div className="why-icon">🏨</div>
              <h4>Curated Stays</h4>
              <p>Handpicked accommodations for comfort and quality</p>
            </div>
            <div className="why-item fade-in-up">
              <div className="why-icon">😊</div>
              <h4>Happy Travelers</h4>
              <p>Thousands of satisfied customers and 5-star reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="about-promise">
        <div className="about-promise-overlay">
          <div className="container">
            <div className="promise-content fade-in-up">
              <h2>Our Promise</h2>
              <p className="promise-statement">Every journey with picTOURnic leaves you with lasting memories and authentic experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
