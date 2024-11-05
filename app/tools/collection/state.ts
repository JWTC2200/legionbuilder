import { create } from "zustand"
import { FACTION } from "@type/types"

interface CollectionItem {
	name: string
	number: number
	id: number
}

interface CollectionState {
	collection: CollectionItem[]
	setCollection: (update: CollectionItem[]) => void
	faction: FACTION
	setFaction: (update: FACTION) => void
	compare: boolean
	setCompare: (update: boolean) => void
}

export interface CollectionList {
	owner: string
	collection: CollectionItem[]
}

export const collectionState = create<CollectionState>((set) => ({
	collection: [],
	setCollection: (update) => set(() => ({ collection: update })),
	faction: FACTION.astartes,
	setFaction: (update) => set(() => ({ faction: update })),
	compare: false,
	setCompare: (update) => set(() => ({ compare: update })),
}))
