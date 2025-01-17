import { ExperienceSection } from '../../assets/styles';

const experienceData = [
  {
    role: "Research Assistant",
    company: "Federal University of Agriculture, Abeokuta",
    duration: "Sept 2024 - Present",
    tags: ["Solar Tracking", "Energy Optimization", "Research"],
    description: "Developing a dual-axis solar tracking system for energy optimization.",
    achievements: [
      "Co-authoring a paper under review",
      "Designed and implemented the tracking system",
      "Collaborated on renewable energy solutions"
    ],
    // links: [
    //   { text: "Research Details", url: "#" }
    // ]
  },
  {
    role: "Independent Researcher",
    company: "ML Collective",
    duration: "Oct 2024 - Present",
    tags: ["Medical Imaging", "Explainable AI", "Deep Learning"],
    description: "Researching deep learning in medical imaging and explainable AI.",
    achievements: [
      "Enhanced diagnostic tools through research",
      "Explored advanced explainable AI techniques",
      "Shared knowledge with fellow researchers"
    ],
    // links: [
    //   { text: "ML Collective Overview", url: "#" }
    // ]
  },
  {
    role: "Student Industrial Work Experience Scheme (SIWES)",
    company: "Cakasa Engineering Services Limited",
    duration: "Aug 2024 - Oct 2024",
    tags: ["AutoCAD", "AVEVA", "Industrial Design"],
    description: "Designed industrial projects using AutoCAD and AVEVA.",
    achievements: [
      "Completed detailed industrial designs",
      "Learned ML concepts for engineering",
      "Improved interdisciplinary tech understanding"
    ],
    // links: [
    //   { text: "Cakasa Engineering Services", url: "#" }
    // ]
  },
  {
    role: "Frontend Engineering Intern",
    company: "Credo",
    duration: "Aug 2023 - Mar 2024",
    tags: ["Frontend Development", "React", "Web Optimization"],
    description: "Developed responsive websites and optimized web applications.",
    achievements: [
      "Built scalable, accessible web solutions",
      "Improved website performance",
      "Worked with a diverse development team"
    ],
    // links: [
    //   { text: "Credo Projects", url: "#" }
    // ]
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
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