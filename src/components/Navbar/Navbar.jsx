import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_content">
        <div className="container">
          <div className="navbar">
            {/* Logo */}
            <div className="logo">HappyQuiz</div>

            {/* Nav */}

            <nav>
              <ul className="navLink">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
