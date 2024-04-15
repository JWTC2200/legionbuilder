import { create } from "zustand"
import { List } from "@type//listTypes"
import { DB_ENTRY, DETACHMENT, FORMATION } from "@type/types"
import { emptyList } from "@data/empty_objects"

interface UserListsState {
	userLists: DB_ENTRY[]
	setUserLists: (lists: DB_ENTRY[]) => void
}

interface ListState {
	list: List
	setList: (update: List) => void
	clearList: (update: List) => void
}

interface ListSidebar {
	slot_id: string | null
	type: "upgrades" | "loadouts" | null
	visible: boolean
	setData: (update: string, type: "upgrades" | "loadouts") => void
	closeSidebar: () => void
	openSidebar: () => void
}

interface DataslateSideWidget {
	dataslate: DETACHMENT | null
	formation: FORMATION | null
	visible: boolean
	setDataslate: (update: DETACHMENT | null) => void
	setFormation: (update: FORMATION | null) => void
	setVisible: (update: boolean) => void
}

interface ListDetails {
	visible: string[]
	setVisibility: (update: string[]) => void
}

interface ListModelsState {
	visible: boolean
	setVisible: (update: boolean) => void
}

export const userListsState = create<UserListsState>((set) => ({
	userLists: [],
	setUserLists: (update) => set(() => ({ userLists: update })),
}))

export const listState = create<ListState>((set) => ({
	list: emptyList,
	setList: (update) => set(() => ({ list: update })),
	clearList: (update) => set({ list: { ...emptyList, gamemode: update.gamemode, points: update.points } }),
}))

export const listSidebar = create<ListSidebar>((set) => ({
	slot_id: null,
	type: null,
	visible: false,
	setData: (update, type) => set(() => ({ slot_id: update, type: type })),
	closeSidebar: () => set(() => ({ visible: false })),
	openSidebar: () => set(() => ({ visible: true })),
}))

export const dataslateSideWidget = create<DataslateSideWidget>((set) => ({
	dataslate: null,
	formation: null,
	visible: false,
	setDataslate: (update) => set(() => ({ dataslate: update, formation: null })),
	setFormation: (update) => set(() => ({ formation: update, dataslate: null })),
	setVisible: (update) => set(() => ({ visible: update })),
}))

export const listDetails = create<ListDetails>((set) => ({
	visible: [],
	setVisibility: (update) => set(() => ({ visible: update })),
}))

export const listModelState = create<ListModelsState>((set) => ({
	visible: false,
	setVisible: (update) => set(() => ({ visible: update })),
}))
