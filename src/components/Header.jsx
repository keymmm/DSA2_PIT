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
import ustp_logo_dark from "../assets/ustp-logo-dark.png";
import { Button } from "./ui/button";
import { Moon, MoonIcon, SunIcon } from "lucide-react";

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
      <header className="fixed top-0 right-0 left-0 z-0 flex h-14 items-center border-b-1 bg-white pl-5 text-sm dark:bg-[#121212] dark:text-white">
        <Link to="/DSA2_PIT">
          <img
            className="flex h-8 w-8 items-start justify-start"
            src={isDarkMode ? ustp_logo_dark : ustp_logo}
            alt="ustp-logo"
          />
        </Link>

        <div className="flex flex-1/3 items-center justify-center">
          <Navbar />
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={toggleDarkMode}
          className="mr-10 md:m-1"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>

        <div className="ml-auto hidden items-end justify-end md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="mr-2 h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>QM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="profile">Profile</Link>
              </DropdownMenuItem>
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
