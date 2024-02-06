"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { deleteUserAccount } from "../firebase/firestore/deleteUser"
import useAuthState from "../Auth"
import { getAuth } from "firebase/auth"
import Main from "@components/Main"

const page = () => {
	const userUid = useAuthState((state) => state.uid)
	const router = useRouter()
	const currentUser = getAuth().currentUser

	const handleDelete = () => {
		deleteUserAccount()
	}

	useEffect(() => {
		if (!userUid) {
			router.push("/")
		}
	}, [userUid])

	return (
		<Main className="flex flex-col items-center">
			<h2>{currentUser?.email}</h2>
			<button
				onClick={handleDelete}
				className="mt-4 px-4 py-2 text-2xl hover:text-tertiary-700 active:text-tertiary-700 text-bold border-4 rounded-full">
				Delete account
			</button>
		</Main>
	)
}

export default page
