import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Books", path: "books" },
    { label: "Borrowed Books", path: "borrowed-books" },
  ];

  return (
    <nav className="hidden md:flex space-x-6 text-sm flex-grow justify-center">
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          className={({ isActive }) =>
            isActive ? "font-bold " : "hover:font-bold"
          }
          to={link.path}
        >
          {link.label}
        </NavLink>
      ))}

      <div className="flex justify-between"></div>
    </nav>
  );
}

export default Navbar;
