import React from "react"
import { listState } from "../state"
import ListBuilderFormation from "./ListBuilderFormation"

const ListBuilderFormationDisplay = () => {
	const { list } = listState()

	const html = list.formations.length ? (
		<div className="pb-4 flex flex-col gap-4">
			{list.formations.map((formation) => (
				<ListBuilderFormation key={formation.ref_id} formation={formation} />
			))}
		</div>
	) : null

	return <div className="w-full">{html}</div>
}

export default ListBuilderFormationDisplay
