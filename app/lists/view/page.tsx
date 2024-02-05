"use client"

import { listState } from "@/app/lists/state"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { useSearchParams } from "next/navigation"
import useAuthState from "@/app/Auth"

const page = () => {
	const { list } = listState()
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")
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
				<Crumb href={`/lists/builder${listParams ? `?listId=${listParams}` : ""}`}>Builder</Crumb>
				<Crumb href={`/lists/view${listParams ? `?listId=${listParams}` : ""}`}>View</Crumb>
			</BreadCrumbs>
		</div>
	)
}

export default page
