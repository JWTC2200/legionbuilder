"use client"

import { factionTypeArray, FACTION } from "@type/types"
import CollectionFaction from "@app/collection/components/CollectionFaction"
import { CollectionList, collectionState } from "@app/collection/state"
import useAuthState from "@app/Auth"
import saveCollection from "@app/firebase/firestore/saveCollection"
import { toast } from "react-toastify"
import getCollection from "@app/firebase/firestore/getCollection"
import { useEffect } from "react"
import { BreadCrumbs, Crumb } from "@components/BreadCrumbs"

const page = () => {
	const { collection, setCollection, faction, setFaction } = collectionState()
	const userUid = useAuthState((state) => state.uid)

	const handleSave = async () => {
		if (!userUid) {
			toast.warning("You are not logged in")
		} else {
			const collectionList: CollectionList = { owner: userUid, collection: collection }
			const { uploaded, message } = await saveCollection(collectionList)
			if (uploaded) {
				toast.success(message)
			} else {
				toast.error(message)
			}
		}
	}

	const handleGet = async () => {
		if (!userUid) {
			toast.warning("You are not logged in")
		} else {
			const collections = await getCollection(userUid)
			setCollection(collections[0].collection)
		}
	}

	useEffect(() => {
		handleGet()
	}, [userUid])

	return (
		<div className={"font-graduate"}>
			<BreadCrumbs>
				<Crumb href={"collection"}>Collection</Crumb>
			</BreadCrumbs>

			<div className={"flex justify-center flex-wrap sm:gap-8 gap-4"}>
				<button
					onClick={() => setCollection([])}
					className={
						"builder_title_background rounded-full py-1 px-4 hover:text-primary-100 active:text-primary-100 hover:border-2 border-backgrounds-950 hover:border-primary-100 active:border-primary-100"
					}>
					Reset collection
				</button>
				<button
					onClick={() => handleSave()}
					className={
						"builder_title_background rounded-full py-1 px-4 hover:text-primary-100 active:text-primary-100 border-2 border-backgrounds-950 hover:border-primary-100 active:border-primary-100"
					}>
					Save collection
				</button>
			</div>
			<select
				value={faction}
				onChange={(e) => setFaction(e.target.value as FACTION)}
				className={
					"w-full text-center my-4 py-1 px-2 bg-secondary-900 border-primary-950 text-xl font-graduate text-secondary-300 hover:text-tertiary-300 active:text-tertiary-400"
				}>
				{factionTypeArray.map((faction) => (
					<option key={`collection-selector-${faction}`}>{faction}</option>
				))}
			</select>

			<CollectionFaction />
		</div>
	)
}

export default page
