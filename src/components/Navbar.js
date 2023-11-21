import React from "react";
import Logo from "../icons/Logo";

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <ul className="nav__links">
          <li>
            <a className="home" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>

          <div className="logo">
            <Logo />
          </div>

          <li>
            <a href="#">Resume </a>
          </li>
          <li>
            <a href="#">Project </a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
