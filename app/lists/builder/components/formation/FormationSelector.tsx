import { List, ListDetachment, ListFormation } from "@type/listTypes"
import { formationData } from "@/app/data/formation_data"
import { listState } from "@/app/lists/state"
import {
	createFormation,
	resetFormation,
	createNewDetachments,
	createNewUpgrades,
	createNewLoadouts,
} from "@/app/lists/builder/utils"
import { FaCircleQuestion } from "react-icons/fa6"
import { dataslateSideWidget } from "@/app/lists/state"
import {
	filterByAllegiance,
	filterBySubfactions,
	getSelectorIdArray,
	updateAllSlotInfo,
} from "@lists/builder/components/detachment/utils"
import { DETACHMENT } from "@type/types"
import { detachmentData } from "@data/detachment_data"
import { sortFormationFactions } from "@app/utils/sorting"

interface FormationSelector {
	formation: ListFormation
}

interface SlotOptions {
	id: DETACHMENT | null
	detachment: ListDetachment
}

const FormationSelector = ({ formation }: FormationSelector) => {
	const { list, setList } = listState()
	const sideWidget = dataslateSideWidget()

	const filteredFormations = () => {
		const gameModeFormations =
			list.gamemode === "titandeath"
				? formationData.filter((formation) => formation.id >= 4000 && formation.id <= 4999)
				: formationData

		return gameModeFormations.filter((formation) => {
			if (formation.allegiance === null || formation.allegiance === list.allegiance) return formation
		})
	}

	const selectFormation = (id: number) => {
		if (!id) {
			setList(resetFormation(list, formation))
		} else {
			const newFormation = createFormation(id, formation)
			if (newFormation) {
				const updatedFormations = list.formations.map((form) => {
					if (form.id === formation.id) {
						return newFormation
					}
					return form
				})

				const newList = {
					...list,
					formations: updatedFormations,
					detachments: createNewDetachments(newFormation, list),
					upgrades: createNewUpgrades(newFormation, list),
					loadouts: createNewLoadouts(newFormation, list),
				}

				// find formation id of new formation. Get all compulsory slots.

				const listCompSlots = newList.formations
					.find((formation) => formation.id === newFormation.id)!
					.detachment_groups.find((group) => group.type === "compulsory")!.detachment_slots

				const SlotOptions: SlotOptions[] = listCompSlots.map((slot) => {
					const detachment = newList.detachments.find((det) => det.slot_id === slot.id)!

					const subfactionsFiltered = filterBySubfactions(
						getSelectorIdArray(slot),
						newFormation.subfaction,
						detachment
					)

					const allegianceFiltered = filterByAllegiance(subfactionsFiltered, newList.allegiance, detachment)

					if (allegianceFiltered.length === 1) {
						return { id: allegianceFiltered[0], detachment: detachment }
					} else {
						return { id: null, detachment: detachment }
					}
				})

				const listUpdate = (list: List, options: SlotOptions[], rounds: number): List => {
					if (rounds >= options.length) return list

					if (options[rounds].id) {
						const data = detachmentData.find((det) => det.id === options[rounds].id!.id)!

						return listUpdate(
							updateAllSlotInfo(list, options[rounds].detachment, data),
							options,
							rounds + 1
						)
					}

					return listUpdate(list, options, rounds + 1)
				}

				setList(listUpdate(newList, SlotOptions, 0))
			}
		}
	}

	const handleFormationSideWIdget = () => {
		const formationInfo = formationData.find((formationData) => formationData.id === formation.data_id)
		if (formationInfo) {
			if (sideWidget.formation?.id === formationInfo.id) {
				sideWidget.setVisible(!sideWidget.visible)
			} else {
				sideWidget.setVisible(true)
			}
			sideWidget.setFormation(formationInfo)
		}
	}

	return (
		<div className="flex sm:gap-4 items-center justify-center">
			<select
				id={`formation_selector_${formation.id}`}
				name={`formation_selector_${formation.id}`}
				className="bg-secondary-800 clip-path-halfagon-md sm:text-xl py-2 font-graduate text-center max-w-[300px] sm:max-w-[400px] lg:max-w-full outline-none hover:text-primary-400 active:text-primary-400"
				value={formation.data_id ? formation.data_id : ""}
				onChange={(e) => {
					selectFormation(Number(e.target.value))
				}}>
				<option value="0" className="text-primary-50">
					SELECT FORMATION
				</option>
				{sortFormationFactions(filteredFormations()).map((format) => (
					<option key={formation.id + format.name} value={format.id} className="text-primary-50">
						{format.legend ? "FoL: " : null}
						{format.subfaction ? `${format.subfaction} ` : ""}
						{format.name}
					</option>
				))}
			</select>
			<button
				onClick={handleFormationSideWIdget}
				className="font-graduate text-xl sm:text-2xl font-bold text-tertiary-300 hover:text-primary-300 active:text-tertiary-500 p-1">
				<FaCircleQuestion />
			</button>
		</div>
	)
}

export default FormationSelector
