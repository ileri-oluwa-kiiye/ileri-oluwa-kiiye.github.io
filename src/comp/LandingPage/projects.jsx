import { useState } from 'react';
import { ProjectsSection } from '../../assets/styles';
import image from "../../assets/img/ml_project.jpeg"

const projectsData = [
  {
    title: "AI Image Generator",
    category: "Machine Learning",
    thumbnail: image, // Add your image path
    tags: ["React", "Python", "TensorFlow"],
    description: "A state-of-the-art image generation model using deep learning.",
    highlights: [
      "100K+ images generated",
      "Featured on ProductHunt",
      "Open-source contribution"
    ],
    links: {
      github: "https://github.com/username/project",
    //   live: "https://project-demo.com",
      article: "https://medium.com/article"
    }
  },
  // Add more projects...
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