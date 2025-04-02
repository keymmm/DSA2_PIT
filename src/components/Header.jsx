import React, { useState } from "react";
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

function Header() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-0 flex h-14 items-center bg-white pl-5 text-sm shadow-sm">
        <Link to="/DSA2_PIT">
          <img
            className="flex h-8 w-8 items-start justify-start"
            src={ustp_logo}
            alt="ustp-logo"
          />
        </Link>
        <Navbar />

        <DropdownMenu className="flex items-end justify-end" asChild>
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
      </header>
    </>
  );
}

export default Header;
