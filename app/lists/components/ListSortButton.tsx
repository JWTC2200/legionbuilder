"use client"

import React, { ReactNode, useState } from "react"
import Icons from "@/app/components/Icons"
import { userListsState } from "../state"
import { DB_ENTRY } from "@/app/types"

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
		const sorted: DB_ENTRY[] = [...userLists].sort((a, b) => {
			const fieldA = a[sortBy].toString().toLowerCase()
			const fieldB = b[sortBy].toString().toLowerCase()

			if (fieldA < fieldB) {
				return -1
			}
			if (fieldA > fieldB) {
				return 1
			}
			return 0
		})
		setReverse((prev) => !prev)

		if (reverse) {
			setUserLists(sorted.reverse())
		} else {
			setUserLists(sorted)
		}
	}

	return (
		<button onClick={sortUserLists} className={"hover:text-primary-400 active:text-primary-400 " + className}>
			{children} <Icon />
		</button>
	)
}

export default ListSortButton
