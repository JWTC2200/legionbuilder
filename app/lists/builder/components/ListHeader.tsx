import GameSizeField from "./GameSizeField"
import ListAllegiance from "./ListAllegiance"
import ListFaction from "./ListFaction"

const ListHeader = () => {
	return (
		<div className="w-full p-2 builder_title_background sm:clip-path-octagon-lg text-primary-50 flex flex-wrap justify-around gap-4 text-center">
			<ListFaction />
			<ListAllegiance />
			<GameSizeField />
		</div>
	)
}

export default ListHeader
