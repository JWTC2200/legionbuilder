import { ListDetachmentSlot } from "@/app/types"
import DetachmentSlotTitle from "./DetachmentSlotTitle"
import Description from "./Description"
import DetachmentSelector from "./DetachmentSelector"
import UpgradeButton from "./UpgradeButton"
import LoadoutButton from "./LoadoutButton"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSlot = ({ detachmentSlot }: properties) => {
	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<DetachmentSlotTitle slotType={detachmentSlot.type} />
			{detachmentSlot.description && <Description text={detachmentSlot.description} />}
			{/* UNIT WARNINGS SelectedUnit component */}
			<div className="px-2 flex flex-col gap-1 pt-1">
				<DetachmentSelector detachmentSlot={detachmentSlot} />
				<UpgradeButton detachmentSlot={detachmentSlot} />
				<LoadoutButton detachmentSlot={detachmentSlot} />
			</div>
		</div>
	)
}

export default DetachmentSlot
