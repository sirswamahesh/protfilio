import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section p-4 text-white bg-info text-center">
        <h3 className="main-heading">Mahesh Sirswa</h3>
        <a
          href="mailto:sirswamahesh@gmail.com"
          className="text-decoration-none text-white"
        >
          sirswamahesh@gmail.com
        </a>
        <p>
          Made by <span className="fw-bold fs-5">Mahesh Sirswa</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
