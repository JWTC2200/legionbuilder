import { ListDetachmentSlot } from "@type/listTypes"
import { listSidebar, listState } from "@/app/lists/state"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "@lists/builder/utils"

interface properties {
	detachmentSlot: ListDetachmentSlot
	menuType: "loadouts" | "upgrades"
}

const SlotSideMenuBtn = ({ detachmentSlot, menuType }: properties) => {
	const { slot_id, type, visible, closeSidebar, openSidebar, setData } = listSidebar()
	const { list } = listState()

	const setupSideMenu = () => {
		setData(detachmentSlot.id, menuType)
		openSidebar()
		if (visible && type === menuType && slot_id === detachmentSlot.id) {
			closeSidebar()
		}
	}

	let currentUsed = 0

	if (menuType === "loadouts") {
		const slot = findLoadoutBySlotId(list, detachmentSlot.id)?.loadouts.length
		if (slot) {
			currentUsed = slot
		}
	}
	if (menuType === "upgrades") {
		const slot = findUpgradeBySlotId(list, detachmentSlot.id)?.upgrades.length
		if (slot) {
			currentUsed = slot
		}
	}

	return (
		<button
			onClick={setupSideMenu}
			className="flex justify-center items-center font-graduate builder_title_background py-1 px-6 text-primary-50 clip-path-octagon-md hover:text-tertiary-500 capitalize">
			{menuType} {currentUsed ? `(${currentUsed})` : null}
		</button>
	)
}

export default SlotSideMenuBtn
