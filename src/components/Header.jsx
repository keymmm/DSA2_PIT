import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import ustp_logo from "../assets/ustp-logo.png";
import { Button } from "./ui/button";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-0 flex h-14 items-center bg-white pl-5 text-sm shadow-sm dark:bg-gray-800 dark:text-white">
        <Link to="/DSA2_PIT">
          <img
            className="flex h-8 w-8 items-start justify-start"
            src={ustp_logo}
            alt="ustp-logo"
          />
        </Link>

        <div className="flex flex-1/3 items-center justify-center">
          <Navbar />
        </div>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <div className="ml-auto hidden items-end justify-end md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="mr-5">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>QM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>History</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}

export default Header;
