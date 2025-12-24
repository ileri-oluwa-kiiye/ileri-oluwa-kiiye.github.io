import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 2,
    date: "Dec 2025",
    description: (
      <>
        I will be speaking on <em>Building Robust Medical Imaging AI for Low-Resource Settings</em> at ML Lagos 2025.{" "}
        <a
          href="https://youtu.be/DG2GbkIZL4Q?si=sUMpwVJAThfWghiV"
          target="_blank"
          rel="noopener noreferrer"
        >
          [Talk Recording]
        </a>.
      </>
    ),
  },
  {
    id: 7,
    date: "Nov 2025",
    description: (
      <>
        We were invited to present &quot;SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays&quot; as a poster at 
        <a href="https://icair.unilag.edu.ng/" target="_blank" rel="noopener noreferrer"> The International Conference on Artificial Intelligence and Robotics (ICAIR)</a>.
      </>
    ),
  },
  {
    id: 1,
    date: "Nov 2025",
    description: (
      <>
        I will be giving my talk &quot;Why Your Medical AI Model Might Not Work in Africa: A Python Guide to Measuring Bias&quot; again at 
        <a href="https://2025.conference.pyladies.com/en/" target="_blank" rel="noopener noreferrer"> PyLadiesCon 2025</a>.
      </>
    ),
  },
  {
    id: 2,
    date: "Oct 2025",
    description: (
      <>
        I led Team Mamalens, and we were a finalist at the Data Science for Health Ideathon (in collaboration with the 
        <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer"> Deep Learning Indaba</a>). We also won the “most fun project” award!  
        <a href="https://docs.google.com/presentation/d/17LVUDp3HcsDdlQ2ZxIaimRf1jW5snWvd-r6mWReY9Eo/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },
  {
    id: 3,
    date: "Oct 2025",
    description: (
      <>
        I was invited as a guest speaker to speak on  <a href="https://docs.google.com/presentation/d/1o1sqlk28dzbdeLgcwLCnaqV-XjCXnD8NrVayj5IjQhw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">&quot;Making Impact Beyond School&quot;  </a>  at the Freshers Orientation of the 
        Association of Mechatronics Engineering Students (AMTES), FUNAAB. Thank you to the executives!
      </>
    ),
  },
  {
    id: 4,
    date: "Oct 2025",
    description: (
      <>
        Delivered a talk on &quot;Why Your Medical AI Model Might Not Work in Africa: A Python Guide to Measuring Bias&quot; at 
        <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> PyCon Nigeria 2025</a>.   <a href="https://docs.google.com/presentation/d/1FQYHi3cvTZKPZ8NSkW646vOLWlyKP7ZKYIKjU2yCRl4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },
  {
    id: 5,
    date: "Oct 2025",
    description: (
      <>
        I have just been appointed as Co-Lead of the 
        <a href="https://gdg.community.dev/gdg-on-campus-federal-university-of-agriculture-abeokuta-nigeria/" target="_blank" rel="noopener noreferrer"> Google Developer Groups FUNAAB</a>, after serving as ML Co-Lead in the previous year.{' '}
        <a href="https://chat.whatsapp.com/IHdzT3JF5B4IgNq4u6BNKU" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Join our community here!</a>
      </>
    )
  },
  {
    id: 6,
    date: "Sept 2025",
    description: (
      <>
        Presented &quot;SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays&quot;  at the MIRASOL Workshop, 
         — <b>  awarded Best Paper Runner-Up!</b>
      </>
    ),
  },
  {
    id: 7,
    date: "Sept 2025",
    description: (
      <>
        Our paper &quot;Addressing Domain Shift in Low-Resource Neuroimaging: Glioma Segmentation for Sub-Saharan MRI&quot; was accepted to 
        <a href="https://sites.google.com/wimlworkshop.org/wimlworkshopneurips2025/home" target="_blank" rel="noopener noreferrer"> WiML @ NeurIPS 2025</a>. Awarded a full travel grant to attend.
      </>
    ),
  },
  {
    id: 8,
    date: "Aug 2025",
    description: (
      <>
        Won a <b>Best Poster Award</b> at the 
        <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer"> Deep Learning Indaba 2025</a> for  
        &quot;Fairness-Aware Machine Learning for Social Bias Detection in Healthcare Research Datasets.&quot; which I presented as a collaborator. <a href="https://drive.google.com/file/d/1H2FJLdhIbC-CqsdtXp1H5R2d35ZRlnPq/view?usp=sharing" target="_blank" rel="noopener noreferrer"> [Poster]</a>
      </>
    ),
  },
  {
    id: 9,
    date: "July 2025",
    description: (
      <>
        Attended the <a href="https://summer.rise-miccai.org/" target="_blank" rel="noopener noreferrer">RISE-MICCAI Summer School 2025</a>, a one-week program on medical image computing and AI in healthcare.
      </>
    ),
  },
  {
    id: 10,
    date: "June 2025",
    description: (
      <>
        Received a scholarship for the <a href="https://aimi.stanford.edu/aimi25/agenda" target="_blank" rel="noopener noreferrer">2025 Stanford AIMI Symposium</a>, which included complimentary virtual registration for the event held at Stanford University on June 3, 2025.
      </>
    ),
  },
  {
    id: 11,
    date: "June 2025",
    description: (
      <>
        My first paper &quot;SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays&quot; was accepted at the <a href="https://event.fourwaves.com/mirasol/pages" target="_blank" rel="noopener noreferrer"> MICCAI MIRASOL Workshop!</a> I led this research as the lead for the 
        <a href="https://mlcollective.org" target="_blank" rel="noopener noreferrer"> ML Collective</a> medical imaging focus group in Nigeria. Congratulations to the team!
      </>
    ),
  },
  {
    id: 12,
    date: "Mar 2025",
    description: (
      <>
        Excited to have been selected for the 
        <a href="https://miccai.org/index.php/about-miccai/miccai-society-mentorship-program/" target="_blank" rel="noopener noreferrer"> MICCAI Society Mentorship Program</a> and be paired with <a href="https://qmeng99.github.io//" target="_blank" rel="noopener noreferrer"> Prof. Qingjie Meng!</a>
      </>
    ),
  },
  {
    id: 13,
    date: "Sept 2024",
    description: (
      <>
        Presented a poster on “Maternify” at the <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba 2024</a> in Dakar, Senegal. Thank you to the DLI Committee for the full sponsorship.
      </>
    ),
  },
  {
    id: 14,
    date: "Sept 2024",
    description: (
      <>
        I spoke at <a href="https://2024.djangocon.us/" target="_blank" rel="noopener noreferrer">DjangoCon US 2024</a> on &quot;The Magic of Dependencies Installing Themselves,&quot; highlighting PEP 723 for reproducibility and 
        efficiency. <a href="https://pretalx.com/djangocon-us-2024/talk/8TBXVX/" target="_blank" rel="noopener noreferrer">[Talk]</a>
      </>
    ),
  },
  {
    id: 15,
    date: "Sept 2024",
    description: (
      <>
        I will be at 
        <a href="https://africa.pycon.org/2024/" target="_blank" rel="noopener noreferrer"> PyCon Africa 2024</a> in Accra, Ghana! Thank you to the Python community for the full sponsorship.
      </>
    ),
  },
  {
    id: 16,
    date: "June 2024",
    description: (
      <>
        Earned the “Microsoft Azure Responsible AI Workshop Coach” badge for mentoring participants on building fair and trustworthy AI systems.
      </>
    ),
  },
  {
    id: 17,
    date: "May 2024",
    description: (
      <>
        I built “Maternify,” an ML-powered prenatal care chatbot, with Toyibat Adele, Kelechi Chbundu and Muslimah Sarumi, and we ranked Top 5 in the “Microsoft Ambassador’s AI Challenge.”
      </>
    ),
  },
  {
    id: 18,
    date: "Feb 2024",
    description: (
      <>
        Received a $2,000 grant 
        to attend  <a href="https://us.pycon.org/2024/" target="_blank" rel="noopener noreferrer"> PyCon US 2024</a>, the largest annual convention for the Python programming language.
      </>
    ),
  },
  {
    id: 19,
    date: "Jan 2024",
    description: (
      <>
        Delivered a talk on &quot;Balancing Academics and a Thriving Tech Career&quot; at the 
        AMTES (FUNAAB) Freshers Orientation
      </>
    ),
  }
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1 className="text-2xl font-semibold font-serif tracking-tight">News</h1>
      <div className="mt-4 space-y-3">
        {newsItems.map((item, index) => (
          <div key={`${item.date}-${index}`} className="news-item flex items-start gap-3">
            <span className="date shrink-0 w-28 text-sm tracking-wide text-slate-600">
              {item.date}:
            </span>
            <span className="description flex-1 leading-relaxed">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </NewsSection>
  );
};

export default News;