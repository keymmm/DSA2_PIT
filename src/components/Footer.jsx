import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const contacs = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/ustp.edu.ph",
      icon: <Facebook />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/ustp.edu.ph/",
      icon: <Instagram />,
    },
  ];

  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 z-0 justify-between justify-items-center border-t-1 p-4">
      <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
        © {new Date().getFullYear()} Ustp Digital library, All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
