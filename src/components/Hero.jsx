import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ustp from "../assets/images.jpg";

function Hero() {
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-evenly bg-gray-100 md:flex-col lg:flex-row">
        {/* Left Side - Text Content */}
        <div className="mb-6 max-w-xl text-center md:mb-0 md:text-left">
          <h1 className="mb-4 text-2xl leading-tight font-bold md:text-5xl">
            USTP Library <br /> Your Gateway to Knowledge
          </h1>
          <p className="mb-6 text-base leading-normal text-gray-700 md:text-lg">
            <strong>Efficient. Smart. Accessible.</strong>
            <br />
            Manage, explore, and borrow books seamlessly with the{" "}
            <strong>USTP Library Management System</strong>. Designed for
            students and faculty, it offers easy access to a vast collection of
            resources—anytime, anywhere.
          </p>
          <Link to="/DSA2_PIT/books">
            <Button className="cursor-pointer">Start Exploring</Button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="m-5 w-full md:w-full">
          <img
            src={ustp}
            alt="Library Illustration"
            className="w-full rounded"
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
