"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { user } from "@/@types/customTypes";
import { createUserStore } from "@/stores/auth-store";
import { useStore } from "zustand";

export type userStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<userStoreApi | undefined>(
  undefined
);

export interface userStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: userStoreProviderProps) => {
  const storeRef = useRef<userStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  );
};

export const useUserStore = <T,>(selector: (store: user) => T): T => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within userStoreContext`);
  }

  return useStore(userStoreContext, selector);
};
