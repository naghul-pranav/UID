// src/components/Header.js
import React from 'react';

function Header({ title, subtitle, tagline, profileImage, socialLinks, resumeLink }) {
  return (
    <header>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-left">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
          <div className="intro-right">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p className="tagline">{tagline}</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <a href="#contact" className="cta-button">Contact Me</a>
            <a href={resumeLink} className="resume-link" download>Download Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
