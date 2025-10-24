import { PapersSection } from "../../assets/styles";

const papers = [
  {
    id: 1,
    title: "Addressing Domain Shift in Low-Resource Neuroimaging: Glioma Segmentation for Sub-Saharan MRI",
    authors: "Abolade, I.",
    venue: "WiML @ NeurIPS, In review (ISBI)",
    // status: "In review (ISBI)",
    year: "2025",
    links: [
      {
        text: "OpenReview",
        url: "https://openreview.net/forum?id=4VzB93HogD"
      }
    ]
  },
  {
    id: 2,
    title: "SharpXR: Structure-Aware Denoising for Pediatric Chest X-Rays",
    authors: "Abolade, I., Idoko, E., Odelola, S., Omoigui, P., Adebanwo, A., Iorumbur, A., Anazodo, U., Crimi, A., & Confidence, R.",
    venue: "MIRASOL @ MICCAI, Best Paper Runner-up",
    // status: "Best Paper Award Nominee. To appear in Springer Lecture Notes in Computer Science (LNCS)",
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
  return (
    <PapersSection id="publications">
      <h1>Publications</h1>
      {papers.map((paper) => (
        <div key={paper.id} className="paper-item">
          <div className="paper-year">{paper.year}</div>
          <div className="paper-content">
            <h3 className="paper-title">{paper.title}</h3>
            <p className="paper-authors">{paper.authors}</p>
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
