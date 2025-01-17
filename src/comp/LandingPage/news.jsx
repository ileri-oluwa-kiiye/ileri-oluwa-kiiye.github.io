import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    title: "Deep Learning Indaba, 2024",
    location: "Dakar, Senegal",
    description:
      "Presented a poster on Maternify, an ML-powered chatbot for prenatal care, at the largest Machine Learning conference in Africa.",
  },
  {
    id: 2,
    title: "DjangoCon US, 2024",
    location: "Virtual",
    description:
      "Presented a talk on 'The Magic of Dependencies Installing Themselves,' highlighting the benefits of PEP 723 for simplifying Python script dependency management.",
  },
  {
    id: 3,
    title: "AMTES, FUNAAB",
    location: "Abeokuta, Nigeria",
    description:
      "Delivered an engaging talk on 'Balancing Academics and a Thriving Tech Career,' offering practical strategies for prioritization and time management.",
  },
  {
    id: 4,
    title: "Microsoft Ambassador’s AI Challenge (Top 5), 2024",
    location: "Remote",
    description:
      "Maternify was recognized for its effective implementation of machine learning and chatbot functionalities, securing a top 5 position in the challenge.",
    // link: {
    //   text: "Read more about Maternify",
    //   url: "https://example.com/microsoft-ai-challenge"
    // }
  },
  {
    id: 5,
    title: "Travel Grant Recipient, PyCon US, 2024",
    location: "Salt Lake City, Utah, USA",
    description:
      "Chosen for a financial aid grant to attend PyCon US 2024, the largest annual convention for the Python programming language.",

  },
  {
    id: 6,
    title: "Travel Grant Recipient, DjangoCon US, 2024",
    location: "Portland, Oregon, USA",
    description:
      "Selected for an opportunity grant to participate in DjangoCon US 2024, a leading international conference focused on the Django web framework.",
  },
  {
    id: 7,
    title: "Travel Grant Recipient, Deep Learning Indaba, 2024",
    location: "Dakar, Senegal",
    description:
      "Awarded a travel grant to attend Deep Learning Indaba 2024, a premier African ML and AI gathering.",
  },
  {
    id: 8,
    title: "Travel Grant Recipient, PyCon Africa 2024",
    location: "Accra, Ghana",
    description:
      "Awarded a travel grant to attend PyCon Africa 2024, bringing together Python enthusiasts from over 30 African countries and beyond.",
  },
  {
    id: 9,
    title: "Azure Responsible AI Workshop Coach",
    location: "Remote",
    description:
      "Earned the 'Microsoft Azure Responsible AI Workshop—Coach' badge for teaching participants hands-on lessons using machine learning models to produce less harmful and more trustworthy AI systems.",
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
            {item.id === 1 && ""} {/* Special case for the first item */}
          </p>
        </div>
      ))}
    </NewsSection>
  );
};

export default News;
