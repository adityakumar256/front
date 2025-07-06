import React from 'react';
import akimage from '../assets/ak.jpg'
import rau from '../assets/rauimage.jpg'
function About() {
  return (
    <div style={{
       backgroundColor: '#2832C2', 
      minHeight: '100vh', 
      color: 'white', 
      padding: '40px', 
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1>About RGPV Pathshala</h1>
      <p>
        RGPV Pathshala is an online educational platform dedicated to supporting students of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV). We provide a comprehensive collection of high-quality study materials, past exam papers, detailed video tutorials, and other essential resources to help students excel in their academic journey.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to simplify and enhance exam preparation by offering all critical learning tools in one accessible place. We understand the challenges students face and strive to empower them with resources that are easy to find, reliable, and effective.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Subject-wise notes and summaries created by experts</li>
        <li>Extensive archive of previous years’ question papers for practice</li>
        <li>Step-by-step video lectures covering key topics</li>
        <li>Interactive quizzes and learning modules</li>
        <li>Regular updates aligned with the latest university syllabus</li>
      </ul>

      <h2>Why Choose RGPV Pathshala?</h2>
      <p>
        We believe that access to the right resources is the foundation for academic success. Our platform is tailored specifically for RGPV students to bridge the gap between course materials and exam readiness. Whether you are a first-year student or preparing for your final semester exams, RGPV Pathshala is your trusted study companion.
      </p>

      <h2>Join Our Community</h2>
      <p>
        Join thousands of students who are already benefiting from our platform. Together, we are building a smarter, more connected learning community. Start exploring our resources today and take a confident step towards achieving your academic goals.
      </p>

      {/* Heading before profiles */}
      <h2 style={{ marginTop: '60px', marginBottom: '20px', textAlign: 'center' }}>
      "Team Lead" and "Contributor"
      </h2>

      {/* Two Profile Boxes */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Aditya's Box */}
        <div style={{
          backgroundColor: '#1e25a8',
          padding: '20px',
          borderRadius: '10px',
          width: '250px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
         <img
  src={akimage}
  alt="Aditya Kumar"
  style={{
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: '50% 30%', // <--- this line centers the face
    marginBottom: '10px',
    border: '2px solid #fff'
  }}
/>

          <h3>Aditya Kumar</h3>
          <p>College: Lakshmi Narain College of Technology</p>
          <a href="https://www.linkedin.com/in/aditya-kumar-a86989255/" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>
            LinkedIn Profile
          </a>
        </div>

        {/* Raushane's Box */}
        <div style={{
          backgroundColor: '#1e25a8',
          padding: '20px',
          borderRadius: '10px',
          width: '250px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          textAlign: 'center'
        }}>
          <img
            src={rau} // Replace with Raushane's image URL
            alt="Raushan Kumar Choudhary"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
              border: '2px solid #fff'
            }}
          />
          <h3>Raushan Kumar Choudhary</h3>
          <p>College: Lakshmi Narain College of Technology and Science</p>
          <a href="https://www.linkedin.com/in/raushan-choudhary-521669180/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700' }}>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
