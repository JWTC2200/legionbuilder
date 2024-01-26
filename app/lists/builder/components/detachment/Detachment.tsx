"use client"

import { BUILDER_FORMATION_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import Title from "./Title"
import Details from "./Details"
import Description from "./Description"
import Select from "./Select"
import Upgrades from "./Upgrades"
import SizeWarning from "./SizeWarning"
import SubfactionWarning from "./SubfactionWarning"

interface properties {
	formationSubfaction: SUBFACTION_TYPE | null
	detachmentSlot: BUILDER_FORMATION_SLOT
	slotSet: SLOTSET
}

const Detachment = ({ formationSubfaction, detachmentSlot, slotSet }: properties) => {
	const selectedUnit = () => {
		if (detachmentSlot.selected_unit) {
			return (
				<>
					<SubfactionWarning
						selectedUnit={detachmentSlot.selected_unit}
						formationSubfaction={formationSubfaction}
					/>
					<SizeWarning selectedUnit={detachmentSlot.selected_unit} />
					<Details selectedUnit={detachmentSlot.selected_unit} />
				</>
			)
		}
	}

	const unitUpgrades = () => {
		if (detachmentSlot.selected_unit && detachmentSlot.selected_unit.upgrade_options) {
			return (
				<div className="flex flex-col gap-1">
					{detachmentSlot.selected_unit.upgrade_options.map((option, index) => (
						<Upgrades
							key={detachmentSlot.slot_ref + "upgrades" + index}
							unitId={detachmentSlot.selected_unit!.id}
							upgradeOption={option}
							slotSet={slotSet}
							refId={detachmentSlot.ref_id}
							slotRef={detachmentSlot.slot_ref}
						/>
					))}
				</div>
			)
		}
	}

	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<Title slotType={detachmentSlot.type} />
			{detachmentSlot.description ? <Description text={detachmentSlot.description} /> : null}
			{selectedUnit()}
			<div className="px-2">
				<Select formationSubfaction={formationSubfaction} detachmentSlot={detachmentSlot} slotSet={slotSet} />
				{unitUpgrades()}
			</div>
		</div>
	)
}

export default Detachment
