import { NavBar } from '../../assets/styles';
import { useState, useEffect } from 'react';
// import logo from "../../assets/img/favicon.svg"

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = ['hero', 'news', 'publications', 'blog'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavBar isScrolled={isScrolled}>
      <div className="nav-content">
        <a href="#hero" className="logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          {/* <img src={logo} alt="Logo" /> */}
        </a>

        <nav className="nav-links">
          <a
            href="#hero"
            className={activeSection === 'hero' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Home
          </a>

          <a
            href="#news"
            className={activeSection === 'news' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('news');
            }}
          >
            News
          </a>

          <a
            href="#publications"
            className={activeSection === 'publications' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('publications');
            }}
          >
            Publications
          </a>

          <a
            href="#blog"
            className={activeSection === 'blog' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('blog');
            }}
          >
            Blog
          </a>
          
          
        </nav>
      </div>
    </NavBar>
  );
};

export default Nav;