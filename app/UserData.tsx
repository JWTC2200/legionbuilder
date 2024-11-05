"use client"

import React, { ReactNode, useEffect } from "react"
import getCollection from "@app/firebase/firestore/getCollection"
import useAuthState from "@app/Auth"
import { collectionState } from "@app/tools/collection/state"
import { List } from "@type/listTypes"
import { getList } from "@app/firebase/firestore/getList"
import { toast } from "react-toastify"
import { listState } from "@lists/state"
import { useSearchParams } from "next/navigation"

const UserData = ({ children }: { children: ReactNode }) => {
	const { setList } = listState()
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")

	const userUid = useAuthState((state) => state.uid)
	const { setCollection } = collectionState()

	// fetch user lists
	useEffect(() => {
		const getDbList = async (id: string) => {
			const data: List = await getList(id)
			if (data) {
				setList(data)
			} else {
				toast.error("Could not find linked list")
			}
		}
		if (listParams) {
			getDbList(listParams)
		}
	}, [listParams])

	// fetch user collection
	useEffect(() => {
		const handleCollections = async () => {
			const collections = await getCollection(userUid)
			if (collections.length) setCollection(collections[0].collection)
		}
		handleCollections()
	}, [userUid])

	return <>{children}</>
}

export default UserData
