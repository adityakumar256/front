import React from "react";

const Hero = () => {
  const boxesContent = [
    {
      title: "Previous Year Questions",
      points: [
        "Access semester-wise PYQs",
        "Covers all branches (CSE, ME, ECE, etc.)",
        "Well-organized by subject and year",
        "Easy to view and download as PDF",
      ],
    },
    {
      title: "Notes & Study Material",
      points: [
        "Chapter-wise organized notes",
        "Curated for quick revision",
        "Designed for better understanding",
        "Easy to access and download",
      ],
    },
    {
      title: "Tutorials & YouTube Links",
      points: [
        "Handpicked YouTube tutorials",
        "Selected from the best educators",
        "Covers every subject thoroughly",
        "Easy to follow and learn at your pace",
      ],
    },
    {
      title: "Smart Search and Filters",
      points: [
        "Intelligent search system",
        "Quickly find papers, notes, and videos",
        "Search by subject, topic, or year",
        "Saves you time and effort",
      ],
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#2832C2",
        color: "white",
        padding: "3rem 1rem",
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
       
      }}
    >
      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem" }}>
        <strong>Welcome to RgpvPathshala</strong>
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
       Your one Stop destination for Rgpv Pyqs,Notes, Tutorials & More -100% Free!
      </p>

      {/* Boxes Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        {boxesContent.map(({ title, points }, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "20px",
              width: "280px",
              height: "280px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
              textAlign: "left",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              color: "#2832C2",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem" }}>
              {title}
            </h3>
            <div style={{ flexGrow: 1 }}>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  margin: 0,
                  listStyleType: "disc",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
              >
                {points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "0.4rem",
                      wordWrap: "break-word",
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
