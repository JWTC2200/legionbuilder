"use client"

import { useEffect } from "react"
import { userListsState, listState } from "./state"
import Link from "next/link"
import useAuthState from "../Auth"
import getUserLists from "../firebase/firestore/getUserLists"

const page = () => {
	const userUid = useAuthState((state) => state.uid)
	const { userLists, setUserLists } = userListsState()
	const { clearList } = listState()

	useEffect(() => {
		if (userUid) {
			getUserLists(setUserLists, userUid)
		}
	}, [userUid])

	return (
		<div className="flex flex-col items-center max-w-2xl w-full">
			<Link
				href="/lists/builder"
				className="px-8 py-2 banner_background font-graduate text-lg text-center sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-primary-100 active:text-primary-100 hover:border-primary-100 active:border-primary-100"
				onClick={clearList}>
				Create List
			</Link>
		</div>
	)
}

export default page
