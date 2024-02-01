import { create } from "zustand"
import { List, FACTION, ALLEGIANCE, DB_ENTRY } from "../types"
import { nanoid } from "nanoid"

interface UserListsState {
	userLists: DB_ENTRY[]
	setUserLists: (lists: DB_ENTRY[]) => void
}

interface ListState {
	list: List
	setList: (update: List) => void
	clearList: () => void
}

const emptyList: List = {
	points: 3000,
	name: "New List",
	id: nanoid(),
	user: "",
	faction: FACTION.astartes,
	allegiance: ALLEGIANCE.loyalist,
	formations: [],
	detachments: [],
	upgrades: [],
	loadouts: [],
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
