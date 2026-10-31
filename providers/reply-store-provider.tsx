"use client";

import { ReactNode, useRef, useContext, createContext } from "react";
import { createReplyStore } from "@/stores/reply-store";
import { ReplyStore } from "@/stores/reply-store";
import { useStore } from "zustand";

export type ReplyStoreApi = ReturnType<typeof createReplyStore>;

export const ReplyStoreContext = createContext<ReplyStoreApi | undefined>(
  undefined
);

export interface ReplyStoreProviderProps {
  children: ReactNode;
}

export const ReplyStoreProvider = ({ children }: ReplyStoreProviderProps) => {
  const storeRef = useRef<ReplyStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createReplyStore();
  }

  return (
    <ReplyStoreContext.Provider value={storeRef.current}>
      {children}
    </ReplyStoreContext.Provider>
  );
};

export const useReplyStore = <T,>(selector: (store: ReplyStore) => T): T => {
  const replyStoreContext = useContext(ReplyStoreContext);

  if (!replyStoreContext) {
    throw new Error(`useReplyStore must be used within replyStoreContext`);
  }

  return useStore(replyStoreContext, selector);
};
