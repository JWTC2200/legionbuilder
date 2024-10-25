import { create } from "zustand"

interface CollectionItem {
	name: string
	number: number
	id: number
}

interface CollectionState {
	collection: CollectionItem[]
	setCollection: (update: CollectionItem[]) => void
}

export const collectionState = create<CollectionState>((set) => ({
	collection: [],
	setCollection: (update) => set(() => ({ collection: update })),
}))
