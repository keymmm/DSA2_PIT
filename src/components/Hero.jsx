import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <main className="flex  flex-col items-center justify-evenly p-6 md:flex-col lg:flex-row md:p-12  bg-gray-100 h-screen w-full">
        {/* Left Side - Text Content */}

        <div className="max-w-xl text-center md:text-left  mb-6 md:mb-0">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
            USTP Library <br /> Your Gateway to Knowledge
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6 italic">
            <strong>Efficient. Smart. Accessible.</strong>
            <br />
            Manage, explore, and borrow books seamlessly with the{" "}
            <strong>USTP Library Management System</strong>. Designed for
            students and faculty, it offers easy access to a vast collection of
            resources—anytime, anywhere.
          </p>

          <Link to="/books">
            <Button className="cursor-pointer">Start Exploring</Button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-full m-5 ">
          <img
            src="../src/assets/images.jpg"
            alt="Library Illustration"
            className="rounded w-full"
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
