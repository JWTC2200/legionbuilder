"use client"

import React from "react"
import { UNIT_DATASHEET } from "@type/types"
import { collectionState } from "@app/collection/state"

interface properties {
	unit: UNIT_DATASHEET
}

const CollectionInput = ({ unit }: properties) => {
	const { collection, setCollection } = collectionState()

	const updateCollection = (value: number): void => {
		if (collection.find((item) => item.id === unit.id)) {
			const update = collection.map((item) => {
				if (item.id === unit.id) return { ...item, number: value }
				return item
			})
			setCollection(update)
		} else setCollection([...collection, { name: unit.name, id: unit.id, number: value }])
	}

	const inputValue = collection.find((item) => item.id === unit.id)

	return (
		<li className={"grid grid-cols-5 gap-4 p-1"}>
			<div className={"col-span-4"}>{unit.name}</div>
			<input
				type={"number"}
				className={
					"col-span-1 text-white font-graduate bg-backgrounds-950 text-right max-w-[50px] px-2 rounded"
				}
				value={inputValue ? Number(inputValue.number).toString() : 0}
				onChange={(e) => updateCollection(Number(e.target.value))}
			/>
		</li>
	)
}

export default CollectionInput
