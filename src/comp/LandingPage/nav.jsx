import { NavBar } from '../../assets/styles';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from "../../assets/img/favicon.svg"

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only handle scroll-based navigation on the home page
      if (location.pathname === '/') {
        // Get all sections
        const sections = ['hero', 'news', 'publications'];
        
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavBar isScrolled={isScrolled}>
      <div className="nav-content">
        <Link to="/" className="logo">
          {/* <img src={logo} alt="Logo" /> */}
        </Link>

        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' && activeSection === 'hero' ? 'active' : ''}
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('hero');
              }
            }}
          >
            Home
          </Link>

          <Link
            to="/"
            className={location.pathname === '/' && activeSection === 'publications' ? 'active' : ''}
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('publications');
              }
            }}
          >
            Publications
          </Link>


          <Link
            to="/"
            className={location.pathname === '/' && activeSection === 'news' ? 'active' : ''}
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('news');
              }
            }}
          >
            News
          </Link>

          
          <Link
            to="/blog"
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </Link>
        </nav>
      </div>
    </NavBar>
  );
};

export default Nav;