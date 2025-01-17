import { useState } from 'react';
import { ProjectsSection } from '../../assets/styles';
import image2 from "../../assets/img/project_2.jpeg"
import image3 from "../../assets/img/project_3.jpeg"
import image1 from "../../assets/img/project_1.png"


const projectsData = [
    {
      title: "Maternify",
      category: "Machine Learning",
      thumbnail: image1, 
      tags: ["NLP", "Python", 'Azure'],
      description:
        "A website with an ML-powered chatbot providing personalized prenatal care and maternal health information. Recognized as a top AI project by Microsoft Student Ambassadors for Q1 2024.",
      highlights: [
        "Improved healthcare access and reduced misinformation",
        "Featured as a top AI project",
        "Built with NLP techniques"
      ],
      links: {
        github: "https://github.com/Teebarh/innovateHER", 
        // article: "https://medium.com/maternify-article" 
      }
    },
    {
      title: "Petfinder Adoption Prediction Model",
      category: "Machine Learning",
      thumbnail: image2, 
      tags: ["Python", "Scikit-learn", "Pandas"],
      description:
        "A machine learning model predicting pet adoption speed using data preprocessing, feature engineering, and model optimization.",
      highlights: [
        "Achieved high accuracy in adoption speed predictions",
        "Improved insights for pet adoption agencies",
        "Utilized advanced model optimization techniques"
      ],
      links: {
        github: "https://github.com/ileri-oluwa-kiiye/pet", 
        // article: "https://medium.com/petfinder-adoption-prediction" 
      }
    },
    {
      title: "Cassava Leaf Disease Classification",
      category: "Machine Learning",
      thumbnail: image3, 
      tags: ["Python", "TensorFlow", "Keras"],
      description:
        "A machine learning model designed to classify cassava leaf diseases using transfer learning and data augmentation techniques.",
      highlights: [
        "Accurately classified multiple disease types",
        "Leveraged transfer learning for improved performance",
        "Enhanced agricultural disease detection"
      ],
      links: {
        github: "https://colab.research.google.com/drive/1jktVsQ2DST64qhclTNNE8jNg-zeQf842?usp=sharing", 
        // article: "https://medium.com/cassava-leaf-disease" 
      }
    }
  ];


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <h1>Featured Projects</h1>
      
      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.thumbnail} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <p>{project.description}</p>

              <div className="highlights">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="highlight-item">
                    <span className="highlight-icon">✦</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {project.links.article && (
                <a href={project.links.article} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read Article →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
};

export default Projects;