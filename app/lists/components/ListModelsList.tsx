import React from "react"
import { listModelState, listState } from "@lists/state"
import SideMenutitle from "@lists/builder/components/SideMenutitle"
import { detachmentData } from "@data/detachment_data"
import { unitData } from "@data/unit_data"
import { factionTypeArray, ListModelsNames } from "@type/types"

function ListModelsList() {
	const { list } = listState()
	const { visible, setVisible } = listModelState()

	const detachmentModels: ListModelsNames[] = list.detachments
		.filter((detachments) => detachments.id)
		.map((detachment) => {
			const detachmentInfo = detachmentData.filter((entry) => entry.id === detachment.id)[0]

			const unitName = detachmentInfo.main_unit.length
				? unitData.filter((entry) => entry.id === detachmentInfo.main_unit[0])[0].name
				: ""

			return { name: unitName, number: detachment.size, faction: detachmentInfo.faction }
		})

	const upgradeModels: ListModelsNames[] = list.upgrades
		.filter((upgrades) => upgrades.upgrades.length)
		.map((upgrade) =>
			upgrade.upgrades.map((entry) => {
				const unitInfo = unitData.filter((unit) => unit.id === entry.unit_ref)[0]
				return { name: unitInfo.name, number: entry.size, faction: unitInfo.faction }
			})
		)
		.flat()

	const allModels: ListModelsNames[] = [...detachmentModels, ...upgradeModels].filter((model) => model.name)

	const uniqueModelNames = Array.from(new Set(allModels.map((model) => model.name)))

	const groupByModelNames: ListModelsNames[] = uniqueModelNames.map((modelName) => {
		const matchedModels: ListModelsNames[] = allModels.filter((model) => model.name === modelName)

		return {
			name: modelName,
			number: matchedModels.reduce((acc, sum) => acc + sum.number, 0),
			faction: matchedModels[0].faction,
		}
	})

	const sortByModelName: ListModelsNames[] = groupByModelNames.sort((a, b) => {
		const nameA = a.name.toUpperCase()
		const nameB = b.name.toUpperCase()

		if (nameA < nameB) {
			return -1
		}

		if (nameA > nameB) {
			return 1
		}

		return 0
	})

	const sortModelsByFaction: ListModelsNames[][] = factionTypeArray.map((faction) => {
		return sortByModelName.filter((model) => model.faction === faction)
	})

	const unitHTML = sortModelsByFaction
		.filter((length) => length.length)
		.map((faction, index) => {
			return (
				<div className="w-full" key={`list-models-list-${index}`}>
					<div className="banner_background text-primary-50 clip-path-halfagon-md text-center text-xl py-1 sm:py-2">
						{faction[0].faction}
					</div>
					<div className="px-2 pt-1 text-lg">
						{faction.map((model) => {
							return (
								<div key={`${model.name}xx${model.number}`}>
									{model.name}, {model.number}
								</div>
							)
						})}
					</div>
				</div>
			)
		})

	return (
		<div
			onClick={() => setVisible(false)}
			className={`fixed left-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen min-w-[320px] max-w-[600px] overflow-auto text-backgrounds-950 ease-in-out duration-200 z-20 flex flex-col items-center gap-2  font-graduate ${!visible ? "-translate-x-full" : "-translate-x-0"}`}>
			<SideMenutitle>Click to close</SideMenutitle>
			{<h3 className="text-center font-semibold text-lg font-subrayada">{list.name}</h3>}
			{unitHTML}
			{unitHTML.length ? null : <p className="text-center">No Models</p>}
		</div>
	)
}

export default ListModelsList
