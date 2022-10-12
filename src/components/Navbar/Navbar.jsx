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
            <Link to='/' style={{textDecoration: 'none', color: '#000'}} className="logo">HappyQuiz</Link>

            {/* Nav */}

            <nav>
              <ul className="navLink">
                <li>
                  <Link style={{color: '#000'}} to="/">Home</Link>
                </li>
                <li>
                  <Link style={{color: '#000'}} to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link style={{color: '#000'}} to="/blog">Blog</Link>
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
