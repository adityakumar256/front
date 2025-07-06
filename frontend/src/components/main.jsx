import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const main = () => {
  return (
    <div className="container-fluid bg-primary text-white text-center py-5">
      {/* Hero Heading */}
      <h1 className="fw-bold">WELCOME TO RGPVPATHSHALA</h1>
      <p className="lead">
        Your One-Stop Destination for RGPV PYQs, Notes, Tutorials & More – 100% Free!
      </p>

      {/* Four Boxes */}
      <div className="row text-dark mt-5 px-3">

        {/* Box 1 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="bg-white rounded-4 p-4 h-100 shadow">
            <h5 className="fw-bold">Previous Year Questions</h5>
            <ul className="list-unstyled mt-3">
              <li>Access semester-wise PYQs</li>
              <li>Covers all branches (CSE, ME, ECE, etc.)</li>
              <li>Organized by subject and year</li>
              <li>Download as PDF</li>
            </ul>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="bg-white rounded-4 p-4 h-100 shadow">
            <h5 className="fw-bold">Notes & Study Material</h5>
            <ul className="list-unstyled mt-3">
              <li>Chapter-wise notes</li>
              <li>Quick revision focused</li>
              <li>Clear explanations</li>
              <li>Easy-to-read format</li>
            </ul>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="bg-white rounded-4 p-4 h-100 shadow">
            <h5 className="fw-bold"> Tutorials & YouTube Links</h5>
            <ul className="list-unstyled mt-3">
              <li>Best YouTube content</li>
              <li>Topic-wise playlist</li>
              <li>Trusted educators</li>
              <li>Easy visual learning</li>
            </ul>
          </div>
        </div>

        {/* Box 4 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="bg-white rounded-4 p-4 h-100 shadow">
            <h5 className="fw-bold"> Smart Search & Filters</h5>
            <ul className="list-unstyled mt-3">
              <li>Search by subject or topic</li>
              <li>Instant results</li>
              <li>Filtered by year/type</li>
              <li>Quick access to content</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default main;
