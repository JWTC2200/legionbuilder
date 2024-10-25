"use client"

import { factionTypeArray } from "@type/types"
import CollectionFaction from "@app/collection/components/CollectionFaction"
import { collectionState } from "@app/collection/state"

const page = () => {
	const { setCollection } = collectionState()

	return (
		<div className={"font-graduate"}>
			<div>Collection</div>
			<button onClick={() => setCollection([])}>Reset collection</button>
			<form className={`flex flex-wrap gap-2 sm:gap-4`}>
				{factionTypeArray.map((faction) => (
					<CollectionFaction faction={faction} key={`collection-${faction}`} />
				))}
			</form>
		</div>
	)
}

export default page
