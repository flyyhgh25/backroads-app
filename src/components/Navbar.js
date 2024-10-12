import React from "react";
import { navIcon, navLinks } from "../data";
import PageLinks from "./PageLinks";
// import { navLinks } from '../data'
// import NavLinks from './NavLinks'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        {/* <ul className="nav-links" id="nav-links">
          {navLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-icons">
          {navIcon.map((icons) => {
            const { id, href, icon } = icons;
            return (
              <li key={id}>
                <a href={href} target="_blank" 
                rel="noreferrer"
                className="nav-icon">
                  <i classNameName={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
