import { listSidebar, listState } from "../../state"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "../utils"

const SideMenu = () => {
	const { slot_id, type, visible, closeSidebar } = listSidebar()
	const { list } = listState()

	const getData = () => {
		if (slot_id && type === "upgrade") {
			return findUpgradeBySlotId(list, slot_id)
		}
		if (slot_id && type === "loadouts") {
			return findLoadoutBySlotId(list, slot_id)
		}
	}

	const data = getData()

	return (
		<div
			className={`fixed right-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen max-w-[400px] text-backgrounds-950 ${visible ? "translate-x-0" : "translate-x-full"} ease-in-out duration-1000 z-20 flex flex-col items-center gap-4`}>
			<h3 className="clip-path-octagon-md builder_title_background text-primary-50 font-graduate py-1 px-6 text-center">
				{slot_id && slot_id}
			</h3>
			<div className="w-full text-black">{slot_id ? slot_id : null}</div>
			<button
				onClick={() => closeSidebar()}
				className="font-graduate px-2 border-2 border-backgrounds-950 rounded-full hover:text-tertiary-500 hover:border-tertiary-500">
				Close
			</button>
		</div>
	)
}

export default SideMenu
