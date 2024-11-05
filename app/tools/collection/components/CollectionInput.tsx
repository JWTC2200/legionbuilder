"use client"

import React from "react"
import { UNIT_DATASHEET } from "@type/types"
import { collectionState } from "@app/tools/collection/state"
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"
import { ImBin } from "@react-icons/all-files/im/ImBin"

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
		<li className={"group grid grid-cols-5 gap-4 py-1 px-3 items-center odd:bg-backgrounds-950"}>
			<div className={"col-span-3 group-hover:text-tertiary-500 "}>{unit.name}</div>
			<div className={"col-span-2 justify-center items-center grid grid-cols-5 gap-4"}>
				<span className={"col-span-2 text-center"}>{inputValue ? inputValue.number : 0}</span>
				<FaArrowAltCircleUp
					className={
						"col-span-1 text-primary-500 hover:text-tertiary-500 active:text-tertiary-300 text-xl cursor-pointer"
					}
					onClick={() => updateCollection(inputValue ? inputValue.number + 1 : 1)}
				/>
				<FaArrowAltCircleDown
					className={
						"col-span-1 text-red-700 hover:text-tertiary-500 active:text-tertiary-300 text-xl cursor-pointer"
					}
					onClick={() => updateCollection(inputValue && inputValue.number > 0 ? inputValue.number - 1 : 0)}
				/>
				<ImBin
					className={
						"col-span-1 text-secondary-600 hover:text-tertiary-500 active:text-tertiary-300 text-xl cursor-pointer"
					}
					onClick={() => updateCollection(inputValue ? 0 : 0)}
				/>
			</div>
		</li>
	)
}

export default CollectionInput
