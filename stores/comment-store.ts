import { createStore } from "zustand/vanilla";
import { user, replies } from "@/@types/customTypes";
import data from "../data.json";

export type CommentState = {
  comments: Comment[];
  isEdit: boolean;
  isReply: boolean;
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: user;
  replies: replies[];
};

export const defaultInitState: CommentState = {
  comments: [...data.comments],
  isEdit: false,
  isReply: false,
};

export type CommentActions = {
  addComment: (comment: Comment) => void;
  deleteComment: (id: number) => void;
  addReply: (reply: replies, commentId: number | undefined) => void;
  deleteReply: (
    commentId: number | undefined,
    replyId: number | undefined
  ) => void;
  updateReply: (commentId: number, replyId: number, newContent: string) => void;
  updateComment: (commentId: number, newContent: string) => void;
  setIsEdit: () => void;
  setIsReply: () => void;
};

export type CommentStore = CommentState & CommentActions;

export const createCommentStore = (
  initState: CommentState = defaultInitState
) => {
  return createStore<CommentStore>()((set) => ({
    ...initState,
    isEdit: false,
    isReply: false,
    updateReply: (commentId, replyId, newContent) =>
      set((state) => ({
        comments: state.comments.map((comment) =>
          commentId === comment.id
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  replyId === reply.id
                    ? { ...reply, content: newContent }
                    : reply
                ),
              }
            : comment
        ),
      })),
    updateComment: (commentId, newContent) =>
      set((state) => ({
        comments: state.comments.map((comment) =>
          commentId === comment.id
            ? { ...comment, content: newContent }
            : comment
        ),
      })),
    setIsEdit: () =>
      set((state) => ({
        isEdit: !state.isEdit,
      })),
    setIsReply: () =>
      set((state) => ({
        isReply: !state.isReply,
      })),
    addComment: (comment) =>
      set((state) => ({ comments: [comment, ...state.comments] })),
    deleteComment: (id) =>
      set((state) => ({
        comments: state.comments.filter((comment) => comment.id !== id),
      })),
    addReply: (reply, commentId) =>
      set((state) => ({
        comments: state.comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, replies: [...comment.replies, reply] }
            : comment
        ),
      })),
    deleteReply: (commentId, replyId) =>
      set((state) => ({
        comments: state.comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply.id !== replyId
                ),
              }
            : comment
        ),
      })),
  }));
};
