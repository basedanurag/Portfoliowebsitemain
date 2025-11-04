import React from "react";
import Particlecopy from "../Particlecopy";
// Certificate images
import cert160 from "../../Assets/Images/certificates/Java DSA 160 days.png";
import internshipCert from "../../Assets/Images/certificates/internship.png";
import certTreasure from "../../Assets/Images/certificates/TreasureHunt.png";

export default function KnowMe() {
  const certifications = [
    {
      title: "160 Days of Java DSA",
      issuer: "Geeks for Geeks",
      year: "2025",
      description: "Completed an intensive 160-day learning program covering Data Structures and Algorithms with Java.",
      img: cert160,
      link: "https://drive.google.com/file/d/13DJ8U96gZtSpUCVX8_9IRR1hUIpvRfng/view?usp=sharing",
    },
    {
      title: "Blockchain Development Internship",
      issuer: " QuadBTech | BlockseBlock",
      year: "2025",
      description: "Completed internship focused on blockchain development and smart contracts.",
      img: internshipCert,
      link: "https://drive.google.com/file/d/1R1qLWNUE9FXADgIQBid_jBygDc1Myj9c/view?usp=sharing",
    },
    {
      title: "Treasure Hunt Champion",
      issuer: "Technical Competition ",
      year: "2025",
      description: "First place winner in the technical treasure hunt competition showcasing problem-solving skills.",
      img: certTreasure,
      link: "https://drive.google.com/file/d/1Qdf-qQHFRpoDYPkCNOp62akg2fB_WSkR/view?usp=sharing",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      <Particlecopy />
  <div className="container mt-5 container-children-main" style={{ position: "relative", zIndex: 1 }}>
       <h2
  className="text-center mb-4"
  style={{
    color: "#ffffffff", // Change to your desired color
    fontFamily: "Montserrat, Arial, sans-serif", // Change to your desired font
    fontWeight: "bold", // Optional: make it bold
    letterSpacing: "2px", // Optional: spacing
  }}
>
  My Certifications
</h2>
        <div className="row">
          {certifications.map((cert, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                <div
                  className="card shadow-sm border-0 w-100"
                  style={{
                    backgroundColor: "#1b1b1b",
                    color: "#ffffffff",
                    borderRadius: "10px",
                    minHeight: "400px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={cert.img}
                    className="card-img-top"
                    alt={cert.title}
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text text-secondary mb-1">
                      {cert.issuer} — {cert.year}
                    </p>
                    <p className="card-text">{cert.description}</p>
                    <div className="mt-auto">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-info"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
