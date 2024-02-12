import { ListDetachment } from "@/app/types/listTypes"
import { ordersState } from "@lists/play/state"
import OrdersSelector from "./OrdersSelector"

interface properties {
	detachment: ListDetachment
}

const Detachment = ({ detachment }: properties) => {
	const { orders } = ordersState()

	const currentOrder = orders.find((order) => order.slot_id === detachment.slot_id)

	return (
		<div className={`flex flex-col gap-1 sm:w-[450px] w-full items-start bg-secondary-800 p-2 clip-path-octagon-md ${currentOrder?.order === "activated" ? "text-secondary-500" : ""}`}>
			<div className="">{detachment.name}</div>
			<OrdersSelector slotId={detachment.slot_id} />
		</div>
	)
}

export default Detachment
