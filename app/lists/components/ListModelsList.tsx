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
				return { name: unitInfo.name, number: entry.number, faction: unitInfo.faction }
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
		.map((faction) => {
			return (
				<div>
					<div className="banner_background text-primary-50 clip-path-halfagon-md text-center">
						{faction[0].faction}
					</div>
					<div className="px-2">
						{faction.map((model) => {
							return (
								<div>
									{model.name}, {model.number}
								</div>
							)
						})}
					</div>
				</div>
			)
		})

	return (
		visible && (
			<div
				onClick={() => setVisible(false)}
				className={
					"fixed bg-dataslate clip-path-halfagon-lg mt-32 min-w-[320px] p-2 sm:p-4 top-0 left-1/2 -translate-x-1/2 text-backgrounds-900 font-graduate overflow-auto z-50 flex flex-col gap-2"
				}>
				<SideMenutitle>Click to close</SideMenutitle>
				{<h3 className="text-center font-semibold text-lg">{list.name}</h3>}
				{unitHTML}
				{unitHTML.length ? null : <p className="text-center">No Models</p>}
			</div>
		)
	)
}

export default ListModelsList
