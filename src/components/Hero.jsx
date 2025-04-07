import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ustp from "../assets/images.jpg";

function Hero() {
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-evenly md:flex-col lg:flex-row dark:text-white">
        <div className="mb-6 max-w-xl text-center md:mb-0 md:text-center">
          <h1 className="tracking-light mb-6 scroll-m-20 text-4xl font-extrabold md:text-5xl">
            Welcome to Your USTP Digital Library
          </h1>
          <p className="mb-7 leading-7 [&:not(:first-child)]:mt-6">
            Easily search, borrow, and manage your books in one smart
            system—built for students, powered by USTP.
          </p>

          <Link to="/DSA2_PIT/books">
            <Button className="mx-auto flex cursor-pointer">
              Browse the Library
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;
