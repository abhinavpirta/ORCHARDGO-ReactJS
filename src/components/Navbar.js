import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems, plantingDropdown, sprayingDropdown, harvestingDropdown, pruningDropdown, graftingDropdown, fertilizingDropdown } from "./NavItems";
import Dropdown from "./Dropdown";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownData = {
    PLANTING: plantingDropdown,
    FERTILIZING: fertilizingDropdown,
    SPRAYING: sprayingDropdown,
    HARVESTING: harvestingDropdown,
    PRUNING: pruningDropdown,
    GRAFTING: graftingDropdown,
  };

  const handleDropdownToggle = (title) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          <Link to="/" className="navbar-logo">
            ORCHARDGO
          </Link>

          {navItems.map((item) => {
            if (dropdownData[item.title]) {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => handleDropdownToggle(item.title)} // Add onClick handler
                >
                  <Link to={item.path}>{item.title}</Link>
                  {openDropdown === item.title && <Dropdown items={dropdownData[item.title]} />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
