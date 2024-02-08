import { listSidebar } from "../../state"
import Upgrades from "./detachment/Upgrades"
import Loadouts from "./detachment/Loadouts"
import { FaExchangeAlt } from "@react-icons/all-files/fa/FaExchangeAlt"

const SideMenu = () => {
	const { slot_id, type, visible, closeSidebar, setData } = listSidebar()

	const changeSideMenu = () => {
		if (!slot_id) {
			return
		}
		if (type === "loadouts") {
			setData(slot_id, "upgrades")
		}
		if (type === "upgrades") {
			setData(slot_id, "loadouts")
		}
	}

	return (
		<div
			className={`fixed right-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen max-w-[420px] text-backgrounds-950 ${!visible ? "translate-x-full" : "translate-x-0"} ease-in-out duration-1000 z-20 flex flex-col items-center gap-2`}>
			<button onClick={changeSideMenu}>
				<h3 className="font-graduate font-bold text-lg capitalize flex items-center gap-2 hover:text-primary-700 active:text-primary-500">
					{type} <FaExchangeAlt />{" "}
					<span className="text-sm">{type === "upgrades" ? "Loadouts" : "Upgrades"}</span>
				</h3>
			</button>
			{type === "upgrades" ? <Upgrades slot_id={slot_id} /> : null}
			{type === "loadouts" ? <Loadouts slot_id={slot_id} /> : null}
			<button
				onClick={() => closeSidebar()}
				className="font-graduate px-2 border-2 border-backgrounds-950 rounded-full hover:text-tertiary-500 hover:border-tertiary-500">
				Close
			</button>
		</div>
	)
}

export default SideMenu
