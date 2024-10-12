import React from 'react'
import { footerLink, navIcon } from '../data'
import PageLinks from './PageLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass= "footer-link"/>
      {/* <ul className="footer-links">
        {footerLink.map((footer)=>{
          const {id, href, text} = footer
          return(
          <li key={id}>
            <a href={href} className="footer-link">{text}</a>
          </li>
          )
        })}
      </ul> */}
      <ul className="footer-icons">
        {navIcon.map((icons)=>{
          const {id, href, icon} = icons
          return(
            <li key={id}>
            <a href={href} target="_blank" rel='noreferrer' className="footer-icon"
              ><i className={icon}></i></a>
          </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
