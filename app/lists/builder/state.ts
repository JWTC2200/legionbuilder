import { BUILDER_LIST, FACTION } from "@/app/types";
import { create } from "zustand";
import { nanoid } from "nanoid";

interface ListState {
  list: BUILDER_LIST;
  setList: (update: BUILDER_LIST) => void;
  clearList: () => void;
}

interface BuilderBottomWidget {
  widget: boolean;
  toggleWidget: () => void;
}

const emptyList: BUILDER_LIST = {
  points: 3000,
  list_name: "New List",
  list_id: nanoid(),
  user_id: "",
  main_faction: FACTION.astartes,
  formations: [],
};

export const listState = create<ListState>((set) => ({
  list: emptyList,
  setList: (update) => set(() => ({ list: update })),
  clearList: () => set({ list: emptyList }),
}));

export const builderBottomWidget = create<BuilderBottomWidget>((set) => ({
  widget: false,
  toggleWidget: () => set((state) => ({ widget: !state.widget })),
}));
