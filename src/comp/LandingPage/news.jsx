import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    date: "Nov 2025",
    description: "I will be giving my talk 'Why Your Medical AI Model Might Not Work in Africa: A Python Guide to Measuring Bias' again at PyLadiesCon 2025.",
    // link: { text: "PyLadiesCon 2025", url: "https://example.com/pyladiescon" }
  },
  {
    id: 2,
    date: "Oct 2025",
    description: "I was a member of Team Mamalens, and we were a finalist at the Data Science for Health Ideathon, organized in Collaboration with the Deep Learning Indaba. We also won the most fun project award!",
    // link: { text: "AMTES, FUNAAB", url: "https://example.com/amtes" }
  },
  {
    id: 2,
    date: "Oct 2025",
    description: "I was invited as a guest speaker to speak on 'Making Impact Beyond School' at the Freshers Orientation of the Association of Mechatronics Engineering Students. I had so much fun giving this talk.",
    // link: { text: "AMTES, FUNAAB", url: "https://example.com/amtes" }
  },
  {
    id: 3,
    date: "Oct 2025",
    description: "Delivered a talk on 'Why Your Medical AI Model Might Not Work in Africa: A Python Guide to Measuring Bias' at PyCon Nigeria 2025.",
    // link: { text: "PyCon Nigeria 2025", url: "https://example.com/pycon-nigeria" }
  },
  {
    id: 4,
    date: "Oct 2025",
    description: "I have just been appointed as Co-Lead 2 of Google Developer Groups FUNAAB, after serving as ML Co-Lead for a year.",
    link: { text: "Join our community here!", url: "https://chat.whatsapp.com/IHdzT3JF5B4IgNq4u6BNKU" }
  },
  {
    id: 5,
    date: "Sept 2025",
    description: "Presented 'SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays' at the MICCAI MIRASOL Workshop in Daejeon, South Korea — awarded Best Paper Runner-Up!",
    // link: { text: "MICCAI 2025", url: "https://example.com/miccai2025" }
  },
  {
    id: 6,
    date: "Sept 2025",
    description: "Our paper 'Addressing Domain Shift in Low-Resource Neuroimaging: Glioma Segmentation for Sub-Saharan MRI' was accepted to WiML @ NeurIPS 2025. Awarded a full travel grant to attend.",
    // link: { text: "WiML @ NeurIPS 2025", url: "https://example.com/wiml-neurips" }
  },
  {
    id: 7,
    date: "June 2025",
    description: "My first paper 'SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays' was accepted at the MICCAI MIRASOL Workshop! I led this research as the lead for the ML Collective medical imaging focus group in Nigeria. Congratulations to the team!",
    // link: { text: "MIRASOL Workshop", url: "https://example.com/mirasol" }
  },
  {
    id: 8,
    date: "June 2025",
    description: "Won a Best Poster Award at Deep Learning Indaba 2025 for 'Fairness-Aware Machine Learning for Social Bias Detection in Healthcare Research Datasets.' which I presented as a collaborator.",
    // link: { text: "Deep Learning Indaba 2025", url: "https://example.com/indaba2025" }
  },
  // {
  //   id: 9,
  //   date: "May 2025",
  //   description: "Delivered an invited talk at the Third IJCAI Symposium in Africa (Responsible AI: From Africa to the World) on 'Fairness-Aware Machine Learning for Social Bias Detection in Healthcare Research Datasets.'",
  //   // link: { text: "IJCAI Symposium 2025", url: "https://example.com/ijcai-africa" }
  // },
  {
    id: 10,
    date: "Feb 2025",
    description: "Awarded a $2000 travel grant to attend PyCon US 2025, the largest annual convention for the Python programming language.",
    // link: { text: "PyCon US 2025", url: "https://example.com/pyconus2025" }
  },
  {
    id: 11,
    date: "Sept 2024",
    description: "Presented a poster on Maternify, at Deep Learning Indaba 2024 in Dakar, Senegal. Awarded a full travel grant to attend.",
    // link: { text: "Deep Learning Indaba 2024", url: "https://example.com/indaba2024" }
  },
  {
    id: 12,
    date: "Sept 2024",
    description: "I spoke at DjangoCon US 2024 on 'The Magic of Dependencies Installing Themselves,' highlighting PEP 723 for reproducibility and efficiency.",
    // link: { text: "DjangoCon US 2024", url: "https://example.com/djangocon2024" }
  },
  {
    id: 13,
    date: "Sept 2024",
    description: "I will be at Accra, Ghana for Pycon Africa 2024! Thank you to the python community for the full sponsorship.",
    // link: { text: "PyCon Africa 2024", url: "https://example.com/pyconafrica2024" }
  },
  {
    id: 14,
    date: "June 2024",
    description: "Earned the 'Microsoft Azure Responsible AI Workshop—Coach' badge for mentoring participants on building fair and trustworthy AI systems.",
    // link: { text: "Microsoft Azure Responsible AI Workshop", url: "https://example.com/azure-ai-workshop" }
  },
  {
    id: 15,
    date: "May 2024",
    description: "I built Maternify, an ML-powered prenatal care chatbot, with Toyibat Adele, Kelechi Chbundu and Muslimah Sarumi, and we ranked Top 5 in the Microsoft Ambassador’s AI Challenge, recognized for impactful ML and chatbot applications.",
    // link: { text: "Microsoft Ambassador’s AI Challenge", url: "https://example.com/microsoft-ai-challenge" }
  },
  {
    id: 16,
    date: "Feb 2024",
    description: "Received a $2000 grant to attend PyCon US 2024, the largest annual convention for the Python programming language.",
      // link: { text: "PyCon US 2024", url: "https://example.com/pyconus2024" }
  },
  {
    id: 17,
    date: "Jan 2024",
    description: "Delivered a talk on 'Balancing Academics and a Thriving Tech Career' at the Assosiation of Mechatronics Engineering Students' Freshers Orientation (AMTES, FUNAAB).",
    // link: { text: "AMTES, FUNAAB", url: "https://example.com/amtes" }
  }
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1>News</h1>
      {newsItems.map((item) => (
        <div key={item.id} className="news-item">
          <span className="date font-semibold">{item.date}:</span>{" "}
          <span className="description">
            {item.description}{" "}
            {item.link && (
              <a
                href={item.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {item.link.text}
              </a>
            )}
          </span>
        </div>
      ))}
    </NewsSection>
  );
};

export default News;