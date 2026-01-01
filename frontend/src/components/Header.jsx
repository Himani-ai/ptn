import React, {useState} from 'react'
import logo from '../assets/logo.png'

export default function Header(){
  const [open, setOpen] = useState(false)
  const categories = ['Beach Stays','Luxury Stays','Nature Stays','Cruise Stays','Tree House']
  return (
    <header className="topbar">
      <div className="topbar-inner container">
        <div className="logo">
          <img src={logo} alt="picTOURnic logo" className="logo-image" />
          <div className="logo-text-group">
            <span className="logo-text">picTOURnic</span>
            <span className="logo-tagline">Journey to Happiness</span>
          </div>
        </div>
        <div className="right-group">
          <div className="top-actions">
            <a className="btn ghost" href="#contact">Contact</a>
          </div>
          <nav className="topnav">
            <button className="dropbtn" onClick={()=>setOpen(v=>!v)}>Explore ▾</button>
            {open && (
              <div className="dropdown">
              <div className="dropdown-column">
                <strong>Stays</strong>
                {categories.map((c,i)=> <a key={i} href={`#${c.replace(/\s+/g,'-')}`}>{c}</a>)}
              </div>
              <div className="dropdown-column">
                <strong>Domestic Packages</strong>
                <a href="#domestic">Gujarat</a>
                <a href="#domestic">Rajasthan</a>
                <a href="#domestic">North East</a>
                <a href="#domestic">Golden Triangle</a>
                <a href="#domestic">Madhya Pradesh</a>
              </div>
              <div className="dropdown-column">
                <strong>International</strong>
                <a href="#international">Thailand</a>
                <a href="#international">Indonesia</a>
                <a href="#international">Vietnam</a>
                <a href="#international">Dubai</a>
                <a href="#international">Singapore</a>
              </div>
            </div>
          )}
        </nav>
        </div>
      </div>
    </header>
  )
}
