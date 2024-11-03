import { listState } from "@/app/lists/state"

const GameSizeField = () => {
	const { list, setList } = listState()
	return (
		<div className="flex items-center bg-secondary-800 hover:text-primary-400 active:text-primary-400 px-2">
			<label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
				Game size:
			</label>
			<input
				type="number"
				id="game_size"
				name="game_size"
				value={Number(list.points).toString()}
				onChange={(e) => setList({ ...list, points: Number(e.target.value) })}
				className="bg-transparent rounded-sm p-1 sm:text-lg font-semibold  w-[60px] text-right py-1 focus:outline-none"
			/>
			<label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
				pts
			</label>
		</div>
	)
}

export default GameSizeField
