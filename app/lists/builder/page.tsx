"use client"
import { List } from "@/app/types"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"
import { listState } from "../state"
import FormationAdd from "./components/formation/FormationAdd"
import Formations from "./components/formation/Formations"
import SideMenu from "./components/SideMenu"
import ListName from "./components/ListName"
import ListHeader from "./components/ListHeader"
import ListWarnings from "../components/warnings/ListWarnings"
import ListButtons from "./components/ListButtons"

const page = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")
	const { list } = listState()

	return (
		<div className="h-screen w-full flex flex-col">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}>Builder</Crumb>
			</BreadCrumbs>
			<div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-dataslate sm:px-4 lg:rounded-xl py-4">
				<ListButtons />
				<ListHeader />
				<ListName />
				<ListWarnings />
				<FormationAdd />
				<Formations />
			</div>
			<SideMenu />
		</div>
	)
}

export default page
