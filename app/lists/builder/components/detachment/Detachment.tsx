"use client"

import { BUILDER_DETACHMENT_SLOT, SLOTSET, SUBFACTION_TYPE } from "@/app/types"
import Title from "./Title"
import Details from "./Details"
import Description from "./Description"
import Select from "./Select"
import Upgrades from "./Upgrades"
import SizeWarning from "./SizeWarning"
import SubfactionWarning from "./SubfactionWarning"

interface properties {
	formationSubfaction: SUBFACTION_TYPE | null
	detachmentSlot: BUILDER_DETACHMENT_SLOT
	slotSet: SLOTSET
}

const Detachment = ({ formationSubfaction, detachmentSlot, slotSet }: properties) => {
	return (
		<div className="flex flex-col w-full sm:w-[450px]">
			<Title slotType={detachmentSlot.type} />
			{detachmentSlot.description ? <Description text={detachmentSlot.description} /> : null}
			{detachmentSlot.selected_unit ? (
				<>
					<SubfactionWarning
						selectedUnit={detachmentSlot.selected_unit}
						formationSubfaction={formationSubfaction}
					/>
					<SizeWarning selectedUnit={detachmentSlot.selected_unit} />
					<Details selectedUnit={detachmentSlot.selected_unit} />
				</>
			) : null}
			<div className="px-2">
				<Select formationSubfaction={formationSubfaction} detachmentSlot={detachmentSlot} slotSet={slotSet} />
				{detachmentSlot.selected_unit && detachmentSlot.selected_unit.upgrade_options ? (
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
				) : null}
			</div>
		</div>
	)
}

export default Detachment
