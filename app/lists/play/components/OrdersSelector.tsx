import { ordersState } from "@lists/play/state"

interface properties {
	slotId: string
}

const OrdersSelector = ({ slotId }: properties) => {
	const { orders, setOrders } = ordersState()

	const handleOrders = (e: string) => {
		setOrders([...orders.filter((order) => order.slot_id !== slotId), { slot_id: slotId, order: e }])
	}

	const entry = orders.find((orders) => orders.slot_id === slotId)

	const selectStyle = (order: string | undefined) => {
		if (order === "firstfire") {
			return "text-red-400"
		}
		if (order === "advance") {
			return "text-primary-500"
		}
		if (order === "march") {
			return "text-green-500"
		}
		if (order === "charge") {
			return "text-red-800"
		}
		if (order === "fallback") {
			return "text-yellow-700"
		}
	}

	return (
		<div className="flex gap-1">
			<label htmlFor={`orderSelect${slotId}`}>Orders:</label>
			<select
				value={entry ? entry.order : ""}
				name={`orderSelect${slotId}`}
				id={`orderSelect${slotId}`}
				onChange={(e) => handleOrders(e.target.value)}
				className={`bg-secondary-800 text-primary-50 font-graduate py-1 px-2 ${selectStyle(entry?.order)}`}>
				<option value="">None</option>
				<option value="advance">Advance</option>
				<option value="firstfire">First Fire</option>
				<option value="march">March</option>
				<option value="charge">Charge</option>
				<option value="fallback">Fall Back</option>
			</select>
		</div>
	)
}

export default OrdersSelector
