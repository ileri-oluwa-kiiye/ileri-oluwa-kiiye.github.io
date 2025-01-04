import { HeroContainer } from "../../assets/styles"
import cv from "../../assets/cv.pdf"
import profile from "../../assets/img/prof_pic2.jpeg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Ilerioluwakiiye Abolade</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:aboladeilerioluwakiiye@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href={cv} target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ileri-oluwa-kiiye" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ilerioluwakiiyes" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/llerioluwakiiye" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          
          <p>
            I am currently working on a series that explores the chronological evolution of AI 
            algorithms and concurrently building a framework for large model evaluation. My 
            research interests focus on model interpretability and evaluation, with a particular goal 
            of understanding how models learn, store, and represent concepts.
          </p>
          <p>
            I was previously a research assistant at KAUST where I worked on concept based 
            interpretability research. Before that, I spent sometime at the University of Michigan 
            working on hand and held-object segmentation. I graduated from Addis Ababa 
            University with a Bachelor&lsquo;s degree in Software Engineering.
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
