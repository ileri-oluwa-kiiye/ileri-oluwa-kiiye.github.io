import { NewsSection } from "../../assets/styles";

// News data array
const newsItems = [
  {
    id: 1,
    title: "PhysioNet Challenge, May - October 2024",
    location: "Remote",
    description: "Won the Data Science Africa 1st prize! Involving classification of ECG Images. Finished 6th out of 16! And published a peer-reviewed manuscript on",
    link: {
      text: "CinC conference",
      url: "#"
    }
  },
  {
    id: 2,
    title: "Deep Learning IndabaX, Aug 2024, Dedan Kimathi University of Technology",
    location: "Inperson, Nyeri, Kenya",
    description: "Won the Africa AI Research Award 2024!"
  },
  {
    id: 3,
    title: "Deep Learning + Reinforcement Learning Summer School, June 2024",
    location: "Toronto, Canada",
    description: "Awarded the CIFAR Inclusive AI Scholarship for the 2024 CIFAR Deep Learning + Reinforcement Learning Summer School. (Visa delayed, so I didn't make it)",
    link: {
      text: "CIFAR Inclusive AI Scholarship",
      url: "#"
    }
  },
  {
    id: 4,
    title: "Data Science Africa, June 2024, Dedan Kimathi University of Technology",
    location: "Inperson, Nyeri, Kenya",
    description: "Part of the organising committee."
  }
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1>News</h1>
      {newsItems.map((item) => (
        <div key={item.id} className="timeline-item">
          <h2>{item.title}</h2>
          <p className="location">
            {item.location} | {item.description}
            {item.link && (
              <a href={item.link.url}> {item.link.text}</a>
            )}
            {item.id === 1 && "!"} {/* Special case for the first item */}
          </p>
        </div>
      ))}
    </NewsSection>
  );
};

export default News;
