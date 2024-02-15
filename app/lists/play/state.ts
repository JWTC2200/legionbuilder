import { emptyList } from "@/app/data/empty_objects"
import { List } from "@/app/types/listTypes"
import { create } from "zustand"

interface PlayState {
	playList: List
	viewMode: boolean
	orders: Orders[]
	setPlayList: (update: List) => void
	setView: () => void
	setOrders: (update: Orders[]) => void
	clearOrders: () => void
}

interface Orders {
	slot_id: string
	order: string
	activated: boolean
}

export const playState = create<PlayState>((set) => ({
	playList: emptyList,
	viewMode: false,
	orders: [],
	setPlayList: (update) => set(() => ({playList: update})),
	setView: () => set((state) => ({ viewMode: !state.viewMode })),
	setOrders: (update) => set(() => ({ orders: update })),
	clearOrders: () => set(() => ({ orders: [] })),
}))
