import React, { useState } from "react"
import { BUILDER_LIST } from "@/app/types"
import { deleteList } from "@/app/firebase/firestore/deleteList"
import { ImBin } from "@react-icons/all-files/im/ImBin"
import useAuthState from "@/app/Auth"
import { toast } from "react-toastify"

const ListDeleteButton = ({ list }: { list: BUILDER_LIST }) => {
	const [confirmDelete, setConfirmDelete] = useState(false)
	const userUid = useAuthState((state) => state.uid)

	const handleDelete = async () => {
		console.log(userUid)
		if (userUid === list.user_id) {
			deleteList(list.list_id)
			toast.warning("deleting list")
		} else {
			toast.warning("You do not have permission to delete this list")
		}
	}

	return (
		<>
			<button onClick={() => setConfirmDelete(true)} className="flex flex-col justify-center items-center text-lg hover:text-red-700">
				<ImBin className="" />
			</button>
			{confirmDelete ? (
				<div
					onClick={() => {
						setConfirmDelete(false)
					}}
					className="fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 banner_background flex flex-col gap-4 py-8 px-4 rounded-xl text-center text-backgrounds-50">
					<p>Do you want to delete {list.list_name}?</p>
					<button onClick={() => setConfirmDelete(false)} className="text-primary-400 hover:text-primary-100 border-t border-b border-primary-400 py-4">
						Cancel
					</button>
					<button onClick={handleDelete} className="text-red-500 hover:text-red-100 border-t border-b border-red-500 py-4">
						Delete
					</button>
				</div>
			) : null}
		</>
	)
}

export default ListDeleteButton
