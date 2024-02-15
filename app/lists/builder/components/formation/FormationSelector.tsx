import { ListFormation } from "@type/listTypes"
import { formationData } from "@/app/data/formation_data"
import { listState } from "@/app/lists/state"
import {
	createFormation,
	resetFormation,
	createNewDetachments,
	createNewUpgrades,
	createNewLoadouts,
} from "@/app/lists/builder/utils"
import { totalFormationPoints } from "@/app/lists/builder/utils"

interface FormationSelector {
	formation: ListFormation
}

const FormationSelector = ({ formation }: FormationSelector) => {
	const { list, setList } = listState()

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

				setList({
					...list,
					formations: updatedFormations,
					detachments: createNewDetachments(newFormation, list),
					upgrades: createNewUpgrades(newFormation, list),
					loadouts: createNewLoadouts(newFormation, list),
				})
			}
		}
	}

	return (
		<div className="flex flex-wrap sm:gap-4 items-center justify-center">
			<select
				id={`formation_selector_${formation.id}`}
				name={`formation_selector_${formation.id}`}
				className="bg-secondary-800 clip-path-halfagon-md sm:text-xl py-2 font-graduate text-center max-w-[300px] sm:max-w-[400px] lg:max-w-full outline-none hover:text-primary-400 active:text-primary-400"
				value={formation.data_id}
				onChange={(e) => {
					selectFormation(Number(e.target.value))
				}}>
				<option value="0" className="text-primary-50">
					SELECT FORMATION
				</option>
				{formationData.map((format) => (
					<option key={formation.id + format.name} value={format.id} className="text-primary-50">
						{format.name}
					</option>
				))}
			</select>
		</div>
	)
}

export default FormationSelector
