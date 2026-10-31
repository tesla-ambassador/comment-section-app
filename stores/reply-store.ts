import { createStore } from "zustand";
import { replies, user } from "@/@types/customTypes";
import { Comment } from "./comment-store";
import data from "../data.json";

export type ReplyState = {
  replies: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: user;
  }[];
};

export type SingleReply = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: user;
};

export type ReplyIndex = {
  index: number;
};

export const replyIndex: ReplyIndex = {
  index: 0,
};

export type ReplyActions = {
  addReply: (reply: SingleReply) => void;
  deleteReply: (id: number) => void;
  changeIndex: (newIndex: number) => void;
};

export const defaultInitState: ReplyState = {
  replies: [...data.comments[replyIndex.index].replies],
};

export type ReplyStore = ReplyState & ReplyActions & ReplyIndex;

export const createReplyStore = (initState: ReplyState = defaultInitState) => {
  return createStore<ReplyStore>()((set) => ({
    ...initState,
    index: 0,
    addReply: (reply) =>
      set((state) => ({
        replies: [reply, ...state.replies],
      })),
    deleteReply: (id) =>
      set((state) => ({
        replies: state.replies.filter((reply) => reply.id !== id),
      })),
    changeIndex: (newIndex) =>
      set((state) => ({
        index: (state.index = newIndex),
      })),
  }));
};
