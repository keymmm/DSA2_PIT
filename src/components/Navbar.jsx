import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: replace with any icon library

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "." },
    { label: "Books", path: "books" },
    { label: "Borrowed Books", path: "borrowed-books" },
    // { label: "logout", path: "/" },
  ];

  return (
    <nav className="flex items-center justify-center px-4 py-3 md:px-8">
      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 left-5 flex justify-self-end md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden flex-grow items-center justify-center space-x-6 text-sm md:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            className={({ isActive }) =>
              isActive ? "font-bold" : "hover:font-bold"
            }
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 right-0 left-0 z-50 flex flex-col items-center bg-white py-4 shadow-md md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              className={({ isActive }) =>
                isActive ? "mb-2 font-bold" : "mb-2 hover:font-bold"
              }
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
