import {
	DETACHMENT,
	BUILDER_DETACHMENT_UNIT,
	BUILDER_DETACHMENT_UNIT_UPGRADES,
	BUILDER_FORMATION_SLOT,
	SLOTSET,
	SUBFACTION_TYPE,
	BUILDER_DETACHMENT_LOADOUT,
} from "@/app/types"
import { detachmentData } from "@/app/data/detachment_data"
import { listState } from "../../state"

interface properties {
	formationSubfaction: SUBFACTION_TYPE | null
	detachmentSlot: BUILDER_FORMATION_SLOT
	slotSet: SLOTSET
}

const Select = ({ detachmentSlot, formationSubfaction, slotSet }: properties) => {
	const { list, setList } = listState()

	const detachmentSelectedHighlight = detachmentSlot.selected_unit ? " text-tertiary-800 font-semibold" : ""

	const filterBySubfaction = (array: DETACHMENT[]) => {
		return array.filter((detachment) => {
			if (formationSubfaction) {
				return (
					detachment.subfaction === formationSubfaction ||
					detachment.subfaction === null ||
					detachment.id === detachmentSlot.selected_unit?.id
				)
			}
			return detachment
		})
	}

	const detachmentOptions: DETACHMENT[] = detachmentSlot.restricted
		? detachmentSlot.options.map((option) => detachmentData.filter((detachment) => detachment.id === option)[0])
		: detachmentData
				.filter(
					(detachment) =>
						detachment.detachment_type === detachmentSlot.type &&
						detachment.faction === detachmentSlot.faction &&
						!detachment.unique
				)
				.concat(detachmentData.filter((detach) => detachmentSlot.options?.includes(detach.id)))

	const selectOptions = filterBySubfaction(detachmentOptions).map((option, index) => (
		<option key={detachmentSlot.slot_ref + "unitOption" + index} value={option.id} className="text-black">
			{option.base_cost}pts: {option.name}
		</option>
	))

	const createNewUnit = (newId: number): BUILDER_DETACHMENT_UNIT | null => {
		if (newId) {
			const unitData = detachmentOptions.find((unit) => unit.id === newId)!

			const untDataUnitUpgrades: BUILDER_DETACHMENT_UNIT_UPGRADES[] = unitData.upgrade_options.map((option) => {
				return {
					name: option.name,
					number: 0,
					cost: 0,
					size: 0,
				}
			})

			const unitDataLoadout: BUILDER_DETACHMENT_LOADOUT[] = unitData.loadout_options.map((option) => {
				return {
					location: option.location,
					options: option.options.map((weapon) => {
						return { weapon: weapon, number: 0 }
					}),
				}
			})

			const unitDataUnit: BUILDER_DETACHMENT_UNIT = {
				...unitData,
				upgrade_options: untDataUnitUpgrades,
				loadout_options: unitDataLoadout,
			}
			return unitDataUnit
		}
		return null
	}

	const changeDetachment = (id: number) => {
		const newUnit = createNewUnit(id)
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
									slot: slot.slot.map((detachment) => {
										if (detachment.slot_ref === detachmentSlot.slot_ref) {
											return { ...detachment, selected_unit: newUnit }
										}
										return detachment
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

	return (
		<select
			id={`detachment_selector_${detachmentSlot.slot_ref}`}
			name={`detachment_selector_${detachmentSlot.slot_ref}`}
			value={detachmentSlot.selected_unit ? detachmentSlot.selected_unit.id : 0}
			onChange={(e) => changeDetachment(Number(e.target.value))}
			className={
				"w-full text-center py-1 px-2 border border-primary-950 font-graduate hover:text-tertiary-700 active:text-tertiary-700" +
				detachmentSelectedHighlight
			}>
			<option value={"0"} className="text-black">
				Select Detachment
			</option>
			{selectOptions}
		</select>
	)
}

export default Select
