"use client"

import { BUILDER_FORMATION_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import Title from "./Title"
import Details from "./Details"
import Description from "./Description"
import Select from "./Select"
import Upgrades from "./Upgrades"
import SizeWarning from "./SizeWarning"
import SubfactionWarning from "./SubfactionWarning"
import ShowHide from "./ShowHide"
import UnitUpgrades from "./UnitUpgrades"
import SelectedUnit from "./SelectedUnit"

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
			<div className="px-2">
				<Select formationSubfaction={formationSubfaction} detachmentSlot={detachmentSlot} slotSet={slotSet} />
				<UnitUpgrades detachmentSlot={detachmentSlot} slotSet={slotSet} />
			</div>
		</div>
	)
}

export default Detachment
