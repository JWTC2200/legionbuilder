import React from "react"
import { unitData } from "@data/unit_data"
import CollectionInput from "@app/tools/collection/components/CollectionInput"
import { sortUnitDatasheets } from "@app/utils/sorting"
import { collectionState } from "@app/tools/collection/state"

const CollectionFaction = () => {
	const { faction } = collectionState()
	const filteredUnits = unitData.filter((unit) => !unit.unique)

	return (
		<ol className={""}>
			{sortUnitDatasheets(filteredUnits)
				.filter((unit) => unit.faction === faction)
				.map((match) => (
					<CollectionInput unit={match} key={`collection-unit-${match.id}`} />
				))}
		</ol>
	)
}

export default CollectionFaction
