import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

function Login() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mr-2" size="sm">
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="w-100">
          <DialogHeader>
            <DialogTitle>Sign-in your account </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <form action="#">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
            <label className="font-semibold " htmlFor="password">
              Password
            </label>
            <Input
              className="mb-3"
              type="password"   
              id="password"
              placeholder="**********"
              required
            />
            <Button className="w-full" type="submit">
              Log in
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;
