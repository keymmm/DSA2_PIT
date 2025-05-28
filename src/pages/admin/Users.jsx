import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React, { useEffect } from 'react'
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
import { Edit } from 'lucide-react';

function users() {

    //     {
    //         id: 1,
    //         title: "The Pragmatic Programmer",
    //         author: "Andrew Hunt",
    //         year: 1999,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: true,
    //     },
    //     {
    //         id: 2,
    //         title: "Clean Code",
    //         author: "Robert C. Martin",
    //         year: 2008,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: false,
    //     },
    //     {
    //         id: 3,
    //         title: "You Don't Know JS",
    //         author: "Kyle Simpson",
    //         year: 2014,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: true,
    //     },
    //     {
    //         id: 4,
    //         title: "JavaScript: The Good Parts",
    //         author: "Douglas Crockford",
    //         year: 2008,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: false,
    //     },
    //     {
    //         id: 5,
    //         title: "Eloquent JavaScript",
    //         author: "Marijn Haverbeke",
    //         year: 2011,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: true,
    //     },
    //     {
    //         id: 6,
    //         title: "JavaScript: The Definitive Guide",
    //         author: "David Flanagan",
    //         year: 2006,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: false,
    //     },
    //     {
    //         id: 7,
    //         title: "Learning React",
    //         author: "Alex Banks & Eve Porcello",
    //         year: 2017,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: true,
    //     },
    //     {
    //         id: 8,
    //         title: "React Up & Running",
    //         author: "Stoyan Stefanov",
    //         year: 2016,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: false,
    //     },
    //     {
    //         id: 9,
    //         title: "Pro React",
    //         author: "Cassio de Sousa Antonio",
    //         year: 2015,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: true,
    //     },
    //     {
    //         id: 10,
    //         title: "Fullstack React",
    //         author: "Anthony Accomazzo",
    //         year: 2017,
    //         image: `https://picsum.photos/seed/${Math.random()}/150`,
    //         isAvailable: false,
    //     },
    // ];
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'GET',});
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);


    console.log(users)
    return (
        <div className="min-h-screen flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <Card className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
                <CardHeader />
                <CardContent className="flex-1 overflow-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>user id</TableHead>
                                <TableHead>name</TableHead>
                                <TableHead>email</TableHead>
                                <TableHead>created date</TableHead>
                                

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>

                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.created_at}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default users