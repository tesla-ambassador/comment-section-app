"use client";
import { type ReactNode, useRef, createContext, useContext } from "react";
import { CommentStore } from "@/stores/comment-store";
import { createCommentStore } from "@/stores/comment-store";
import { useStore } from "zustand";

export type commentStoreApi = ReturnType<typeof createCommentStore>;

export const CommentStoreContext = createContext<commentStoreApi | undefined>(
  undefined
);

export interface CommentStoreProviderProps {
  children: ReactNode;
}

export const CommentStoreProvider = ({
  children,
}: CommentStoreProviderProps) => {
  const storeRef = useRef<commentStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCommentStore();
  }

  return (
    <CommentStoreContext.Provider value={storeRef.current}>
      {children}
    </CommentStoreContext.Provider>
  );
};

export const useCommentStore = <T,>(
  selector: (store: CommentStore) => T
): T => {
  const commentStoreContext = useContext(CommentStoreContext);

  if (!commentStoreContext) {
    throw new Error(`useCommentStore must be used within commentStoreContext`);
  }

  return useStore(commentStoreContext, selector);
};
