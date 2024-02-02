import { create } from "zustand"
import { List, DB_ENTRY, ListUpgrades, ListLoadouts } from "@/app/types"
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

interface ListSidebar {
	slot_id: string | null
	type: "upgrade" | "loadouts" | null
	visible: boolean
	setData: (update: string, type: "upgrade" | "loadouts") => void
	closeSidebar: () => void
	openSidebar: () => void
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

export const listSidebar = create<ListSidebar>((set) => ({
	slot_id: null,
	type: null,
	visible: false,
	setData: (update, type) => set(() => ({ slot_id: update, type: type })),
	closeSidebar: () => set(() => ({ visible: false })),
	openSidebar: () => set(() => ({ visible: true })),
}))
