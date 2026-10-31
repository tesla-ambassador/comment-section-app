import React from "react";
import { CommentForm } from "./CommentForm";

export default function CreateCommentSection() {
  return (
    <>
      <div className="sm:hidden w-full">
        <CommentForm
          displayScheme="grid grid-cols-3 gap-y-4 p-4"
          profilePlacement="row-start-3"
          textAreaPlacement="col-start-1 col-span-3 row-span-2"
          buttonPlacement="w-full row-start-3 col-start-3"
          buttonLabel="SEND"
          placeholder="Add a Comment..."
          replyName=""
          id={0}
        />
      </div>
      <div className="hidden sm:block w-full">
        <CommentForm
          displayScheme="flex items-start gap-3 px-8 py-4"
          profilePlacement=""
          textAreaPlacement="w-full"
          buttonPlacement="w-fit"
          buttonLabel="SEND"
          placeholder="Add a Comment..."
          replyName=""
          id={0}
        />
      </div>
    </>
  );
}
