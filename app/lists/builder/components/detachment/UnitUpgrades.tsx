import { BUILDER_DETACHMENT_UNIT, BUILDER_FORMATION_SLOT, SLOTSET } from "@/app/types"
import ShowHide from "./ShowHide"
import Upgrades from "./Upgrades"

interface properties {
	detachmentSlot: BUILDER_FORMATION_SLOT
	slotSet: SLOTSET
}

const UnitUpgrades = ({ detachmentSlot, slotSet }: properties) => {
	if (detachmentSlot.selected_unit && detachmentSlot.selected_unit.upgrade_options.length) {
		return (
			<ShowHide title="Upgrades">
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
			</ShowHide>
		)
	}
}

export default UnitUpgrades
