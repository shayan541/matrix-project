import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link className="custom-link" to="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="custom-link" to="/matrix">
              ماتریس
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
