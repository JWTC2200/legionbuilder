import React from "react"
import { userListsState, listState, listModelState } from "@/app/lists/state"
import Link from "next/link"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import { FaListAlt } from "@react-icons/all-files/fa/FaListAlt"
import { totalListPoints } from "../builder/utils"
import DuplicateList from "../builder/components/DuplicateList"
import DeleteList from "../builder/components/DeleteList"
import ListClipLink from "../builder/components/ListClipLink"
import { List } from "@type/listTypes"

const UserListsTable = () => {
	const { userLists } = userListsState()
	const { list, setList } = listState()
	const { visible, setVisible } = listModelState()

	const currentUrl = window.location.href

	const handleListModels = (modelList: List): void => {
		if (modelList.id === list.id) {
			setVisible(!visible)
		} else {
			setVisible(true)
		}
		setList(modelList)
	}

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
								className="hover:text-tertiary-700 active:text-tertiary-700 overflow-auto">
								<h3 className="">{`${list.name} (${list.gamemode ? list.gamemode : "standard"})`}</h3>
							</Link>
							<div className="flex items-center gap-2 text-xl">
								<button onClick={() => handleListModels(list)} className="hover:text-tertiary-700">
									<FaListAlt />
								</button>
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
