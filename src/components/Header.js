import React from "react";
// React router dom
import { Link } from "react-router-dom";
// Icons
import { FaSun, FaMoon } from "react-icons/fa";
// CSS
import "./Header.css";
// Context
import { useItGlobally } from "../useContext";

const Header = () => {
  const { darkMode, setDarkMode } = useItGlobally();

  return (
    <header>
      <div className="content">
        <Link to="/" className="logo">
          devjobs
        </Link>

        <div className="toggle-btn">
          <div className="sun">
            <FaSun />
          </div>

          <div
            className="toggle"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <span className={`slider ${darkMode && "darkModeOn"}`}></span>
          </div>

          <div className="moon">
            <FaMoon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
