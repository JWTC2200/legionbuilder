import React from "react"
import { IoDuplicateSharp } from "react-icons/io5"
import { ListDetachment, ListFormation, ListFormationGroup, ListLoadouts, ListUpgrades } from "@type/listTypes"
import { listState } from "@lists/state"
import { nanoid } from "nanoid"

interface properties {
	formation: ListFormation
}

const FormationDuplicate = ({ formation }: properties) => {
	const { list, setList } = listState()
	const duplicateFormation = () => {
		const newId = nanoid()
		const newFormation: ListFormation = {
			...formation,
			id: newId,
			detachment_groups: changeDetachmentGroups(newId, formation.detachment_groups),
		}

		const detachments =
			list.detachments &&
			replaceFormationIds(
				newId,
				list.detachments.filter((detachment) => detachment.formation_id === formation.id)
			)

		const loadouts =
			list.loadouts &&
			replaceFormationIds(
				newId,
				list.loadouts.filter((loadout) => loadout.formation_id === formation.id)
			)

		const upgrades =
			list.upgrades &&
			replaceFormationIds(
				newId,
				list.upgrades.filter((upgrade) => upgrade.formation_id === formation.id)
			)

		setList({
			...list,
			formations: [...list.formations, newFormation],
			detachments: [...list.detachments, ...detachments],
			upgrades: [...list.upgrades, ...upgrades],
			loadouts: [...list.loadouts, ...loadouts],
		})
	}

	const changeDetachmentGroups = (id: string, detachmentGroups: ListFormationGroup[]): ListFormationGroup[] => {
		return detachmentGroups.map((group) => {
			return {
				...group,
				id: id + group.id.slice(21),
				detachment_slots: group.detachment_slots.map((slot) => {
					return { ...slot, formation_id: id, id: id + slot.id.slice(id.length) }
				}),
			}
		})
	}

	const replaceFormationIds = (id: string, array: ListDetachment[] | ListUpgrades[] | ListLoadouts[]): any => {
		return array.map((entry) => {
			const newSlotId = id + entry.slot_id.slice(id.length)
			return {
				...entry,
				formation_id: id,
				slot_id: newSlotId,
			}
		})
	}

	return (
		<IoDuplicateSharp
			className={"text-xl cursor-pointer hover:text-tertiary-500 active:text-primary-400"}
			onClick={duplicateFormation}
		/>
	)
}

export default FormationDuplicate
