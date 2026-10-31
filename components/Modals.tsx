"use client";
import React from "react";
import { ActionButton } from "./CommentCard";
import { DeleteIcon } from "./ui/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface DeleteModalProps {
  delComment: () => void;
}

export function DeleteModal({ delComment }: DeleteModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group flex items-center gap-3">
          <DeleteIcon />
          <span
            className={`text-primary-softRed group-active:opacity-50 font-semibold transition-opacity duration-150`}
          >
            Delete
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-background p-8 max-w-[380px] rounded-lg">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg sm:text-xl text-start text-gray-600">
            Delete Comment
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-neutral-grayishBlue">
          Are you sure you want to delete this comment? This will remove the
          comment and that can't be undone.
        </DialogDescription>
        <DialogFooter>
          <div className="flex items-center justify-between py-2 w-full">
            <DialogClose
              asChild
              className="bg-neutral-grayishBlue text-white py-2 px-4 rounded-lg font-semibold active:scale-95 transition-transform duration-150 outline-primary"
            >
              <span className="hover:cursor-pointer">NO, CANCEL</span>
            </DialogClose>
            <ModalButton
              label="YES, DELETE"
              action={delComment}
              backgroundColor="bg-primary-softRed"
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full text-white bg-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
          Sign Up / Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Account</DialogTitle>
          <DialogDescription>
            Create a user account... I only need a name and Image url... I'm
            available for employment btw
          </DialogDescription> 
        </DialogHeader>
        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Sign Up
            </TabsTrigger>
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Login
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm password">Confirm Password</Label>
                  <Input id="confirm password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="avatar">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        // Handle file selection
                        const file = e.target.files?.[0];
                        if (file) {
                          console.log("Selected file:", file.name);
                          // Here you would typically upload the file or store it to be uploaded later
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("avatar")?.click()}
                      className="w-full"
                    >
                      <UploadIcon className="mr-2 h-4 w-4" /> Upload Image
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      {/* Display selected file name or preview here */}
                    </div>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary text-white">
                Sign Up
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="login">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary text-white">
                Login
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

interface ModalButtonProps {
  label: string;
  backgroundColor: string;
  action?: () => void;
}

export function ModalButton({
  label,
  backgroundColor,
  action,
}: ModalButtonProps) {
  return (
    <button
      onClick={action}
      className={`${backgroundColor} text-white py-2 px-4 rounded-lg font-semibold active:scale-95 transition-transform duration-150 outline-primary`}
    >
      <span>{label}</span>
    </button>
  );
}
