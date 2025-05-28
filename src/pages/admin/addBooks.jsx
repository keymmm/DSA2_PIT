import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function AddBooks() {

    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [successModalOpen, setSuccessModalOpen] = useState(false);


    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:3000/categories', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await response.json();
            setCategories(data);

            // You can use the fetched categories data here
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchAuthors = async () => {
        try {
            const response = await fetch('http://localhost:3000/authors', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch authors');
            }
            const data = await response.json();
            setAuthors(data);
            console.log(data);
            // You can use the fetched authors data here
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    const handleForm = (event) => {
        event.preventDefault(); // stop the page from reloading

        const formData = new FormData(event.target);

        const cover_img = formData.get('cover_img');
        const title = formData.get('title');
        const year = formData.get('year');
        const avl_copies = formData.get('avl_copies');
        const isbn = formData.get('isbn');
        const description = formData.get('description');

        const formPayload = new FormData();
        formPayload.append('cover_img', cover_img);
        formPayload.append('title', title);
        formPayload.append('authorId', selectedAuthor);
        formPayload.append('categoryId', selectedCategory);
        formPayload.append('publishedYear', year);
        formPayload.append('copiesAvailable', avl_copies);
        formPayload.append('isbn', isbn);
        formPayload.append('description', description);

        fetch('http://localhost:3000/add-books', {
            method: 'POST',
            body: formPayload,
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to add book');
                return res.json();
            })
            .then((data) => {
                console.log('Book added successfully:', data);
                setSuccessModalOpen(true);

            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
    };





    useEffect(() => {
        fetchAuthors();
        fetchCategories();
    }, []);




    return (
        <>
        <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Book Added Successfully!</DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                        <Button onClick={() => setSuccessModalOpen(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        <Dialog   className="w-200">
            <DialogTrigger asChild>
                <Button className="cursor-pointer" > <PlusIcon />Add Books</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                    <DialogTitle >Add New Book</DialogTitle>
                    <DialogDescription>
                        Fill in the form below to add a new book to the library.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleForm}  >
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
                        <Label htmlFor="picture">Cover Image</Label>
                        <Input name="cover_img" id="picture" type="file" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="title" className="text-right ">
                            Title
                        </Label>
                        <Input name="title" id="title" placeholder="lord of the rings" className="col-span-3" />
                    </div>
                    <div className="grid gap-5  grid-cols-2 py-4">


                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            {/* <Label htmlFor="author" >
                                    Author
                                </Label>
                                <Input name="author" id="author" placeholder="diwata pares" className="col-span-4" /> */}
                            <Select onValueChange={setSelectedAuthor}>
                                <Label >Author</Label>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a author" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>

                                        {authors.map((author) => (
                                            <SelectItem key={author.id} value={author.id}>
                                                {author.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* <selectAuthors /> */}
                        </div>


                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Select onValueChange={setSelectedCategory}>
                                <Label >Category</Label>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>

                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="year" >
                                Year
                            </Label>
                            <Input type='number' name="year" id="year" placeholder="2025" className="col-span-4" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="available_copies"  >
                                Avl Copies
                            </Label>
                            <Input  type='number' name="avl_copies" id="available_copies" placeholder="190" className="col-span-4" />
                        </div>

                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="isbn" >
                            ISBN
                        </Label>
                        <Input name="isbn" id="isbn" placeholder="978-0-553-80371-0" className="col-span-4" />
                    </div>
                    <Label htmlFor="description" className="text-right mt-2 mb-1">
                        Description
                    </Label>
                    <Textarea name="description" placeholder="Malaking epekto sa bustun siltiks ang pagkawala ni jisun titum😞🤯 sakanilang line up nila dahil sa gim 6 natalo sila sa Nyu yurk niks😫😫 " />
                    {/* </div> */}
                    <DialogFooter className="mt-4">
                        <Button type="reset" variant="outline">Cancel</Button>
                        <Button type="submit">Add</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        </>
    )
}
