import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic4.jpeg"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Ilerioluwakiiye Abolade</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:aboladeilerioluwakiiye@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href='https://drive.google.com/file/d/1zW9LWumWUOqmKD1cp9dvYCANzHSfmh_2/view?usp=sharing' target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ileri-oluwa-kiiye" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ilerioluwakiiye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/llerioluwakiiye" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          
          <p>
             My research interests include explainable AI, predictive analysis, and 
             medical imaging in resource-constrained settings. I am currently 
             developing AI-based diagnostic tools to improve accessibility and trust 
             in healthcare technologies while collaborating on projects like
             Maternify, a platform addressing maternal and infant mortality.
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
