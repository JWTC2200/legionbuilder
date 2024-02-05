import { ListDetachmentSlot } from "@/app/types"
import DetachmentSlotTitle from "./DetachmentSlotTitle"
import Description from "./Description"
import DetachmentSelector from "./DetachmentSelector"
import DetachmentWarnings from "../warnings/DetachmentWarnings"
import DetachmentInfo from "./DetachmentInfo"
import SlotSideMenuBtn from "./SlotSideMenuBtn"
import { listDetails } from "@/app/lists/state"
import DetachmentDetails from "./DetachmentDetails"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "../../utils"
import { listState } from "@/app/lists/state"
import { detachmentData } from "@/app/data/detachment_data"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentSlot = ({ detachmentSlot }: properties) => {
	const { visible } = listDetails()
	const { list } = listState()

	const upgradeSlot = findUpgradeBySlotId(list, detachmentSlot.id)
	const loadoutSlot = findLoadoutBySlotId(list, detachmentSlot.id)
	const detachment = detachmentData.find((detachment) => detachment.id === upgradeSlot?.id)
	const hasUpgrades = detachment?.upgrade_options.length
	const hasLoadouts = detachment?.loadout_options.length

	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<DetachmentSlotTitle slotType={detachmentSlot.type} />
			{detachmentSlot.description && <Description text={detachmentSlot.description} />}

			<div className="px-2 flex flex-col gap-1 pt-1">
				<DetachmentInfo detachmentSlot={detachmentSlot} />
				<DetachmentWarnings detachmentSlot={detachmentSlot} />
				<DetachmentSelector detachmentSlot={detachmentSlot} />
			</div>
			{!visible.includes(detachmentSlot.formation_id) ? (
				<DetachmentDetails detachmentSlot={detachmentSlot} />
			) : null}
			<div className="px-2 flex flex-col gap-1 pt-1">
				{upgradeSlot?.id && hasUpgrades ? (
					<SlotSideMenuBtn detachmentSlot={detachmentSlot} menuType="upgrades" />
				) : null}
				{loadoutSlot?.id && hasLoadouts ? (
					<SlotSideMenuBtn detachmentSlot={detachmentSlot} menuType="loadouts" />
				) : null}
			</div>
		</div>
	)
}

export default DetachmentSlot
