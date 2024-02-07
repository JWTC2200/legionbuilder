import { create } from "zustand"

interface OrdersState {
	orders: Orders[]
	setOrders: (update: Orders[]) => void
}

interface Orders {
	slot_id: string
	order: string
}

export const ordersState = create<OrdersState>((set) => ({
	orders: [],
	setOrders: (update) => set(() => ({ orders: update })),
}))
