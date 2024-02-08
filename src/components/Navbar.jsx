import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Ham } from "../assets/svgs/ham.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
            <Ham  className="ham"/>
          </div>
          <div className="logo">JM</div>
          
          <div className={`navElements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/Story">Our Story</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/qa">Q&A</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
