import { create } from "zustand"
import { List } from "@type//listTypes"
import { DB_ENTRY } from "@type/types"
import { emptyList } from "@data/empty_objects"

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
	type: "upgrades" | "loadouts" | null
	visible: boolean
	setData: (update: string, type: "upgrades" | "loadouts") => void
	closeSidebar: () => void
	openSidebar: () => void
}

interface ListDetails {
	visible: string[]
	setVisibility: (update: string[]) => void
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

export const listDetails = create<ListDetails>((set) => ({
	visible: [],
	setVisibility: (update) => set(() => ({ visible: update })),
}))
