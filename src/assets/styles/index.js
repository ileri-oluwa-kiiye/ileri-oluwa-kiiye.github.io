import styled from 'styled-components';

export const HeroContainer = styled.div`
  max-width: 1200px;
  font-family: 'Cambria', 'Georgia', serif;
  margin: 0 auto;
  padding: 50px 4rem;

  @media (max-width: 768px) {
    padding: 20px 2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .hero-content {
    display: flex;
    gap: 3rem;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }

  .hero-text {
    flex: 1;
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: #333;
      font-size: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .hero-image {
    flex: 0 0 250px;
    max-height: fit-content;

    img{
        max-height: 270px;
    }
    
    @media (max-width: 768px) {
      flex: 0 0 auto;
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .social-links {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #333; // Adjust color to match your theme
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
`;

export const NewsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  .timeline-item {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
    border: 1px solid #f0f0f0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    

    h2 {
      color: #333;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: '📍';  // You can change this to '•' or '◆' or remove it
        font-size: 0.8rem;
        color: #666;
      }
    }

    .location {
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
      color: #666;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      strong {
        font-weight: 500;
        color: #333;
      }

      &:before {
        content: '';  // You can change this to another icon or remove it
        font-size: 0.9rem;
      }
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: #333;
      font-size: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: #333;
      text-decoration: none;
      font-size: 0.9rem;
      padding: 0.5rem 0;
      display: inline-block;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0.3rem;
        left: 0;
        width: 0;
        height: 1px;
        background: #333;
        transition: width 0.2s ease;
      }
      
      &:hover:after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .timeline-item {
      padding: 1rem;
      
      h2 {
        font-size: 1rem;
      }

      .location {
        font-size: 0.85rem;
      }
    }
  }
`;


export const ExperienceSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .experience-card {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid #f0f0f0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;


    .role {
      font-size: 1.1rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .company {
      font-size: 1rem;
      color: #666;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: '🏢';
        font-size: 0.9rem;
      }
    }

    .duration {
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:before {
        content: '📅';
        font-size: 0.9rem;
      }
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        background: #f8f9fa;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.8rem;
        color: #555;
        border: 1px solid #eee;
        transition: all 0.2s ease;

        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }

    .description {
      font-size: 0.95rem;
      color: #333;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .achievements {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 0.95rem;
        color: #333;
        line-height: 1.6;
        padding-left: 1.2rem;
        margin-bottom: 0.5rem;
        position: relative;

        &:before {
          content: '→';
          position: absolute;
          left: 0;
          color: #666;
        }
      }
    }

    .links {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;

      a {
        color: #333;
        text-decoration: none;
        font-size: 0.9rem;
        padding: 0.75rem 0;
        position: relative;
        
        &:after {
          content: '';
          position: absolute;
          bottom: 0.5rem;
          left: 0;
          width: 0;
          height: 1px;
          background: #333;
          transition: width 0.2s ease;
        }
        
        &:hover:after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .experience-grid {
      grid-template-columns: 1fr;
    }

    .experience-card {
      padding: 1rem;
    }
  }
`;

export const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-family: 'Roboto', sans-serif;
  }

  .filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;

    button {
      background: none;
      border: 1px solid #eee;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;

      &:hover {
        background: #f8f9fa;
      }

      &.active {
        background: #333;
        color: white;
        border-color: #333;
      }
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

      .project-overlay {
        opacity: 1;
      }
    }
  }

  .project-image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-links {
      display: flex;
      gap: 1rem;

      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid white;
        border-radius: 20px;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:hover {
          background: white;
          color: #333;
        }
      }
    }
  }

  .project-content {
    padding: 1.5rem;

    h3 {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
        background: #f8f9fa;
        border-radius: 20px;
        color: #555;
      }
    }

    p {
      font-size: 0.95rem;
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .highlights {
      margin-bottom: 1rem;

      .highlight-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #555;

        .highlight-icon {
          color: #666;
        }
      }
    }

    .read-more {
      display: inline-block;
      color: #333;
      text-decoration: none;
      font-size: 0.9rem;
      padding: 0.75rem 0;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0.5rem;
        left: 0;
        width: 0;
        height: 1px;
        background: #333;
        transition: width 0.2s ease;
      }
      
      &:hover:after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .project-card {
      margin-bottom: 1rem;
    }
  }
`;

export const Footer = styled.footer`
  max-width: none;
  padding: 2rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid #eaeaea;  // Subtle light gray border
  
  p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin: 3rem auto 1.5rem;
    padding: 1rem;
  }
`;

export const NavBar = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: 1px solid #eaeaea;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 768px) {
    .nav-content {
      padding: 1.2rem 2rem;
    }
  }

  .logo {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    letter-spacing: 0.5px;

    img{
        width: 30px;
        height: 30px;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
      color: #666;
      text-decoration: none;
      font-size: 0.95rem;
      position: relative;
      padding: 0.5rem 0;
      transition: color 0.2s ease;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: #333;
        transition: width 0.2s ease;
      }

      &:hover {
        color: #333;

        &:after {
          width: 100%;
        }
      }

      &.active {
        color: #333;
        
        &:after {
          width: 100%;
          background: #333;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .nav-content {
      padding: 1rem;
    }

    .nav-links {
      gap: 1.5rem;
      
      a {
        font-size: 0.9rem;
      }
    }
  }
`;