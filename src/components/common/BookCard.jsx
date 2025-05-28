import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";

function BookCard() {
  

  const [books, setBooks] = useState([]);

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

  useEffect(() => {
     const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:3000/books', {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                // console.log(data);
                setBooks(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchBooks();
  },[books])

  const bookElements = filterByYear.map((book) => (
    <Card key={book.id}>
      <CardHeader>
        <CardTitle className="line-clamp-1 hover:line-clamp-none">
          {book.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img  src={`../../../cover_image/${book.cover_img}`} alt={book.title} className="rounded-sm " />
        
        <p className="text-muted-foreground mt-2 line-clamp-1 text-sm hover:line-clamp-none">
          By {book.author}
        </p>
        <Badge
          variant={book.is_available  ? "secondary" : "outline"}
          className={book.is_available  && "text-green-600"}
        >
          {book.is_available  ? "Available" : "Borrowed"}
        </Badge>
        <Badge variant="outline" className="ml-2">
          {book.published_year}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => handleBorrow(book.id)}
          disabled={!book.is_available}
          className="w-full cursor-pointer"
        >
          {book.is_available ? "Borrow" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  ));

  return (
    <div className="font-poppins m-5 flex justify-center">
      {/* <Button onClick={() => setSearch({ year: 2008 })}>2008</Button> */}
      {/* another method to get query params */}
      {/* <Link to="?year=2008">2008</Link>  */}
      <div className="grid max-w-6xl grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-5">
        {bookElements}
      </div>
    </div>
  );
}

export default BookCard;



