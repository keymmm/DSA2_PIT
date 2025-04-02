import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "." },
    { label: "Books", path: "books" },
    { label: "Borrowed Books", path: "borrowed-books" },
  ];

  return (
    <nav className="hidden flex-grow justify-center space-x-6 text-sm md:flex">
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

      <div className="flex justify-between"></div>
    </nav>
  );
}

const fetchData = async () => {
  try {
    const response = await fetch("");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

export default Navbar;
