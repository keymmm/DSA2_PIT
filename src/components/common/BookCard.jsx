import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
// import book_image from "../";

function BookCard() {
  const initialBooks = [
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
      id: 3,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2014,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: true,
    },
    {
      id: 4,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 5,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2011,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: true,
    },
    {
      id: 6,
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      year: 2006,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 7,
      title: "Learning React",
      author: "Alex Banks & Eve Porcello",
      year: 2017,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: true,
    },
    {
      id: 8,
      title: "React Up & Running",
      author: "Stoyan Stefanov",
      year: 2016,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
    {
      id: 9,
      title: "Pro React",
      author: "Cassio de Sousa Antonio",
      year: 2015,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: true,
    },
    {
      id: 10,
      title: "Fullstack React",
      author: "Anthony Accomazzo",
      year: 2017,
      image: `https://picsum.photos/seed/${Math.random()}/150`,
      isAvailable: false,
    },
  ];

  const [books, setBooks] = useState(initialBooks);

  //to get query parameters
  const [search, setSearch] = useSearchParams();
  const typeFilter = search.get("year");

  const filterByYear = typeFilter
    ? books.filter((book) => book.year === Number(typeFilter))
    : books;

  function handleBorrow(book_id) {
    const borrowed = books.map((book) =>
      book.id === book_id ? { ...book, isAvailable: false } : book,
    );

    setBooks(borrowed);
  }

  const bookElements = filterByYear.map((book) => (
    <Card key={book.id}>
      <CardHeader>
        <CardTitle className="line-clamp-1 hover:line-clamp-none">
          {book.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={book.image} alt={book.title} className="flex rounded-sm" />
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
  ));

  return (
    <div className="font-poppins m-5 flex justify-center">
      <Button onClick={() => setSearch({ year: 2008 })}>2008</Button>
      {/* another method to get query params */}
      <Link to="?year=2008">2008</Link>
      <div className="grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        {bookElements}
      </div>
    </div>
  );
}

export default BookCard;
