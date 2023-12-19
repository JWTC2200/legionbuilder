"use client"

import { BUILDER_LIST } from "@/app/types"
import React from "react"
import Link from "next/link"
import { listState } from "../builder/state"
import ListCopyButton from "./ListCopyButton"
import ListDeleteButton from "./ListDeleteButton"
import { listPointTotals } from "../utils"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import ListDuplicateButton from "./ListDuplicateButton"

const UserListEntry = ({ list }: { list: BUILDER_LIST }) => {
	const { setList } = listState()
	const { armyTotalPoints } = listPointTotals(list)

	return (
		<div className="flex flex-col odd:bg-stone-100 even:bg-stone-300 text-stone-950 py-1 group">
			<div className="flex gap-2 justify-between items-center font-graduate font-bold uppercase border-b group-odd:border-stone-400 group-even:border-stone-500 px-4 py-1 overflow-hidden">
				<Link href="/lists/builder" onClick={() => setList(list)} className="hover:text-tertiary-700 active:text-tertiary-700">
					<h3 className="">{list.list_name}</h3>
				</Link>
				<div className="flex items-center gap-2">
					<ListDuplicateButton list={list} />
					<Link href={`/lists/view?listId=${list.list_id}`} className="hover:text-tertiary-700">
						<FaEye />
					</Link>
					<ListCopyButton list={list} />
					<ListDeleteButton list={list} />
				</div>
			</div>

			<div className="flex border-b group-odd:border-stone-300 group-even:border-stone-400 last:border-0 py-1 group/profile">
				<div className="basis-[40%] pl-4">{list.main_faction}</div>
				<div className="basis-[30%] text-end">
					{armyTotalPoints}/{list.points} pts
				</div>
				<div className="basis-[30%] text-center">
					{list.formations.length} formation
					{list.formations.length === 1 ? null : "s"}
				</div>
			</div>
		</div>
	)
}

export default UserListEntry
