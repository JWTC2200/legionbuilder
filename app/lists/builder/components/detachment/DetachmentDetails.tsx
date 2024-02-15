import { ListDetachmentSlot } from "@type/listTypes"
import { listState } from "@/app/lists/state"
import { findLoadoutBySlotId, findUpgradeBySlotId } from "@/app/lists/builder/utils"
import { incrementLoadout, loadoutPoints } from "@/app/lists/builder/components/detachment/utils"

interface properties {
	detachmentSlot: ListDetachmentSlot
}

const DetachmentDetails = ({ detachmentSlot }: properties) => {
	const { list, setList } = listState()
	const upgrades = findUpgradeBySlotId(list, detachmentSlot.id)
	const loadouts = findLoadoutBySlotId(list, detachmentSlot.id)

	const handleRemoveUpgrade = (upgradeName: string) => {
		const newUpgradeSlot = {
			...upgrades!,
			upgrades: [...upgrades!.upgrades.filter((upgrade) => upgrade.name !== upgradeName)],
		}
		setList({
			...list,
			upgrades: [...list.upgrades.filter((upgrade) => upgrade.slot_id !== detachmentSlot.id), newUpgradeSlot],
		})
	}

	const handleIncrement = (id: string) => {
		setList(incrementLoadout(list, loadouts!, id))
	}

	const handleRemove = (id: string) => {
		setList(incrementLoadout(list, loadouts!, id, -1))
	}

	return (
		<div className="flex flex-col px-1">
			{upgrades?.upgrades.length ? (
				<div className="flex flex-col gap-1 text-primary-50 font-graduate mt-1">
					{upgrades.upgrades.map((upgrade, index) => {
						const { number, name, cost } = upgrade
						return (
							<div
								key={detachmentSlot.id + "updetail" + index}
								className="flex bg-secondary-700 clip-path-octagon-md py-1 px-2 justify-between w-full">
								<div>{`${number} ${name}: ${cost}pts`}</div>
								<button
									onClick={() => handleRemoveUpgrade(name)}
									className="self-end px-2 clip-path-halfagon-md bg-red-800 hover:bg-red-700 active:bg-red-600">
									X
								</button>
							</div>
						)
					})}
				</div>
			) : null}
			{loadouts?.loadouts.length ? (
				<div className="flex flex-col gap-1 text-primary-50 font-graduate mt-1">
					{loadouts.loadouts.map((loadout, index) => {
						const { number, weapons } = loadout
						const points = loadoutPoints(loadout)
						return (
							<div
								key={detachmentSlot.id + "lddetail" + index}
								className="flex gap-1 sm:gap-2 justify-between items-center bg-secondary-700 clip-path-octagon-md py-1 px-2">
								<div className="flex flex-col justify-between font-semibold ">
									<div className="flex justify-center items-center text-primary-50 px-2 ">{`x${number}`}</div>
									{points ? <div>{points * loadout.number}pts</div> : null}
								</div>

								<div className="">
									{weapons.map((weapons) => {
										const { location, weapon, cost } = weapons
										return (
											<div key={detachmentSlot.id + "lddetail" + index + location}>
												{`${location}: ${weapon}`}
												{cost ? `, ${cost}pts` : ""}
											</div>
										)
									})}
								</div>
								<div className="flex flex-col justify-between gap-1">
									<button
										onClick={() => handleIncrement(loadout.id)}
										className="self-end px-2 clip-path-halfagon-md bg-primary-800 hover:bg-primary-700 active:bg-primary-600">
										+
									</button>
									<button
										onClick={() => handleRemove(loadout.id)}
										className="self-end px-2 clip-path-halfagon-md bg-red-800 hover:bg-red-700 active:bg-red-600">
										-
									</button>
								</div>
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default DetachmentDetails
