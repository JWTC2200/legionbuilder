import { listSidebar } from "../../state"
import Upgrades from "./detachment/Upgrades"
import Loadouts from "./detachment/Loadouts"

const SideMenu = () => {
	const { slot_id, type, visible, closeSidebar } = listSidebar()

	return (
		<div
			className={`fixed right-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen max-w-[400px] text-backgrounds-950 ${visible ? "translate-x-0" : "translate-x-full"} ease-in-out duration-1000 z-20 flex flex-col items-center gap-4`}>
			{type === "upgrade" ? <Upgrades slot_id={slot_id} /> : null}
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
