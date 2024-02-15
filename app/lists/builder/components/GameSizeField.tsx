import { listState } from "@/app/lists/state"

const GameSizeField = () => {
	const { list, setList } = listState()
	return (
		<div>
			<div className="flex items-center">
				<label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
					Game size:
				</label>
				<input
					type="number"
					id="game_size"
					name="game_size"
					value={Number(list.points).toString()}
					onChange={(e) => setList({ ...list, points: Number(e.target.value) })}
					className="bg-transparent rounded-sm p-1 sm:text-lg font-semibold hover:text-primary-400 active:text-primary-400 w-[60px] text-right py-1 focus:outline-none"
				/>
				<label htmlFor="game_size" className="sm:text-xl font-graduate mr-1">
					pts
				</label>
			</div>
		</div>
	)
}

export default GameSizeField
