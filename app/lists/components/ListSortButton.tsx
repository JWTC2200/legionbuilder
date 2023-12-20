"use client"

import React, { ReactNode, useState } from "react"
import Icons from "@/app/components/Icons"
import { userListsState } from "../state"
import { DB_ENTRY } from "@/app/types"
import { listPointTotals } from "../utils"

interface properties {
	className: string
	children: ReactNode
	sortBy: "formations" | "game_size" | "main_faction" | "name" | "created"
}

const ListSortButton = ({ children, className, sortBy }: properties) => {
	const Icon = Icons["exchange"]
	const { userLists, setUserLists } = userListsState()
	const [reverse, setReverse] = useState<boolean>(false)

	const sortUserLists = () => {
		let sorted: DB_ENTRY[] = []
		setReverse((prev) => !prev)
		if (sortBy === "game_size") {
			sorted = sortUsedPoints([...userLists]).sort((a, b) => {
				return a.game_size - b.game_size
			})
		} else if (sortBy === "formations") {
			sorted = [...userLists].sort((a, b) => {
				return a[sortBy] - b[sortBy]
			})
		} else if (sortBy === "main_faction" || sortBy === "name") {
			sorted = [...userLists].sort((a, b) => {
				const stringA = a[sortBy].toLowerCase()
				const stringB = b[sortBy].toLowerCase()

				if (stringA < stringB) {
					return -1
				}
				if (stringA > stringB) {
					return 1
				}
				return 0
			})
		} else if (sortBy === "created") {
			sorted = [...userLists].sort((a, b) => {
				return Number(a[sortBy]) - Number(b[sortBy])
			})
		}

		if (reverse) {
			setUserLists(sorted.reverse())
		} else {
			setUserLists(sorted)
		}
	}

	const sortUsedPoints = (array: DB_ENTRY[]) => {
		const sorted: DB_ENTRY[] = array.sort((a, b) => {
			return listPointTotals(a.list).armyTotalPoints - listPointTotals(b.list).armyTotalPoints
		})
		return sorted
	}

	return (
		<button onClick={sortUserLists} className={"hover:text-primary-400 active:text-primary-400 " + className}>
			{children} <Icon />
		</button>
	)
}

export default ListSortButton
