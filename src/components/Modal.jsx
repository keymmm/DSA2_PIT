import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOutletContext } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Modal() {
  const person = useOutletContext();

  return (
    <Dialog>
      <DialogTrigger>click me to show login page</DialogTrigger>
      <DialogContent className="w-100">
        <DialogHeader>
          <DialogTitle>Sign-in your account {person.name}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <form action="#">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            required
          />
          <label htmlFor="password">Password</label>
          <Input
            className="mb-3"
            type="password"
            id="password"
            placeholder="**********"
            required
          />
          <Button className="w-full" type="submit">
            {" "}
            Log in
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
