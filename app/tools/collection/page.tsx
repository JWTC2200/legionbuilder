"use client"

import { factionTypeArray, FACTION } from "@type/types"
import CollectionFaction from "@app/tools/collection/components/CollectionFaction"
import { CollectionList, collectionState } from "@app/tools/collection/state"
import useAuthState from "@app/Auth"
import saveCollection from "@app/firebase/firestore/saveCollection"
import { toast } from "react-toastify"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import toolsAddresses from "@app/tools/addresses"
import factionColours from "@app/utils/factionColours"

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

	return (
		<div className={"font-graduate py-4 sm:pb-8 w-full text-lg sm:text-base text-secondary-200"}>
			<BreadCrumbs>
				<Crumb href={"/tools"}>Tools</Crumb>
				<ReferenceSelector addresses={toolsAddresses} />
			</BreadCrumbs>
			<div className={"flex flex-col items-center mt-4"}>
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
					<button onClick={() => console.log(collection)}>log</button>
				</div>
				<div className={"px-2"}>
					<select
						value={faction}
						onChange={(e) => setFaction(e.target.value as FACTION)}
						className={
							"w-full text-center my-4 py-1 px-2 bg-secondary-900 border-b-2 border-primary-950 text-xl font-graduate hover:text-tertiary-300 active:text-tertiary-400 " +
							factionColours(faction)
						}>
						{factionTypeArray.map((faction) => (
							<option key={`collection-selector-${faction}`} className={factionColours(faction)}>
								{faction}
							</option>
						))}
					</select>

					<CollectionFaction />
				</div>
			</div>
		</div>
	)
}

export default page
