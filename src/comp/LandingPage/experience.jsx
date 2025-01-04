import { ExperienceSection } from '../../assets/styles';

const experienceData = [
  {
    role: "Machine Learning Engineer",
    company: "Example AI Lab",
    duration: "Jan 2023 - Present",
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    description: "Leading research in computer vision and deep learning applications.",
    achievements: [
      "Developed novel architecture improving accuracy by 25%",
      "Published 2 papers in top-tier conferences",
      "Mentored 3 junior researchers"
    ],
    links: [
      { text: "Project Demo", url: "#" },
      { text: "Publication", url: "#" }
    ]
  },
  // Add more experiences...
];

const Experience = () => {
  return (
    <ExperienceSection>
      <h1>Experience</h1>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="role">{exp.role}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {exp.links && (
              <div className="links">
                {exp.links.map((link, i) => (
                  <a key={i} href={link.url}>{link.text}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;