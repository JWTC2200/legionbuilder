import { detachmentData } from "@/app/data/detachment_data"
import { listState } from "@/app/lists/state"
import { createLoadout, currentDetachmentSize, incrementLoadout, loadoutCount } from "./utils"
import { FormEvent } from "react"
import LoadoutEntries from "./LoadoutEntries"
import LoadoutCountWarning from "../warnings/LoadoutCountWarning"
import SideMenutitle from "../SideMenutitle"
import { toast } from "react-toastify"

interface properties {
	slot_id: string | null
}
const Loadouts = ({ slot_id }: properties) => {
	if (!slot_id) {
		return
	}

	const { list, setList } = listState()

	const loadoutSlot = list.loadouts.find((slot) => slot.slot_id === slot_id)

	if (!loadoutSlot) {
		return <SideMenutitle>Could not find any loadout options</SideMenutitle>
	}
	if (!loadoutSlot.id) {
		return <SideMenutitle>No unit selected</SideMenutitle>
	}

	const detachmentInfo = detachmentData.find((detachment) => detachment.id === loadoutSlot.id)

	if (!detachmentInfo) {
		return <SideMenutitle>Could not find loadout data</SideMenutitle>
	}

	const { loadout_options } = detachmentInfo
	const selectMenus = loadout_options.map((loadout, index) => {
		return (
			<div key={loadoutSlot.id + "menuSelect" + index}>
				<label htmlFor={loadout.location} className="font-graduate self-center">
					{loadout.location}:
				</label>
				<select
					name={loadout.location}
					id={loadout.location}
					className="w-full text-center text-sm font-graduate p-1 rounded-full border border-primary-950 hover:text-tertiary-700 active:text-tertiary-700 overflow-auto text-black">
					{loadout.options.map((option, index2) => {
						const optionCost =
							list.gamemode === "titandeath"
								? option.cost + (option.td_ek ? option.td_ek : 0)
								: option.cost
						return (
							<option
								key={loadoutSlot.id + "menuSelect" + index + "option" + index2}
								className="text-black"
								value={option.name}>{`${option.name} ${optionCost ? optionCost + "pts" : ""}`}</option>
						)
					})}
				</select>
			</div>
		)
	})

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		let array: { location: string; weapon: FormDataEntryValue }[] = []
		formData.forEach((value, key) => {
			array.push({ location: key, weapon: value })
		})

		const newId = array
			.map((entry) =>
				String(entry.weapon + entry.location)
					.replaceAll(" ", "")
					.trim()
			)
			.sort()
			.join("")

		const loadoutExists = loadoutSlot.loadouts.find((loadout) => loadout.id === newId)

		if (loadoutExists) {
			const newList = incrementLoadout(list, loadoutSlot, newId)
			setList(newList)
		} else {
			const newList = createLoadout(list, array, loadoutSlot, detachmentInfo, newId)
			setList(newList)
		}
	}

	return (
		<>
			<SideMenutitle>{detachmentInfo.name}</SideMenutitle>
			<form className="flex flex-col gap-1" onSubmit={handleSubmit}>
				{selectMenus}
				{selectMenus.length ? (
					<button type="submit" className="mt-3">
						<SideMenutitle>Add</SideMenutitle>
					</button>
				) : (
					<SideMenutitle>No loadout options</SideMenutitle>
				)}
			</form>
			<LoadoutCountWarning slot_id={loadoutSlot.slot_id} />
			<LoadoutEntries loadoutSlot={loadoutSlot} />
		</>
	)
}

export default Loadouts
