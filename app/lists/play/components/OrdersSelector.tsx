import { playState } from "@lists/play/state"
import { orderColorStyle } from "../utils"

interface properties {
	slotId: string
}

const OrdersSelector = ({ slotId }: properties) => {
	const { orders, setOrders } = playState()

	const entry = orders.find((orders) => orders.slot_id === slotId)

	const handleOrders = (e: string) => {
		if (entry) {
			setOrders([
				...orders.map((order) => {
					if (order.slot_id === slotId) {
						return { ...entry, order: e }
					}
					return order
				}),
			])
		} else {
			setOrders([
				...orders.filter((order) => order.slot_id !== slotId),
				{ slot_id: slotId, order: e, activated: false },
			])
		}
	}

	return (
		<div className="flex gap-1">
			<label htmlFor={`orderSelect${slotId}`} className="flex items-center">Orders:</label>
			<select
				value={entry ? entry.order : ""}
				name={`orderSelect${slotId}`}
				id={`orderSelect${slotId}`}
				onChange={(e) => handleOrders(e.target.value)}
				className={`bg-secondary-800 text-primary-50 font-graduate py-1 px-2 ${entry?.activated ? "text-secondary-500" : orderColorStyle(entry?.order)}`}>
				<option value="" className="text-secondary-50">
					None
				</option>
				<option value="advance" className={orderColorStyle("advance")}>
					Advance
				</option>
				<option value="firstfire" className={orderColorStyle("firstfire")}>
					First Fire
				</option>
				<option value="march" className={orderColorStyle("march")}>
					March
				</option>
				<option value="charge" className={orderColorStyle("charge")}>
					Charge
				</option>
				<option value="fallback" className={orderColorStyle("fallback")}>
					Fall Back
				</option>
			</select>
		</div>
	)
}

export default OrdersSelector
