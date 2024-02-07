"use client"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"
import FormationAdd from "./components/formation/FormationAdd"
import Formations from "./components/formation/Formations"
import SideMenu from "./components/SideMenu"
import ListName from "./components/ListName"
import ListHeader from "./components/ListHeader"
import ListWarnings from "./components/warnings/ListWarnings"
import ListButtons from "./components/ListButtons"

const page = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")

	return (
		<div className="w-full flex flex-col pb-12">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}>Builder</Crumb>
			</BreadCrumbs>
			<div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-secondary-900 text-primary-50 sm:px-4 lg:rounded-xl py-4">
				<ListButtons />
				<ListWarnings />
				<ListHeader />
				<ListName />
				<FormationAdd />
				<Formations />
			</div>
			<SideMenu />
		</div>
	)
}

export default page
