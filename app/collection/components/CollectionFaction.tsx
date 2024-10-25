import React from "react"
import { FACTION, UNIT_DATASHEET, UNIT_TYPE } from "@type/types"
import { unitData } from "@data/unit_data"
import CollectionInput from "@app/collection/components/CollectionInput"
import { sortUnitDatasheets } from "@app/utils/sorting"

interface properties {
	faction: FACTION
}

const CollectionFaction = ({ faction }: properties) => {
	const filteredUnits = unitData.filter((unit) => !unit.unique)

	return (
		<div>
			<div className={"text-center mt-3 text-xl underline"}>{faction}</div>
			<ol>
				{sortUnitDatasheets(filteredUnits)
					.filter((unit) => unit.faction === faction)
					.map((match) => (
						<CollectionInput unit={match} key={`collection-unit-${match.id}`} />
					))}
			</ol>
		</div>
	)
}

export default CollectionFaction
