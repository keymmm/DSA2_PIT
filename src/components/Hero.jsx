import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { TextEffect } from "./ui/text-effect";
import ustp from '../assets/ustp-logo.png'

function Hero() {
  const Hero = {
    title: "USTP Digital Library",
    description:
      "Easily search, borrow, and manage your books in one smart system—built for students, powered by USTP.",
    image: ustp,
  };

  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-evenly dark:text-white">
        <div className="mb-6 max-w-xl p-10 text-center md:mb-0 md:p-0">
          <TextEffect
            per="word"
            speedReveal={1.1}
            speedSegment={0.3}
            className="tracking-light mb-6 scroll-m-20 text-4xl font-extrabold md:text-5xl"
          >
            {Hero.title}
          </TextEffect>
          <TextEffect
            per="word"
            speedReveal={1.1}
            speedSegment={0.3}
            className="mb-7 leading-7 [&:not(:first-child)]:mt-6"
          >
            {Hero.description}
          </TextEffect>
          <Link to="books">
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
