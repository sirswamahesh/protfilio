import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Context from "../Store/Context";

const Navbar = () => {
  // const hello = useContext(Context);
  // console.log(hello);
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white ">
      <div className="container-fluid d-flex justify-content-between nav-mx">
        <div className="navbar-brand ">
          <Link
            href="/"
            className="text-white main-heading  text-decoration-none"
          >
            Mahesh sirswa
            {/* {Context} */}
          </Link>
        </div>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active text-white "
                aria-current="page"
                to="/Resume"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="mailto:sirswamahesh@gmail.com"
              >
                <i className="fa-regular fa-message "></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="https://www.linkedin.com/in/mahesh-kumar-b999aa265/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="https://github.com/sirswamahesh?tab=repositories"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
