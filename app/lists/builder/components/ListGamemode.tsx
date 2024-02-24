import { listState } from "@lists/state"

const ListGamemode = () => {
	const { list } = listState()

	return (
		<div className="flex items-center gap-2 font-graduate text-lg sm:text-xl text-primary-50 capitalize">
			<h3>{`Gamemode: ${list.gamemode ? list.gamemode : "standard"}`}</h3>
		</div>
	)
}

export default ListGamemode
