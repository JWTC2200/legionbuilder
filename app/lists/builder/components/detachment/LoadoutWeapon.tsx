import { BUILDER_DETACHMENT_LOADOUT, BUILDER_FORMATION_SLOT, BUILDER_DETACHMENT_UNIT, SLOTSET } from "@/app/types"
import { listState } from "../../state"
import { detachmentSize } from "@/app/lists/utils"

interface properties {
	detachmentSlot: BUILDER_FORMATION_SLOT
	weaponOption: BUILDER_DETACHMENT_LOADOUT
	slotSet: SLOTSET
}

const LoadoutWeapon = ({ detachmentSlot, weaponOption, slotSet }: properties) => {
	const { list, setList } = listState()

	const buttonStyles =
		"flex justify-center items-center font-graduate w-6 h-6 border-2 rounded-full bg-backgrounds-950 text-primary-50"

	const updateWeaponLoadout = (
		slotUnit: BUILDER_DETACHMENT_UNIT,
		value: number,
		location: string,
		weapon: string
	): BUILDER_DETACHMENT_UNIT => {
		const newLoadout: BUILDER_DETACHMENT_UNIT = {
			...slotUnit,
			loadout_options: slotUnit.loadout_options.map((newLocation) => {
				if (newLocation.location === location) {
					return {
						...newLocation,
						options: newLocation.options.map((newWeapon) => {
							if (newWeapon.weapon === weapon) {
								const newValue = newWeapon.number + value > 0 ? newWeapon.number + value : 0
								return { ...newWeapon, number: newValue }
							}
							return newWeapon
						}),
					}
				}
				return newLocation
			}),
		}
		return newLoadout
	}

	const incrementWeapon = (value: number, location: string, weapon: string) => {
		const newArmyList = {
			...list,
			formations: list.formations.map((newFormation) => {
				if (newFormation.ref_id === detachmentSlot.ref_id) {
					return {
						...newFormation,
						formation_slots: newFormation.formation_slots.map((slot) => {
							if (slot.slot_type === slotSet) {
								return {
									...slot,
									slot: slot.slot.map((newSlot) => {
										if (newSlot.slot_ref === detachmentSlot.slot_ref) {
											return {
												...newSlot,
												selected_unit: updateWeaponLoadout(
													newSlot.selected_unit!,
													value,
													location,
													weapon
												),
											}
										}
										return newSlot
									}),
								}
							}
							return slot
						}),
					}
				}
				return newFormation
			}),
		}

		setList(newArmyList)
	}

	const warning = () => {
		if (detachmentSlot.selected_unit) {
			const weaponLimit = detachmentSize(detachmentSlot.selected_unit)
			const weaponTotal = weaponOption.options.map((weapon) => weapon.number).reduce((acc, num) => acc + num, 0)
			if (weaponTotal > weaponLimit) {
				return <span className="text-red-500 ml-2">Too many weapons! </span>
			}
		}
	}

	return (
		<div>
			<h4 className="font-graduate md:text-lg font-semibold">
				{weaponOption.location}
				{warning()}
			</h4>
			<div>
				{weaponOption.options.map((weapon, index) => (
					<div
						key={detachmentSlot.ref_id + "LoadoutWeapon" + weapon.weapon + index}
						className="flex items-center font-graduate text-sm md:text-base">
						<button
							onClick={() => incrementWeapon(1, weaponOption.location, weapon.weapon)}
							className={buttonStyles}>
							+
						</button>
						<button
							onClick={() => incrementWeapon(-1, weaponOption.location, weapon.weapon)}
							className={buttonStyles}>
							-
						</button>
						<span className="text-xl px-1">{weapon.number}</span>
						{weapon.weapon}
					</div>
				))}
			</div>
		</div>
	)
}

export default LoadoutWeapon
