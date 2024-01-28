"use client"

import WidgetBottom from "./components/WidgetBottom"
import WidgetSide from "./components/WidgetSide"
import ListBuilder from "./components/ListBuilder"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"
import { listState } from "./state"

const page = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")
	const { list } = listState()

	return (
		<div className="h-screen w-full flex flex-col">
			{/* ????? */}
			<button onClick={() => console.log(list)}>TEST</button>
			{/* ????? */}
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}>Builder</Crumb>
			</BreadCrumbs>
			<ListBuilder />
			<WidgetBottom />
			<WidgetSide />
		</div>
	)
}

export default page
