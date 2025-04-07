import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 border-t-2 p-4 text-center">
      all right received @magdugo.quem|{year}
    </footer>
  );
}

export default Footer;
