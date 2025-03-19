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
      <header className="flex text-sm  items-center  pl-5 h-14 bg-white border-b-2 sticky top-0 z-50   ">
        <Link to="/DSA2_PIT">
          <img
            className="w-8 h-8 flex justify-start items-start"
            src={ustp_logo}
            alt="ustp-logo"
          />
        </Link>
        <Navbar />
        {/* <Login /> */}

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
