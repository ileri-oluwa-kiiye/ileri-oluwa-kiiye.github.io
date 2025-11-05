import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic3.jpeg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Ilerioluwakiiye Abolade</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:aboladeilerioluwakiiye@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href='https://drive.google.com/file/d/1ZAKRwLkpLOP_eE-ymbDkoEMgA4umWsVi/view?usp=sharing' target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ileri-oluwa-kiiye" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ilerioluwakiiye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/llerioluwakiiye" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          
          <p>
          I am Ilerioluwakiiye Abolade, a 
          final-year Mechatronics Engineering student at the 
          Federal University of Agriculture, Abeokuta, Nigeria, and an 
          independent researcher at ML Collective, an open science community for 
          self-driven machine learning researchers.
        </p>

        <p>
          My research lies at the intersection of 
          deep learning and medical imaging, with a focus on 
          domain adaptation, robustness, and 
          fairness in low-resource healthcare settings. 
          I aim to make medical AI models more reliable and accessible across diverse 
          populations and imaging conditions.
        </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
