import React from "react";

import Hero from "@/components/Hero";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
        alt="Dean blunt - Black Metal 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
        alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
        alt="Yung Lean - Stardust"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
        alt="Lana Del Rey - Ultraviolence"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
        alt="A$AP Rocky - Tailor Swif"
        className="aspect-square w-[120px] rounded-[4px]"
      />
      <img
        src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
        alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
        className="aspect-square w-[120px] rounded-[4px]"
      />
    </InfiniteSlider>
  );
}

function Home() {
  const popularBooks = [
    {
      id: 1,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      year: 1999,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: true,
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
  ];

  return (
    <>
      <div className="m-0 dark:bg-[#121212]">
        <Hero />
        {/* pupular books */}

        <div className="flex h-auto w-full flex-col justify-start">
          <div className="flex text-left font-bold">
            <h3 className="mb-4 text-2xl">popular books</h3>
          </div>
          <InfiniteSliderHoverSpeed />
          <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {popularBooks.length >= 0 ? (
              popularBooks.map((book) => (
                <Card key={book.id}>
                  <CardContent>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="flex h-50 rounded-sm"
                    />
                    <p className="text-muted-foreground mt-2 line-clamp-1 text-sm hover:line-clamp-none">
                      By {book.author}
                    </p>
                    <Badge
                      variant={book.isAvailable ? "secondary" : "outline"}
                      className={book.isAvailable && "text-green-600"}
                    >
                      {book.isAvailable ? "Available" : "Borrowed"}
                    </Badge>
                    <Badge variant="outline" className="ml-2">
                      {book.year}
                    </Badge>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => handleBorrow(book.id)}
                      disabled={!book.isAvailable}
                      className="w-full cursor-pointer"
                    >
                      {book.isAvailable ? "Borrow" : "Unavailable"}
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <p>no popular books as of now!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
