import GameSizeField from "./GameSizeField"
import ListAllegiance from "./ListAllegiance"
import ListFaction from "./ListFaction"
import { listState } from "@lists/state"

const ListHeader = () => {
	const { list } = listState()

	return (
		<div className="w-full p-2 builder_title_background sm:clip-path-octagon-lg text-primary-50 flex flex-wrap justify-around gap-4 text-center">
			{list.gamemode === "titandeath" ? null : <ListFaction />}
			<ListAllegiance />
			<GameSizeField />
		</div>
	)
}

export default ListHeader
