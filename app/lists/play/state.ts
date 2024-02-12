import { create } from "zustand"

interface OrdersState {
	viewMode: boolean
	orders: Orders[]
	setView: () => void
	setOrders: (update: Orders[]) => void
	clearOrders: () => void
}

interface Orders {
	slot_id: string
	order: string
	activated: boolean
}

export const ordersState = create<OrdersState>((set) => ({
	viewMode: false,
	orders: [],
	setView: () => set((state) => ({ viewMode: !state.viewMode })),
	setOrders: (update) => set(() => ({ orders: update })),
	clearOrders: () => set(() => ({ orders: [] })),
}))
