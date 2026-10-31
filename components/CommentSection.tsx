"use client";
import React from "react";
import {
  CommentCardDesktop,
  CommentCardMobile,
  ReplyCardDesktop,
  ReplyCardMobile,
} from "./CommentCard";
import { useCommentStore } from "@/providers/comment-store-provider";

export default function CommentSection() {
  const { comments } = useCommentStore((state) => state);
  return (
    <div>
      <>
        {/* Comment block Desktop*/}
        {comments.map((data, index) => (
          <div key={data.id} className="hidden sm:block px-4 mt-6">
            <CommentCardDesktop
              id={data.id}
              commentId={data.id}
              content={data.content}
              score={data.score}
              user={data.user}
              createdAt={data.createdAt}
            />
            <div className="md:max-w-2xl lg:max-w-3xl pl-6 md:pl-8 lg:pl-12">
              <div className="border-l-neutral-lightGray border-l-2 pl-3 md:pl-6 lg:pl-10">
                {data.replies.map((reply) => (
                  <div key={reply.id} className="w-full mt-6">
                    <ReplyCardDesktop
                      id={reply.id}
                      commentId={data.id}
                      user={reply.user}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      score={reply.score}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Comment block Mobile */}
        {comments.map((data, index) => (
          <div key={data.id} className="sm:hidden">
            <CommentCardMobile
              id={data.id}
              commentId={data.id}
              content={data.content}
              score={data.score}
              user={data.user}
              createdAt={data.createdAt}
            />
            <div className="mt-6 max-w-[500px] pl-6 border-l-neutral-LightGray border-l-2">
              {data.replies.map((reply) => (
                <div key={reply.id} className="mt-6 w-full">
                  <ReplyCardMobile
                    id={reply.id}
                    user={reply.user}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    commentId={data.id}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
