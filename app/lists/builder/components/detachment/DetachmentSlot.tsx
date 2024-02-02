import { ListDetachmentSlot } from "@/app/types"
import { listState } from "@/app/lists/state"
import DetachmentSlotTitle from "./DetachmentSlotTitle"
import Description from "./Description"
import DetachmentSelector from "./DetachmentSelector"
import DetachmentUpgrades from "./DetachmentUpgrades"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSlot = ({ detachmentSlot }: properties) => {
	const { list } = listState()

	const detachment = list.detachments.find((unit) => unit.slot_id === detachmentSlot.id)

	// display
	// upgrades
	// loadout
	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<DetachmentSlotTitle slotType={detachmentSlot.type} />
			{detachmentSlot.description && <Description text={detachmentSlot.description} />}
			{/* UNIT WARNINGS SelectedUnit component */}
			<div className="px-2 flex flex-col gap-1 pt-1">
				<DetachmentSelector detachmentSlot={detachmentSlot} />
				<DetachmentUpgrades detachmentSlot={detachmentSlot} />
			</div>
		</div>
	)
}

export default DetachmentSlot
