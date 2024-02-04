"use client"

import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"
import { listState, listSidebar } from "../state"
import FormationAdd from "./components/FormationAdd"
import Formations from "./components/Formations"
import SideMenu from "./components/SideMenu"

const page = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")
	const { list } = listState()
	const { visible } = listSidebar()

	const ids = list.formations.map((form) => form.id)

	return (
		<div className="h-screen w-full flex flex-col">
			{/* ????? */}
			<button onClick={() => console.log(list)}>TEST</button>
			{/* ????? */}
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}>Builder</Crumb>
			</BreadCrumbs>
			<div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-dataslate pb-20 sm:px-4 lg:rounded-xl">
				<FormationAdd />
				<Formations />
			</div>
			{/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
			<SideMenu />
		</div>
	)
}

export default page
