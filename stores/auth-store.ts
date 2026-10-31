import { createStore } from "zustand/vanilla";
import { user } from "@/@types/customTypes";
import data from "../data.json";

export const defaultInitState: user = {
  username: data.currentUser.username,
  image: {
    png: data.currentUser.image.png,
    webp: data.currentUser.image.webp
  },
};

export const createUserStore = (initState: user = defaultInitState) => {
  return createStore<user>()((set) => ({
    ...initState,
  }));
};
