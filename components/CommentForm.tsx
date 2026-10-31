"use client";
import React, { useState } from "react";
import { ProfileImage } from "./Authentication";
import PrimaryButton from "./PrimaryButton";
import { useUserStore } from "@/providers/auth-store-provider";
import { useCommentStore } from "@/providers/comment-store-provider";
import { Comment } from "@/stores/comment-store";
import { replies } from "@/@types/customTypes";

function fillerFunction2() {
  console.log("Don't trust in rappers ho, trust in Jesus!");
}

interface ReplyForm {
  displayScheme: string;
  profilePlacement: string;
  textAreaPlacement: string;
  buttonPlacement: string;
  buttonLabel: string;
  placeholder?: string;
  replyName: string;
  flag?: string;
  content?: string;
  id: number;
  commentId?: number;
  buttonAction?: () => void;
}

export function CommentForm({
  profilePlacement,
  textAreaPlacement,
  buttonPlacement,
  displayScheme,
  buttonLabel,
  placeholder,
  replyName,
  flag,
  content,
  id,
  commentId,
  buttonAction,
}: ReplyForm) {
  const { addComment, addReply } = useCommentStore((state) => state);
  const [message, setMessage] = useState<string>(
    replyName !== undefined ? replyName + " " : ""
  );
  const { username, image } = useUserStore((state) => state);

  const clearForm = () => {
    setMessage(replyName !== undefined ? replyName + " " : "");
  };

  const generateRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randId = generateRandomInt(6, 100);
  const randScore = generateRandomInt(0, 20);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        switch (flag) {
          case "Reply":
            console.log("I am a reply");
            const newReply: replies = {
              id: randId,
              score: randScore,
              content: message,
              createdAt: "Just now",
              replyingTo: replyName,
              user: {
                username: username,
                image: {
                  png: image.png,
                  webp: "",
                },
              },
            };
            addReply(newReply, commentId);
            clearForm();
            buttonAction;
            break;
          case "Edit":
            console.log("I am an update!");
          default:
            const newComment: Comment = {
              id: randId,
              content: message,
              createdAt: "Just now",
              score: randScore,
              user: {
                username: username,
                image: {
                  png: image.png,
                  webp: "",
                },
              },
              replies: [],
            };
            addComment(newComment);
            clearForm();
            break;
        }
        console.log(message);
      }}
      className={`w-full ${displayScheme} rounded-lg bg-background`}
    >
      <div className={`w-fit ${profilePlacement} flex items-center`}>
        <ProfileImage url={image.png} heightAndWidth="h-[30px] w-[30px]" />
      </div>
      <textarea
        name="Message"
        rows={3}
        className={`outline-primary ${textAreaPlacement} px-4 py-2 border-neutral-lightGray border rounded-lg`}
        placeholder={placeholder}
        value={flag === "Edit" ? message + content : message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <div className={`flex justify-end ${buttonPlacement}`}>
        <PrimaryButton label={buttonLabel} action={buttonAction} />
      </div>
    </form>
  );
}

{
  /* <textarea
  rows={3}
  className={`outline-primary ${textAreaPlacement} px-4 py-2 border-neutral-lightGray border rounded-lg`}
  placeholder={placeholder}
>
  {replyName}
</textarea>; */
}


// if (type === "pots" && total) {
//       const updatedPot: Pot = {
//         name: values.name,
//         target: Number(values.amount),
//         total: total,
//         theme: values.theme,
//       };
//       console.log(updatedPot);
//       editPot(theme, updatedPot);
//     } else {
//       console.log("I am working");
//     }