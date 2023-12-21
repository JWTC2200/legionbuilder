import { BUILDER_FORMATION, BUILDER_DETACHMENT_SLOT, BUILDER_DETACHMENT_UNIT_UPGRADES, BUILDER_LIST, BUILDER_DETACHMENT_UNIT, DETACHMENT_TYPE } from "@/app/types"
import { detachmentPoints, detachmentSize } from "../utils"
import { detachmentData } from "@/app/data/detachment_data"
import ReferencePopup from "../components/ReferencePopup"

export const detachmentsTaken = (array: (JSX.Element | null)[] | null) => {
	if (array) {
		return array.filter((entry) => entry !== null).length
	}
	return 0
}

export const formationBreakPoints = (formation: BUILDER_FORMATION): { wounds: number; break: number } => {
	const compulsory = formation.compulsory ? formationArrayBreakStrength(formation.compulsory) : [0]

	const optional = formation.optional ? formationArrayBreakStrength(formation.optional) : [0]

	const choice = formation.choice ? formationArrayBreakStrength(formation.choice.flat()) : [0]

	const total = compulsory.concat(optional, choice).reduce((acc, sum) => acc + sum, 0)

	return { wounds: total, break: Math.ceil(total / 2) }
}

const formationArrayBreakStrength = (array: BUILDER_DETACHMENT_SLOT[]) => {
	const breakStrength = array.map((slot) => (slot.selected_unit && slot.type !== DETACHMENT_TYPE.dedicated ? calcDetachmentBreakStrength(slot.selected_unit) : 0))
	return breakStrength
}

const calcDetachmentBreakStrength = (unit: BUILDER_DETACHMENT_UNIT): number => {
	const base = unit.break_strength || unit.break_strength === 0 ? unit.break_strength * unit.base_size : unit.base_size
	const upgrades = unit.upgrade_options.map((upgrade) => (upgrade.break_strength || upgrade.break_strength === 0 ? upgrade.size * upgrade.break_strength : upgrade.size)).reduce((acc, sum) => acc + sum, 0)
	return base + upgrades
}

export const slotHTML = (slot: BUILDER_DETACHMENT_SLOT) => {
	if (slot.selected_unit) {
		return (
			<li key={slot.slot_ref} className="relative">
				- <strong>{slot.type}</strong>: <ReferencePopup detachmentId={slot.selected_unit.id}>{slot.selected_unit.name}</ReferencePopup> {`(${detachmentSize(slot.selected_unit)})`}
				{", "}
				{detachmentPoints(slot.selected_unit)}pts{}
				{upgradesHTML(slot.selected_unit.upgrade_options, slot.slot_ref)}
			</li>
		)
	}
	return null
}

export const upgradesHTML = (upgradeArray: BUILDER_DETACHMENT_UNIT_UPGRADES[], slot_ref: string) => {
	const upgrades = upgradeArray.filter((upgrade) => upgrade.number).map((upgr) => <li key={slot_ref + upgr.name}>{upgr.text ? upgr.text : `${upgr.number} ${upgr.name}`}</li>)
	if (upgrades.length) {
		return <ul className="text-xs pl-4">{upgrades}</ul>
	}
	return null
}

export const listCards = (list: BUILDER_LIST) => {
	const unitIds = list.formations.map((formation) => {
		const compulsoryIds = formation.compulsory?.map((slot) => slot.selected_unit?.id)
		const optionIds = formation.optional?.map((slot) => {
			slot.selected_unit?.id
		})
		const choiceIds = formation.choice?.map((array) => {
			array.map((slot) => {
				slot.selected_unit?.id
			})
		})
		return [compulsoryIds, optionIds, choiceIds]
	})

	const filteredFlatIds = Array.from(
		new Set(
			unitIds
				.flat()
				.flat()
				.filter((id) => {
					return id !== undefined
				})
		)
	)

	const relatedIds = Array.from(
		new Set(
			filteredFlatIds
				.map((id) => {
					const related = detachmentData.find((detachment) => detachment.id === id)!
					return [related.main_unit, related.related_unit].flat()
				})
				.flat()
		)
	)

	return relatedIds
}
