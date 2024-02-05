import { ListDetachmentSlot } from "@/app/types"
import DetachmentSlotTitle from "./DetachmentSlotTitle"
import Description from "./Description"
import DetachmentSelector from "./DetachmentSelector"
import DetachmentWarnings from "./DetachmentWarnings"
import DetachmentInfo from "./DetachmentInfo"
import SlotSideMenuBtn from "./SlotSideMenuBtn"
import { listDetails } from "@/app/lists/state"
import DetachmentDetails from "./DetachmentDetails"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSlot = ({ detachmentSlot }: properties) => {
	const { visible } = listDetails()

	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<DetachmentSlotTitle slotType={detachmentSlot.type} />
			{detachmentSlot.description && <Description text={detachmentSlot.description} />}
			<div className="px-2 flex flex-col gap-1 pt-1">
				<DetachmentInfo detachmentSlot={detachmentSlot} />
				<DetachmentWarnings detachmentSlot={detachmentSlot} />
				<DetachmentSelector detachmentSlot={detachmentSlot} />
				{visible.includes(detachmentSlot.formation_id) ? (
					<DetachmentDetails detachmentSlot={detachmentSlot} />
				) : null}
				<SlotSideMenuBtn detachmentSlot={detachmentSlot} menuType="upgrades" />
				<SlotSideMenuBtn detachmentSlot={detachmentSlot} menuType="loadouts" />
			</div>
		</div>
	)
}

export default DetachmentSlot
