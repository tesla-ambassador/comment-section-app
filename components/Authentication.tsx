"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useUserStore } from "@/providers/auth-store-provider";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { AuthModal } from "./Modals";
import { Button } from "./ui/button";

export default function Authentication() {
  const { image } = useUserStore((state) => state);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileImage url={image.png} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        avoidCollisions={false}
        className="bg-background"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <AuthModal />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="default"
            className="w-full text-white bg-primary-softRed hover:bg-primary-softRed hover:text-white"
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface ProfileImage {
  url: string;
  heightAndWidth?: string;
}

export function ProfileImage({ url, heightAndWidth }: ProfileImage) {
  return (
    <Avatar className={`${heightAndWidth}`}>
      <AvatarImage src={url} />
      <AvatarFallback className="bg-neutral-veryLightGray">KM</AvatarFallback>
    </Avatar>
  );
}
