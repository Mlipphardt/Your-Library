import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Your Library
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a href="/books" className="nav-link">
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
