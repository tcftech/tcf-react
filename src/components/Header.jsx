import React from 'react'

import '../components/Header.css'
import CollapsibleExample from './ReusableComponents/Navbar'

export default function Header() {
  return (
    <>
      <div className="header">
       
      <div className="header-contact">
        <a href="tel:+919080303212" className="header-phone">
          <i className="fas fa-phone"></i> +91 90803 03212
        </a>
        <a href="mailto:tcftechnologies.contact@gmail.com" className="header-email">
          <i className="fas fa-envelope"></i> tcftechnologies.contact@gmail.com
        </a>
      </div>
      <div className="header-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <CollapsibleExample/>
    </>
  )
}
