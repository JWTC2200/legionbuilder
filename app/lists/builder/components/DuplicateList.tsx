"use client"

import { useRouter } from "next/navigation"
import { List } from "@/app/types"
import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import { listState } from "@/app/lists/state"
import { nanoid } from "nanoid"

const DuplicateList = ({ list }: { list: List }) => {
	const router = useRouter()
	const { setList } = listState()

	const handleDuplicateList = () => {
		setList({ ...list, name: `(copy) ${list.name}`, id: nanoid() })
		router.push("/lists/builder")
	}

	return (
		<button
			type="button"
			onClick={handleDuplicateList}
			className="flex flex-col justify-center items-center text-lg hover:text-tertiary-700">
			<FaCopy />
		</button>
	)
}

export default DuplicateList
