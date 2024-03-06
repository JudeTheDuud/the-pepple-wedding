import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Ham } from "../assets/svgs/ham.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });

  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => ({
        ...prevState,
        y: window.scrollY,
        lastY: prevState.y,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.y > 800) {
      setshowNav(true);
    } else {
      setshowNav(false);
    }
    
    if (scrollData.y  < scrollData.lastY ) {
      setshowNav(true);
    } else {
      setshowNav(false);
    }


  }, [scrollData]);

  return (
    <div className={showNav ? 'nav' : 'hideNav'}>
      <nav className="navbar">
        <div className="container">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Ham className="ham" />
          </div>
          <div className="logo">JM</div>

          <div className={`navElements ${showNavbar && "active"}`}>
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
