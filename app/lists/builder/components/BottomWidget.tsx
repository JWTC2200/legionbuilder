import { listState } from "@lists/state"
import { totalListPoints } from "../utils"

const BottomWidget = () => {
	const { list } = listState()

	const { mainFactionPoints, subFactionPoints, totalPoints } = totalListPoints(list)

	return (
		<div className="fixed flex flex-wrap justify-center items-center text-center bottom-0 right-1/2 translate-x-1/2 w-full max-w-screen-2xl h-24 font-graduate text-primary-50 text-md sm:text-lg gap-2 sm:gap-4  p-2 sm:px-4 bg-secondary-800 z-10">
			<div>
				List total: <span className="font-semibold">{totalPoints}pts</span>
			</div>
			<div>
				{list.faction}: <span className="font-semibold"> {mainFactionPoints}pts</span>
			</div>
			<div>
				Allies: <span className="font-semibold"> {subFactionPoints}pts</span>
			</div>
			<div>
				Formations: <span className="font-semibold"> {list.formations.length}</span>
			</div>
		</div>
	)
}

export default BottomWidget
