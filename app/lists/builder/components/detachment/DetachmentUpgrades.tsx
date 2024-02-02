import { ListDetachmentSlot } from "@/app/types"
import { listSidebar } from "@/app/lists/state"
interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentUpgrades = ({ detachmentSlot }: properties) => {
	const { openSidebar, setData } = listSidebar()

	const setupSideMenu = () => {
		setData(detachmentSlot.id, "upgrade")
		openSidebar()
	}

	return (
		<button
			onClick={setupSideMenu}
			className="flex justify-center items-center w-full font-graduate builder_title_background py-1 px-4 text-primary-50 clip-path-octagon-lg hover:text-tertiary-500">
			Upgrades
		</button>
	)
}

export default DetachmentUpgrades
