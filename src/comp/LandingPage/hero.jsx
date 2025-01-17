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
            <a href='https://docs.google.com/document/d/1DcFdjhxTGYYo4KMwxOqBN28fr9XH2tyBXoIdsvToXf8/edit?usp=sharing' target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ileri-oluwa-kiiye" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ilerioluwakiiye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/llerioluwakiiye" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          
          <p>
             My research interests 
             focus on how machine learning can improve healthcare, 
             particularly in areas like explainable AI, medical imaging, 
             and predictive analysis in low-resource settings. I&lsquo;m passionate 
             about building tools that enhance trust in diagnostic technologies
              and make healthcare more accessible to underserved communities.
          </p>
          <p>
          I am currently a Mechatronics Engineering undergraduate at the Federal 
          University of Agriculture, Abeokuta.I&lsquo;m always eager to learn and grow, and I&lsquo;m 
          currently looking for opportunities to collaborate on meaningful 
          projects or join research internships where I can deepen my knowledge and contribute to solving real-world problems. 
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
