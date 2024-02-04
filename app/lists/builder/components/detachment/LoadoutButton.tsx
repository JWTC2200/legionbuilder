import { ListDetachmentSlot } from "@/app/types"
import { listSidebar, listState } from "@/app/lists/state"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const LoadoutButton = ({ detachmentSlot }: properties) => {
	const { openSidebar, setData } = listSidebar()
	const { list } = listState()

	const setupSideMenu = () => {
		setData(detachmentSlot.id, "loadouts")
		openSidebar()
	}

	const currentLoadouts = list.loadouts.find((loadout) => loadout.slot_id === detachmentSlot.id)?.loadouts.length

	return (
		<button
			onClick={setupSideMenu}
			className="flex justify-center items-center w-full font-graduate builder_title_background py-1 px-4 text-primary-50 clip-path-octagon-md hover:text-tertiary-500">
			Loadouts {currentLoadouts ? `(${currentLoadouts})` : null}
		</button>
	)
}

export default LoadoutButton
