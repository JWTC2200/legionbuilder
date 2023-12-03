import { create } from "zustand";
import { BUILDER_LIST } from "../types";

interface UserListsState {
  userLists: BUILDER_LIST[];
  setUserLists: (lists: BUILDER_LIST[]) => void;
}

export const userListsState = create<UserListsState>((set) => ({
  userLists: [],
  setUserLists: (update) => set(() => ({ userLists: update })),
}));
