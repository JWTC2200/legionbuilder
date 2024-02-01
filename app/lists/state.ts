import { create } from "zustand"
import { List, DB_ENTRY } from "@/app/types"
import { emptyList } from "@/app/data/empty_objects"

interface UserListsState {
	userLists: DB_ENTRY[]
	setUserLists: (lists: DB_ENTRY[]) => void
}

interface ListState {
	list: List
	setList: (update: List) => void
	clearList: () => void
}

export const userListsState = create<UserListsState>((set) => ({
	userLists: [],
	setUserLists: (update) => set(() => ({ userLists: update })),
}))

export const listState = create<ListState>((set) => ({
	list: emptyList,
	setList: (update) => set(() => ({ list: update })),
	clearList: () => set({ list: emptyList }),
}))
