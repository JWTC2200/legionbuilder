import { ordersState } from "@lists/play/state"
import { orderColorStyle } from "../utils"

interface properties {
	slotId: string
}

const OrdersSelector = ({ slotId }: properties) => {
	const { orders, setOrders } = ordersState()

	const handleOrders = (e: string) => {
		setOrders([...orders.filter((order) => order.slot_id !== slotId), { slot_id: slotId, order: e }])
	}

	const entry = orders.find((orders) => orders.slot_id === slotId)

	return (
		<div className="flex gap-1">
			<label htmlFor={`orderSelect${slotId}`}>Orders:</label>
			<select
				value={entry ? entry.order : ""}
				name={`orderSelect${slotId}`}
				id={`orderSelect${slotId}`}
				onChange={(e) => handleOrders(e.target.value)}
				className={`bg-secondary-900 text-primary-50 font-graduate py-1 px-2 ${orderColorStyle(entry?.order)}`}>
				<option value="" className="text-primary-50">
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
				<option value="activated" className={orderColorStyle("activated")}>Activated</option> 
			</select> 
		</div>
	)
}

export default OrdersSelector
