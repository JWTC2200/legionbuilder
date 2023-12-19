"use client"

import React, { useEffect } from "react"
import { userListsState } from "./state"
import NotSignedIn from "./components/NotSignedIn"
import UserListTable from "./components/UserListTable"
import useAuthState from "../Auth"
import CreateListButtons from "./components/CreateListButtons"
import ListButtonInfo from "./components/ListButtonInfo"
import ListSortButton from "./components/ListSortButton"
import getUserLists from "../firebase/firestore/getUserLists"

const page = () => {
	const userUid = useAuthState((state) => state.uid)
	const { userLists, setUserLists } = userListsState()

	useEffect(() => {
		if (userUid) {
			getUserLists(setUserLists, userUid)
		}
	}, [userUid])

	return (
		<div className="flex flex-col items-center max-w-2xl w-full">
			<CreateListButtons className="flex m-4 gap-4 justify-center items-center" />
			{userLists.length && userUid ? (
				<>
					<ListButtonInfo />
					<header className="w-full flex flex-col bg-backgrounds-950 font-bold">
						<div className="w-full flex justify-between items-center gap-1 border-b border-primary-600 px-4 py-1">
							<ListSortButton sortBy="name" className="flex justify-start items-center gap-1">
								Lists
							</ListSortButton>
							<ListSortButton sortBy="created" className="flex justify-end items-center gap-1">
								Created
							</ListSortButton>
						</div>
						<div className="flex px-4 py-1 text-sm">
							<ListSortButton sortBy="main_faction" className="basis-[40%] flex items-center gap-1">
								Faction
							</ListSortButton>
							<ListSortButton sortBy="game_size" className="basis-[30%] flex items-center justify-end gap-1">
								Points
							</ListSortButton>
							<ListSortButton sortBy="formations" className="basis-[30%] flex items-center justify-end gap-1">
								Formations
							</ListSortButton>
						</div>
					</header>

					<UserListTable />
				</>
			) : (
				<h2 className="font-graduate text-xl">{userUid ? "You have no saved lists!" : <NotSignedIn />}</h2>
			)}
		</div>
	)
}

export default page
