"use client"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import FormationAdd from "./components/formation/FormationAdd"
import Formations from "./components/formation/Formations"
import SideWidget from "./components/SideWidget"
import ListName from "./components/ListName"
import ListHeader from "./components/ListHeader"
import ListWarnings from "./components/warnings/ListWarnings"
import ListButtons from "./components/ListButtons"
import ListInfo from "./components/ListInfo"
import DataslateSideWidget from "./components/DataslateSideWidget"
import BottomWidget from "./components/BottomWidget"

const page = () => {
	return (
		<div className="w-full flex flex-col pb-24">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href="/lists/builder">Builder</Crumb>
			</BreadCrumbs>
			<div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-secondary-900 text-primary-50 sm:px-4 lg:rounded-xl">
				<ListButtons />
				<ListWarnings />
				<ListName />
				<ListHeader />
				<ListInfo />
				<FormationAdd />
				<Formations />
			</div>
			<SideWidget />
			<DataslateSideWidget />
			<BottomWidget />
		</div>
	)
}

export default page
