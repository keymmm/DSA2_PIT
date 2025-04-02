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
      <div className="m-0 bg-gray-100 p-12">
        <Hero />
        {/* pupular books */}

        <div className="flex h-auto w-full flex-col justify-start">
          <div className="flex text-left font-bold">
            <h3 className="mb-4 text-2xl">popular books</h3>
          </div>
          <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {popularBooks.length >= 0 ? (
              popularBooks.map((book) => (
                <Card key={book.id}>
                  <CardHeader>
                    <CardTitle className="line-clamp-1 hover:line-clamp-none">
                      {book.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="flex rounded-sm"
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
