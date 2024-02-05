import GameSizeField from "./GameSizeField"
import ListAllegiance from "./ListAllegiance"
import ListFaction from "./ListFaction"

const ListHeader = () => {
	return (
		<div className="w-full mx-4 p-4 builder_head_background text-primary-50 flex flex-wrap justify-center gap-4 text-center">
			<ListFaction />
			<ListAllegiance />
			<GameSizeField />
		</div>
	)
}

export default ListHeader
