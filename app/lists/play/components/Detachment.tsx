import { ListDetachment } from "@/app/types/listTypes"
import { ordersState } from "@lists/play/state"
import OrdersSelector from "./OrdersSelector"
import DetachmentDetails from "./DetachmentDetails"

interface properties {
	detachment: ListDetachment
}

const Detachment = ({ detachment }: properties) => {
	const { orders, setOrders, viewMode } = ordersState()

	const currentOrder = orders.find((order) => order.slot_id === detachment.slot_id)

	const handleActivation = () => {
		if (currentOrder) {
			setOrders([
				...orders.map((order) => {
					if (order.slot_id === detachment.slot_id) {
						return { ...order, activated: !order.activated }
					}
					return order
				}),
			])
		} else {
			setOrders([...orders, { slot_id: detachment.slot_id, order: "", activated: true }])
		}
	}

	return (
		<div
			className={`flex flex-col gap-1 sm:w-[450px] w-full justify-center items-start bg-secondary-800 p-2 clip-path-octagon-md ${currentOrder?.activated ? "text-secondary-500" : ""}`}>
			<div className="w-full grid grid-cols-4">
				<div className="col-span-3">
					<div className="">{detachment.name}</div>
					<OrdersSelector slotId={detachment.slot_id} />
				</div>
				<div
					className={`col-span-1 flex justify-center items-center ${currentOrder?.activated ? "" : "text-primary-500"}`}>
					<button onClick={handleActivation}>{currentOrder?.activated ? "Activated" : "Ready"}</button>
				</div>
				{}
			</div>
			{viewMode && <DetachmentDetails detachment={detachment} />}
		</div>
	)
}

export default Detachment
