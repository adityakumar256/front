import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{
      backgroundColor: "#2832C2",   
      color: "white",
      padding: "20px 10px",
      textAlign: "center",
      marginTop: "auto",
       width: "100vw",
    }}>
      <p>© 2025 RGPVPathshala. All rights reserved.</p>
      <p>
        Follow us on{" "}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{color: "white", margin: "0 8px"}}>
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{color: "white", margin: "0 8px"}}>
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color: "white", margin: "0 8px"}}>
          <FaInstagram size={20} />
        </a>
      </p>
      
    </footer>
  );
}

export default Footer;
