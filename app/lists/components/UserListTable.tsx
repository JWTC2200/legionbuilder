import React from "react"
import UserListEntry from "./UserListEntry"
import { userListsState } from "../state"

function UserListTable() {
	const { userLists } = userListsState()
	return (
		<section className="h-full w-full dataslate_background flex flex-col">
			{userLists.map((entry) => (
				<UserListEntry key={entry.list.list_id} list={entry.list} />
			))}
		</section>
	)
}

export default UserListTable
