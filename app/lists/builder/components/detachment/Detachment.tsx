"use client"

import { BUILDER_FORMATION_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import Title from "./Title"
import Description from "./Description"
import Select from "./Select"
import UnitUpgrades from "./UnitUpgrades"
import SelectedUnit from "./SelectedUnit"
import UpgradeList from "./UpgradeList"
import LoadoutOptions from "./LoadoutOptions"

interface properties {
	formationSubfaction: SUBFACTION_TYPE | null
	detachmentSlot: BUILDER_FORMATION_SLOT
	slotSet: SLOTSET
}

const Detachment = ({ formationSubfaction, detachmentSlot, slotSet }: properties) => {
	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<Title slotType={detachmentSlot.type} />
			{detachmentSlot.description ? <Description text={detachmentSlot.description} /> : null}
			<SelectedUnit detachmentSlot={detachmentSlot} formationSubfaction={formationSubfaction} />
			<div className="px-2 flex flex-col gap-1 pt-1">
				<Select formationSubfaction={formationSubfaction} detachmentSlot={detachmentSlot} slotSet={slotSet} />
				<UpgradeList detachmentSlot={detachmentSlot} />
				<UnitUpgrades detachmentSlot={detachmentSlot} slotSet={slotSet} />
				<LoadoutOptions detachmentSlot={detachmentSlot} slotSet={slotSet} />
			</div>
		</div>
	)
}

export default Detachment
