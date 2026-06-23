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
            <a href="https://drive.google.com/file/d/15D3K-oLAgqNhwKdf5xo7LAP2eErfTRyG/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/ileri-oluwa-kiiye" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ilerioluwakiiye" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@ilerioluwakiiye" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          
          <p>
            I am Ilerioluwakiiye Abolade, a final-year Mechatronics Engineering student at FUNAAB, Nigeria. I am currently a Research Intern 
            at <a href="https://vilab.epfl.ch/" target="_blank">VILAB, EPFL</a>, supervised by <a href="https://vilab.epfl.ch/zamir/" target="_blank"> Prof. Amir Zamir</a>, and an independent researcher at 
            <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer"> ML Collective</a>.
            Previously, I was a Research Fellow at 
            <a href="https://event.fourwaves.com/spark/pages" target="_blank" rel="noopener noreferrer"> SPARK Academy</a>, 
             supervised 
             by <a href="https://www.med.upenn.edu/globalhealth/maruf-adewole-phd.html" target="_blank" rel="noopener noreferrer">Dr. Maruf Adewole</a> and <a href="https://www.mcgill.ca/neuro/udunna-anazodo-phd" target="_blank" rel="noopener noreferrer">Prof. Udunna Anazodo</a>.
          </p>

          <p>
            My research lies at the intersection of deep learning and medical imaging, with a focus on 
            domain adaptation, robustness, and fairness in low-resource healthcare settings. 
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