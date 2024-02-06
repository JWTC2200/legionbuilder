"use client"

import { useEffect } from "react"
import { userListsState } from "@lists/state"
import useAuthState from "@app/Auth"
import getUserLists from "@app/firebase/firestore/getUserLists"
import NotSignedIn from "@components/NotSignedIn"
import CreateListBtn from "@lists/components/CreateListBtn"
import ListButtonInfo from "@lists/components/ListBtnInfo"
import ListSortButton from "@lists/components/ListSortButton"
import UserListsTable from "@lists/components/UserListsTable"

const page = () => {
	const userUid = useAuthState((state) => state.uid)
	const { userLists, setUserLists } = userListsState()

	useEffect(() => {
		if (userUid) {
			getUserLists(setUserLists, userUid)
		}
	}, [userUid])

	if (!userUid) {
		return (
			<div className="flex flex-col items-center max-w-2xl w-full gap-4 p-4">
				<CreateListBtn />
				<NotSignedIn />
			</div>
		)
	}

	return (
		<div className="flex flex-col items-center max-w-2xl w-full gap-4 p-4">
			<CreateListBtn />
			{userLists.length ? (
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
							<ListSortButton
								sortBy="game_size"
								className="basis-[30%] flex items-center justify-end gap-1">
								Points
							</ListSortButton>
							<ListSortButton
								sortBy="formations"
								className="basis-[30%] flex items-center justify-end gap-1">
								Formations
							</ListSortButton>
						</div>
					</header>
					<UserListsTable />
				</>
			) : (
				<div>no lists</div>
			)}
		</div>
	)
}

export default page
