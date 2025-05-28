import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, PlusIcon } from 'lucide-react';



import { AddBooks } from './addBooks';
import ustp from './Images.jpg'
// import image from '../../../../node-mysql-crud/uploads/'











function books() {

    const [books, setBooks] = useState([]);

   
    

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
    }, []);

    return (
        <>
            <div className='flex  '>
                <h1 className="text-2xl font-bold mb-4 mr-210">Book  Mangement </h1>

                <AddBooks />


            </div>
            <Card className='w-300'>
                <CardHeader>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Cover</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Genre</TableHead>
                                <TableHead>Year</TableHead>
                                <TableHead>ISBN</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Available Copies</TableHead>

                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {books.map((book) => (
                                <TableRow key={book.id}>
                                    <TableCell>
                                        <img
                                            src={`http://localhost:3000/node-mysql-crud${book.cover_img}`}
                                            alt={book.title}
                                            className="w-12 h-16 object-cover rounded"
                                        />
                                        
                                    </TableCell>
                                    <TableCell className="font-medium">{book.title}</TableCell>
                                    <TableCell>{book.author}</TableCell>
                                    <TableCell>{book.category}</TableCell>
                                    <TableCell>{book.published_year}</TableCell>
                                    <TableCell>{book.isbn}</TableCell>
                                    <TableCell>availble</TableCell>
                                    <TableCell>{book.copies_available}</TableCell>
                                    {/* <TableCell className="font-mono text-sm">{book.isbn}</TableCell> */}
                                    {/* <TableCell>
                                        <Badge variant={book.isAvailable ? "default" : "secondary"}>
                                            {book.isAvailable ? "Available" : "Borrowed"}
                                        </Badge>
                                    </TableCell> */}
                                    <TableCell>
                                        <div className="flex items-center space-x-2">
                                            {/* onClick={() => handleEditBook(book)} */}
                                            <Button variant="outline" size="sm" >
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            {/* <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete "{book.title}" from the library
                                                        catalog.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction>Delete</AlertDialogAction>
                                                     onClick={() => onDeleteBook(book.id)}
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog> */}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}

export default books