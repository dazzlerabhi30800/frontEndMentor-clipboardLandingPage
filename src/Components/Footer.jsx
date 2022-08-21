import React from "react";

function Footer() {
  return (
    <footer>
      <img src="./images/logo.svg" alt="logo" className="logo" />
      <div className="link--wrapper">
        <a>FAQs</a>
        <a>Contact Us</a>
        <a>Privacy Policy</a>
        <a>Press Kit</a>
        <a>Install Guide</a>
      </div>
      <div className="social--icon">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </footer>
  );
}
export default Footer;
