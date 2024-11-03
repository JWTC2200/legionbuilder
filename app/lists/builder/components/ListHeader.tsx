import GameSizeField from "./GameSizeField"
import ListAllegiance from "./ListAllegiance"
import ListFaction from "./ListFaction"
import { listState } from "@lists/state"

const ListHeader = () => {
	const { list } = listState()

	return (
		<div className="w-full flex justify-center sm:py-2 sm:px-10 builder_title_background sm:clip-path-octagon-lg text-primary-50 sm:gap-4">
			<div className={"w-full bg-secondary-800 flex flex-wrap justify-evenly sm:clip-path-octagon-lg"}>
				{list.gamemode === "titandeath" ? null : <ListFaction />}
				<ListAllegiance />
				<GameSizeField />
			</div>
		</div>
	)
}

export default ListHeader
