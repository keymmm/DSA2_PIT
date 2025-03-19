import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

function BorrowedBooks() { 
  const { id } = useParams();
  
  const person = {
    name: "quem",
    age: 19,
  };

  return (
    <>
      <nav className="flex  h-screen items-center justify-evenly">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          pending
        </NavLink>
        <NavLink
          to="cancel"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          cancel
        </NavLink>
        <NavLink
          to="approved"
          className={({ isActive }) =>
            isActive ? "font-bold" : "hover:underline"
          }
        >
          aprroved
        </NavLink>

        <Outlet context={person} />
      </nav>
    </>
  );
}

export default BorrowedBooks;
