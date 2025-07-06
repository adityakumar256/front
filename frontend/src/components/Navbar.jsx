import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // ✅ Safely parse user data
  let userData = null;
  try {
    const userString = localStorage.getItem("user");
    userData = userString ? JSON.parse(userString) : null;
  } catch (error) {
    console.error("Failed to parse userData from localStorage:", error);
    userData = null;
  }

  const isLoggedIn = userData && userData.token;

  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [subjectsLoading, setSubjectsLoading] = useState(false);
  const [subjectsError, setSubjectsError] = useState(null);

  const [resources, setResources] = useState({
    notesUrl: [],
    playlistUrls: [],
    tutorialLinks: [],
    pyqLinks: [],
    pyqBookUrl: "",
    subjectName: "",
    yearWisePYQs: [],
  });

  const [resourcesLoading, setResourcesLoading] = useState(false);
  const [resourcesError, setResourcesError] = useState(null);

  const [showFinder, setShowFinder] = useState(true);
  const dropdownRef = useRef(null);

  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    if (year && semester && branch) {
      setSubjectsLoading(true);
      setSubjectsError(null);

      fetch(`http://localhost:5000/api/subjects?year=${year}&semester=${semester}&branch=${branch}`)
        .then((res) => res.json())
        .then((data) => {
          setSubjects(Array.isArray(data.subjects) ? data.subjects : []);
          setSubject("");
          setResources({
            notesUrl: [],
            playlistUrls: [],
            tutorialLinks: [],
            pyqLinks: [],
            pyqBookUrl: "",
            subjectName: "",
            yearWisePYQs: [],
          });
          setSubjectsLoading(false);
        })
        .catch(() => {
          setSubjects([]);
          setSubjectsError("Failed to load subjects");
          setSubjectsLoading(false);
          setSubject("");
          setResources({
            notesUrl: [],
            playlistUrls: [],
            tutorialLinks: [],
            pyqLinks: [],
            pyqBookUrl: "",
            subjectName: "",
            yearWisePYQs: [],
          });
        });
    } else {
      setSubjects([]);
      setSubject("");
      setResources({
        notesUrl: [],
        playlistUrls: [],
        tutorialLinks: [],
        pyqLinks: [],
        pyqBookUrl: "",
        subjectName: "",
        yearWisePYQs: [],
      });
    }
  }, [year, semester, branch]);

  useEffect(() => {
    if (subject) {
      setResourcesLoading(true);
      setResourcesError(null);

      fetch(`http://localhost:5000/api/resources?subject=${encodeURIComponent(subject)}&branch=${branch}`)

        .then((res) => res.json())
        .then((data) => {
          setResources({
            notesUrl: Array.isArray(data.notesUrl) ? data.notesUrl : [],
            playlistUrls: Array.isArray(data.playlistUrls) ? data.playlistUrls : [],
            tutorialLinks: Array.isArray(data.tutorialLinks) ? data.tutorialLinks : [],
            pyqLinks: Array.isArray(data.pyqLinks) ? data.pyqLinks : [],
            pyqBookUrl: data.pyqBookUrl || "",
            subjectName: data.subjectName || "",
            yearWisePYQs: Array.isArray(data.yearWisePYQs) ? data.yearWisePYQs : [],
          });
          setResourcesLoading(false);
        })
        .catch(() => {
          setResourcesError("Failed to load resources");
          setResourcesLoading(false);
        });
    } else {
      setResources({
        notesUrl: [],
        playlistUrls: [],
        tutorialLinks: [],
        pyqLinks: [],
        pyqBookUrl: "",
        subjectName: "",
        yearWisePYQs: [],
      });
    }
  }, [subject]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // ✅ Safely parse user for display
  let user = {};
  try {
    const userString = localStorage.getItem("user");
    user = userString ? JSON.parse(userString) : {};
  } catch (err) {
    console.error("Error parsing user:", err);
    user = {};
  }

  const hasUser = user && user.name;

  const initials = hasUser
    ? user.name
        .split(" ")
        .map((w) => w[0].toUpperCase())
        .join("")
    : "";

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom"
      style={{
        padding: "10px 20px",
        background: "#2832C2",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "20px" }}>
          RgpvPathshala
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
            <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Signup</Link>
          </>
        ) : (
          <>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contacts</Link>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: 0,
                font: "inherit",
              }}
            >
              Logout
            </button>

            {isLoggedIn && (
              <>
                <button onClick={() => setShowFinder(!showFinder)} className="btn btn-sm btn-light">
                  {showFinder ? "Close Resource Finder" : "Find Resources"}
                </button>

                {showFinder && (
                  <div
                    ref={dropdownRef}
                    style={{
                      position: "absolute",
                      top: "50px",
                      left: "20px",
                      background: "white",
                      color: "black",
                      padding: "20px",
                      borderRadius: "6px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                      minWidth: "320px",
                      zIndex: 10,
                    }}
                  >
                    <h5>Filter Resources</h5>

                    <select value={year} onChange={(e) => setYear(e.target.value)} className="form-select mb-2">
                      <option value="">Select year</option>
                      {[1, 2, 3, 4].map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>

                    <select value={semester} onChange={(e) => setSemester(e.target.value)} className="form-select mb-2">
                      <option value="">Select semester</option>
                      {[...Array(8)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>

                    <select value={branch} onChange={(e) => setBranch(e.target.value)} className="form-select mb-2">
                      <option value="">Select branch</option>
                      {["CSE", "ECE", "ME", "CE", "EE"].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>

                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="form-select mb-3">
                      <option value="">Select subject</option>
                      {subjects.map((sub, i) => (
                        <option key={i} value={sub.subjectName}>{sub.subjectName}</option>
                      ))}
                    </select>

                    {resources.subjectName && <h6>Resources for {resources.subjectName}</h6>}

                    {resources.notesUrl.length > 0 && (
                      <div>
                        <h6>Notes:</h6>
                        <ul>
                          {resources.notesUrl.map((item, idx) => (
                            <li key={idx}>
                              <a href={item} target="_blank" rel="noopener noreferrer">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resources.pyqBookUrl && (
                      <div>
                        <h6>PYQ Book:</h6>
                        <a href={resources.pyqBookUrl} target="_blank" rel="noopener noreferrer">
                          Download PYQ Book
                        </a>
                      </div>
                    )}

                    {resources.playlistUrls.length > 0 && (
                      <>
                        <h4>YouTube Playlists:</h4>
                        <ul>
                          {resources.playlistUrls.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {resources.tutorialLinks.length > 0 && (
                      <>
                        <h4>Tutorial Links:</h4>
                        <ul>
                          {resources.tutorialLinks.map((item, idx) => (
                            <li key={idx}>
                              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {resources.yearWisePYQs.length > 0 && (
                      <div>
                        <h6>Year Wise PYQs:</h6>
                        <ul>
                          {resources.yearWisePYQs.map((pyq, idx) => (
                            <li key={idx}>
                              <a href={pyq.pdfUrl} target="_blank" rel="noopener noreferrer">
                                {pyq.year}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subjectsLoading && <p>Loading subjects...</p>}
                    {subjectsError && <p style={{ color: "red" }}>{subjectsError}</p>}
                    {resourcesLoading && <p>Loading resources...</p>}
                    {resourcesError && <p style={{ color: "red" }}>{resourcesError}</p>}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      {hasUser && (
        <div
          className="user-info"
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            textAlign: "center",
            lineHeight: "36px",
            color: "black",
            fontWeight: "bold",
            userSelect: "none",
          }}
          onClick={() => setShowUserInfo(!showUserInfo)}
        >
          {initials}
          {showUserInfo && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "20px",
                background: "white",
                color: "black",
                padding: "10px",
                borderRadius: "6px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                zIndex: 10,
                minWidth: "120px",
              }}
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.college}</p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
