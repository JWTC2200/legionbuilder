"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { BUILDER_LIST } from "@/app/types"
import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import { listState } from "../builder/state"
import { nanoid } from "nanoid"

const ListDuplicateButton = ({ list }: { list: BUILDER_LIST }) => {
	const router = useRouter()
	const { setList } = listState()

	const handleDuplicateList = () => {
		setList({ ...list, list_name: `(copy) ${list.list_name}`, list_id: nanoid() })
		router.push("/lists/builder")
	}

	return (
		<button type="button" onClick={handleDuplicateList} className="flex flex-col justify-center items-center text-lg hover:text-tertiary-700">
			<FaCopy />
		</button>
	)
}

export default ListDuplicateButton
