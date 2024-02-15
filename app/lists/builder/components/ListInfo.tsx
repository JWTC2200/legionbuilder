import { listState } from "@lists/state"
import { totalListPoints } from "../utils"

const ListInfo = () => {
	const { list } = listState()
    const { subFactionPoints, totalPoints} = totalListPoints(list)

	return (
		<div className="flex flex-wrap gap-4 justify-around items-center text-center font-graduate text-md sm:text-lg w-full bg-secondary-800 p-2 sm:rounded-lg">
            <div>{`Formations: ${list.formations.length}`}</div>
			<div>{`Total: ${totalPoints}pts`}</div>
            <div>{`Allies: ${subFactionPoints}pts`}</div>
		</div>
	)
}

export default ListInfo
