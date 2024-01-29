import { BUILDER_FORMATION_SLOT, SLOTSET } from "@/app/types"
import ShowHide from "./ShowHide"
import LoadoutWeapon from "./LoadoutWeapon"

interface properties {
	detachmentSlot: BUILDER_FORMATION_SLOT
	slotSet: SLOTSET
}

const LoadoutOptions = ({ detachmentSlot, slotSet }: properties) => {
	if (detachmentSlot.selected_unit && detachmentSlot.selected_unit.loadout_options.length) {
		return (
			<ShowHide title="Weapon loadout" subtitle={detachmentSlot.selected_unit.name}>
				<div className="flex flex-col gap-1">
					{detachmentSlot.selected_unit.loadout_options.map((option, index) => (
						<LoadoutWeapon
							key={detachmentSlot.slot_ref + "loadoutOptions" + index}
							detachmentSlot={detachmentSlot}
							weaponOption={option}
							slotSet={slotSet}
						/>
					))}
				</div>
			</ShowHide>
		)
	}
}

export default LoadoutOptions
