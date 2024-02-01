import { create } from "zustand"
import { DB_ENTRY } from "../types"

interface UserListsState {
	userLists: DB_ENTRY[]
	setUserLists: (lists: DB_ENTRY[]) => void
}

export const userListsState = create<UserListsState>((set) => ({
	userLists: [],
	setUserLists: (update) => set(() => ({ userLists: update })),
}))
