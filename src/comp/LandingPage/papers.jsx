import { PapersSection } from "../../assets/styles";

const papers = [

  {
    id: 2,
    title: "Domain-Adaptive Transformer for Data-Efficient Glioma Segmentation in Sub-Saharan MRI",
    authors: "Abolade, I., Udo, A., Ojo, A., Oyetunji, A., Ajigbotosho, H., Iorumbur, A., Raymond, C., & Adewole, M.",
    venue: "ISBI, In review",
    year: "2025",
    links: [
      {
        text: "Preprint",
        url: "https://arxiv.org/abs/2511.02928"
      }
    ]
  },
  {
    id: 1,
    title: "Addressing Domain Shift in Low-Resource Neuroimaging: Glioma Segmentation for Sub-Saharan MRI",
    authors: "Abolade, I.",
    venue: "WiML @ NeurIPS",
    year: "2025",
    links: [
      {
        text: "OpenReview",
        url: "https://openreview.net/forum?id=4VzB93HogD"
      }
    ]
  },
  {
    id: 3,
    title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
    authors: "Abolade, I., Idoko, E., Odelola, S., Omoigui, P., Adebanwo, A., Iorumbur, A., Anazodo, U., Crimi, A., & Confidence, R.",
    venue: "MIRASOL @ MICCAI, Best Paper Runner-up (Springer LNCS)",
    year: "2025",
    links: [
      {
        text: "Preprint",
        url: "https://arxiv.org/abs/2508.08518"
      }
    ]
  }
];

const Papers = () => {
  const renderAuthorsWithBoldName = (authors) => {
    const nameToBold = "Abolade, I.";
    const parts = authors.split(nameToBold);
    
    if (parts.length === 1) {
      // Name not found, return as is
      return authors;
    }
    
    const result = [];
    for (let i = 0; i < parts.length; i++) {
      if (parts[i]) {
        result.push(parts[i]);
      }
      if (i < parts.length - 1) {
        result.push(<strong key={i}>{nameToBold}</strong>);
      }
    }
    return result;
  };

  return (
    <PapersSection id="publications">
      <h1>Publications</h1>
      {papers.map((paper) => (
        <div key={paper.id} className="paper-item">
          <div className="paper-year">{paper.year}</div>
          <div className="paper-content">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{renderAuthorsWithBoldName(paper.authors)}</p>
            <p className="paper-venue">{paper.venue}</p>
            <p className="paper-status">{paper.status}</p>
            {paper.links && paper.links.length > 0 && (
              <div className="paper-links">
                {paper.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="paper-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </PapersSection>
  );
};

export default Papers;
