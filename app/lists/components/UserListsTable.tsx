import React from "react"
import { userListsState, listState } from "@/app/lists/state"

import Link from "next/link"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import { totalListPoints } from "../builder/utils"
import DuplicateList from "../builder/components/DuplicateList"
import DeleteList from "../builder/components/DeleteList"
import ListClipLink from "../builder/components/ListClipLink"

const UserListsTable = () => {
	const { userLists } = userListsState()
	const { setList } = listState()

	const currentUrl = window.location.href

	return (
		<section className="h-full w-full dataslate_background flex flex-col">
			{userLists.map((entry) => {
				const { list } = entry
				return (
					<div
						key={list.id}
						className="flex flex-col odd:bg-stone-100 even:bg-stone-300 text-stone-950 py-1 group">
						<div className="flex gap-2 justify-between items-center font-graduate font-bold uppercase border-b group-odd:border-stone-400 group-even:border-stone-500 px-4 py-1 overflow-hidden">
							<Link
								href="/lists/builder"
								onClick={() => setList(list)}
								className="hover:text-tertiary-700 active:text-tertiary-700">
								<h3 className="">{list.name}</h3>
							</Link>
							<Link
								href={`/lists/play?listId=${list.id}`}
								onClick={() => setList(list)}
								className="hover:text-tertiary-700 active:text-tertiary-700">
								Play
							</Link>
							<div className="flex items-center gap-2">
								<DuplicateList list={list} />
								<Link href={`${currentUrl}/view?listId=${list.id}`} className="hover:text-tertiary-700">
									<FaEye />
								</Link>
								<ListClipLink list={list} />
								<DeleteList list={list} />
							</div>
						</div>

						<div className="flex border-b group-odd:border-stone-300 group-even:border-stone-400 last:border-0 py-1 group/profile">
							<div className="basis-[40%] pl-4">{list.faction}</div>
							<div className="basis-[30%] text-end">
								{totalListPoints(list).totalPoints}/{list.points} pts
							</div>
							<div className="basis-[30%] text-center">
								{list.formations.length} formation
								{list.formations.length === 1 ? null : "s"}
							</div>
						</div>
					</div>
				)
			})}
		</section>
	)
}

export default UserListsTable
