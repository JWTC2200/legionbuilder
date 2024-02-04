import { ListDetachmentSlot } from "@/app/types"
import { listSidebar, listState } from "@/app/lists/state"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const UpgradeButton = ({ detachmentSlot }: properties) => {
	const { openSidebar, setData } = listSidebar()
	const { list } = listState()

	const setupSideMenu = () => {
		setData(detachmentSlot.id, "upgrades")
		openSidebar()
	}

	const currentUpgrades = list.upgrades.find((upgrade) => upgrade.slot_id === detachmentSlot.id)?.upgrades.length

	return (
		<button
			onClick={setupSideMenu}
			className="flex justify-center items-center w-full font-graduate builder_title_background py-1 px-4 text-primary-50 clip-path-octagon-md hover:text-tertiary-500 ">
			Upgrades {currentUpgrades ? `(${currentUpgrades})` : null}
		</button>
	)
}

export default UpgradeButton
