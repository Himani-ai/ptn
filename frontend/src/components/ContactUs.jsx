import React from 'react'

export default function ContactUs(){
  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@pictournic2021?si=-_TzkVhTDJNDSDbZ', icon: 'fab fa-youtube', color: '#FF0000' },
    { name: 'Instagram', url: 'https://www.instagram.com/pictournic?igsh=MWJqMXh2NzFtbzhpZQ==', icon: 'fab fa-instagram', color: '#E4405F' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1AbWGNuVNn/', icon: 'fab fa-facebook', color: '#1877F2' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/pictournic', icon: 'fab fa-linkedin', color: '#0A66C2' },
    { name: 'WhatsApp', url: 'https://wa.me/9663803335', icon: 'fab fa-whatsapp', color: '#25D366' }
  ]
  
  return (
    <section id="contact" className="contact-info container">
      <h2>Contact Us</h2>
      <div className="contact-section">
        <div className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:pictournic@gmail.com">pictournic@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <ul className="phone-list">
              <li><a href="tel:+919663803335">+91 9663803335</a></li>
              <li><a href="tel:+919606022990">+91 9606022990</a></li>
              <li><a href="tel:+919606022991">+91 9606022991</a></li>
              <li><a href="tel:+919606022992">+91 9606022992</a></li>
              <li><a href="tel:+919606022993">+91 9606022993</a></li>
            </ul>
          </div>
        </div>
        <div className="social-connect">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                title={link.name}
                style={{ '--hover-color': link.color }}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
