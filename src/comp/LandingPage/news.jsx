import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    date: "Sep 12, 2024",
    description: "Our work on Maternify was covered in Microsoft AI Challenge.",
    link: {
      text: "Microsoft AI Challenge",
      url: "https://example.com/microsoft-ai-challenge"
    }
  },
  {
    id: 2,
    date: "Aug 14, 2024",
    description: "Gave a talk on 'The Magic of Dependencies Installing Themselves' at DjangoCon US. Thanks to the amazing Django community for the opportunity!",
    link: {
      text: "DjangoCon US",
      url: "https://example.com/djangocon"
    }
  },
  {
    id: 3,
    date: "May 20, 2024",
    description: "Presented a poster on Maternify at Deep Learning Indaba in Dakar, Senegal. Thanks to the organizers for the travel grant!",
    link: {
      text: "Deep Learning Indaba",
      url: "https://example.com/deep-learning-indaba"
    }
  },
  {
    id: 4,
    date: "March 09-14, 2024",
    description: "Attended PyCon US 2024 in Salt Lake City, Utah. Thanks to the Python Software Foundation for the travel grant!",
    link: {
      text: "PyCon US",
      url: "https://example.com/pycon-us"
    }
  },
  {
    id: 5,
    date: "February 17, 2024",
    description: "Delivered a talk on 'Balancing Academics and a Thriving Tech Career' at AMTES, FUNAAB. Thanks to the students for the engaging discussion!",
    link: {
      text: "AMTES, FUNAAB",
      url: "https://example.com/amtes"
    }
  }
];


const News = () => {
  return (
    <NewsSection id="news">
      <h1>Recent News</h1>
      {newsItems.map((item) => (
        <div key={item.id} className="news-item">
          <span className="date">{item.date}:</span>
          <span className="description">
            {item.description}
            {item.link && (
              <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                {" "}{item.link.text}
              </a>
            )}
          </span>
        </div>
      ))}
    </NewsSection>
  );
};

export default News;
