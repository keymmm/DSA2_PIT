import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ustp from "../assets/images.jpg";

function Hero() {
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-evenly md:flex-col lg:flex-row dark:bg-blue-950">
        <div className="mb-6 max-w-xl text-center md:mb-0 md:text-center">
          <h1 className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl dark:text-amber-50">
            USTP Library Your Gateway to Knowledge
          </h1>
          <p className="mb-7 leading-7 [&:not(:first-child)]:mt-6">
            <strong>Efficient. Smart. Accessible.</strong>
            <br />
            Manage, explore, and borrow books seamlessly with the{" "}
            <strong>USTP Library Management System</strong>. Designed for
            students and faculty, it offers easy access to a vast collection of
            resources—anytime, anywhere.
          </p>

          <Link to="/DSA2_PIT/books">
            <Button className="mx-auto flex cursor-pointer">
              Start Exploring
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;
