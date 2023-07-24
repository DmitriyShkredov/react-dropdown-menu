import React, { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import {
  BsPersonCircle,
  BsFillPersonFill,
  BsGiftFill,
  BsFillBellFill,
  BsGeoAltFill,
  BsFillGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <header className="header">
      <button className="menu-button" onClick={() => setOpen(!isOpen)}>
        <BsPersonCircle />
      </button>
      <nav className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
        <ul className="menu__list">
          <li className="menu__item">
            <BsFillPersonFill className="icon" />
            <span>Profile</span>
          </li>
          <li className="menu__item">
            <BsGiftFill className="icon" />
            <span>Bonus</span>
          </li>
          <li className="menu__item">
            <BsFillBellFill className="icon" />
            <span>Notify</span>
          </li>
          <li className="menu__item">
            <BsGeoAltFill className="icon" />
            <span>Location</span>
          </li>
          <li className="menu__item">
            <BsFillGearFill className="icon" />
            <span>Settings</span>
          </li>
          <li className="menu__item">
            <BsBoxArrowRight className="icon" />
            <span>Exit</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
