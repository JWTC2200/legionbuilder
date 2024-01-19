import { useState } from "react"
import { listCards } from "../utils"
import { MdListAlt } from "react-icons/md"
import { PiCardsLight } from "react-icons/pi"
import { unitData } from "@/app/data/unit_data"
import UnitDataslate from "@/app/components/UnitDataslate"
import { listState } from "@/app/lists/builder/state"

const ViewCards = () => {
	const [showCards, setShowCards] = useState(false)
	const { list } = listState()
	return (
		<div>
			<button type="button" onClick={() => setShowCards((prev) => !prev)} className="text-xl">
				{showCards ? (
					<header className="flex items-center gap-2">
						<PiCardsLight /> <span className="text-sm">Hide Cards</span>
					</header>
				) : (
					<header className="flex items-center gap-2">
						<MdListAlt /> <span className="text-sm">Show Cards</span>
					</header>
				)}
			</button>
			{showCards ? (
				<div className="break-inside-avoid-page">
					{listCards(list).map((id) => {
						const data = unitData.find((unit) => unit.id == id)!
						return <UnitDataslate key={"card" + id} {...data} />
					})}
				</div>
			) : null}
		</div>
	)
}

export default ViewCards
