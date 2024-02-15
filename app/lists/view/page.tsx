"use client"

import { listState } from "@/app/lists/state"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import useAuthState from "@/app/Auth"
import { totalListPoints } from "../builder/utils"
import Formation from "./components/Formation"
import SaveListBtn from "../builder/components/SaveListBtn"
import DataslateSideWidget from "../builder/components/DataslateSideWidget"

const page = () => {
	const { list } = listState()
	const userUid = useAuthState((state) => state.uid)

	if (!list) {
		return (
			<div className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
				<h2>No list found</h2>
			</div>
		)
	}

	return (
		<div className="w-full px-2 pb-8 max-w-screen-sm">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href="/lists/builder">Builder</Crumb>
				<Crumb href="/lists/view">View</Crumb>
			</BreadCrumbs>
			{userUid && userUid !== list.user ? (
				<SaveListBtn className="text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate my-4">
					Save copy of list
				</SaveListBtn>
			) : null}
			<div className="text-primary-50">
				<h2 className="text-lg font-bold">
					<span className="font-subrayada text-xl">{list.name}</span>
					{` ${totalListPoints(list).totalPoints} / ${list.points}pts`}
				</h2>
				<h3 className="font-graduate">
					{list.allegiance} {list.faction}
				</h3>
				<h3 className="font-graduate">{`Formations ${list.formations.filter((formation) => formation.name).length}`}</h3>
				{list.formations.map((formation) => {
					if (formation.name) {
						return <Formation key={formation.id} list={list} formation={formation} />
					}
					return null
				})}
			</div>
			<DataslateSideWidget />
		</div>
	)
}

export default page
