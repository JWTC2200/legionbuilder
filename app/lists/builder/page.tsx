"use client"

import React from "react"
import WidgetBottom from "./components/WidgetBottom"
import WidgetSide from "./components/WidgetSide"
import ListBuilder from "./components/ListBuilder"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"

const page = () => {
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")

	return (
		<div className="h-screen w-full flex flex-col">
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
