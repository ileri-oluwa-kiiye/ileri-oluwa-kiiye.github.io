import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic.png"

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Ilerioluwakiiye Abolade</h1>
      <div className="hero-content">
        <div className="hero-text">
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
