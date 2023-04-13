import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Sidebar({handleToggle}) {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        handleToggle();
      };

      const [activeLink, setActiveLink] = useState('');
      useEffect(() => {
       const handleScroll = () => {
         const sections = document.querySelectorAll('section');
         const scrollPosition = window.pageYOffset;

         for (let i = 0; i < sections.length; i++) {
           const currentSection = sections[i];
           const currentSectionTop = currentSection.offsetTop;
           const currentSectionId = currentSection.id;

           if (scrollPosition >= currentSectionTop - 400) {
             setActiveLink(currentSectionId);
           }
         }
       }; window.addEventListener('scroll', handleScroll);

       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);


return (
<>
    <section id="header">
        <header>
            <span className="image avatar"><img src={require('../assets/images/avatar.jpg')} alt="" /></span>
            <h1 id="logo">Hello! I'm Rodrigo</h1>
            <p>I live under a palm tree, love cars, and crafting is what I do best.</p>
        </header>
        <nav id="nav">
            <ul>
                <li><a href="#about" onClick={handleClick("about")} className={activeLink === 'about-section' ? 'active' : ''}>About me</a></li>
                <li><a href="#portfolio" onClick={handleClick("portfolio")} className={activeLink === 'portfolio-section' ? 'active' : ''}>A quick demo</a></li>
                <li><a href="#skills" onClick={handleClick("skills")} className={activeLink === 'skills-section' ? 'active' : ''}>My skills</a></li>
                <li><a href="#contact"onClick={handleClick("contact")} className={activeLink === 'contact-section' ? 'active' : ''}>Contact me</a></li>
            </ul>
        </nav>
        <footer>
            <ul className="icons">
                <li><a href="https://linkedin.com/in/rodrigohrzm" target="_blank" className="icon brands fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/rodrigohrzm" target="_blank" className="icon brands fa-github"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://twitter.com/rodrigohrzm" target="_blank" className="icon brands fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.instagram.com/rodrigohrzm" target="_blank" className="icon brands fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
        </footer>
    </section>
</>

);

} export { Sidebar };