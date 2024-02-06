import { ListLoadouts } from "@type/listTypes"
import { listState } from "@/app/lists/state"
import { loadoutPoints, incrementLoadout } from "./utils"

interface properties {
	loadoutSlot: ListLoadouts
}

const LoadoutEntries = ({ loadoutSlot }: properties) => {
	const { list, setList } = listState()
	const { id, slot_id, loadouts } = loadoutSlot

	const handleIncrement = (id: string) => {
		setList(incrementLoadout(list, loadoutSlot, id))
	}

	const handleRemove = (id: string) => {
		setList(incrementLoadout(list, loadoutSlot, id, -1))
	}

	return (
		<div className="flex flex-col gap-1">
			{loadouts.map((loadout, index) => {
				const points = loadoutPoints(loadout)
				return (
					<div
						key={slot_id + "sidemenuloadout" + index}
						className="bg-secondary-800 text-primary-50 font-graduate py-1 px-4 clip-path-halfagon-lg flex flex-col">
						<div className="flex justify-between font-semibold text-lg sm:text-xl">
							<div>x{loadout.number}</div>
							{points ? <div>{points * loadout.number}pts</div> : null}
						</div>
						{loadout.weapons.map((weaponEntry, index2) => {
							const { location, weapon, cost } = weaponEntry
							return (
								<div key={slot_id + "sidemenuloadout" + index + "weapon" + index2} className="text-sm">
									{location}: {weapon}
									{cost ? ", " + cost + "pts" : null}
								</div>
							)
						})}
						<div className="grid grid-cols-2 gap-2">
							<button
								className="self-end my-1 px-2 clip-path-halfagon-md bg-primary-800 hover:bg-primary-700 active:bg-primary-600"
								onClick={() => handleIncrement(loadout.id)}>
								+
							</button>
							<button
								className="self-end my-1 px-2 clip-path-halfagon-md bg-red-800 hover:bg-red-700 active:bg-red-600"
								onClick={() => handleRemove(loadout.id)}>
								-
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default LoadoutEntries
