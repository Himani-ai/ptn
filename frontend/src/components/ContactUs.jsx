import React from 'react'

export default function ContactUs(){
  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@pictournic2021?si=-_TzkVhTDJNDSDbZ', icon: '▶' },
    { name: 'Instagram', url: 'https://www.instagram.com/pictournic?igsh=MWJqMXh2NzFtbzhpZQ==', icon: '📷' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1AbWGNuVNn/', icon: 'f' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/pictournic', icon: 'in' },
    { name: 'WhatsApp', url: 'https://wa.me/9663803335', icon: '💬' }
  ]
  
  return (
    <section id="contact" className="contact-info container">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        <div className="contact-left">
          <div className="card contact-small">
            <h4>Email</h4>
            <p><a href="mailto:pictournic@gmail.com">pictournic@gmail.com</a></p>
          </div>
          <div className="card contact-small">
            <h4>Phone</h4>
            <p><a href="tel:+919663803335">+91 9663803335</a></p>
            <p><a href="tel:+919606022990">+919606022990</a></p>
            <p><a href="tel:+919606022991">+919606022991</a></p>
            <p><a href="tel:+919606022992">+919606022992</a></p>
            <p><a href="tel:+919606022993">+919606022993</a></p>
          </div>
        </div>
        <div className="card contact-large">
          <h4>Connect With Us</h4>
          <div className="social-links">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                title={link.name}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
