import { listState } from "@/app/lists/state"
import { ALLEGIANCE } from "@/app/types"

const ListAllegiance = () => {
	const { list, setList } = listState()
	return (
		<div className="flex items-center">
			<label htmlFor="faction_selector" className="text-lg sm:text-xl font-graduate mr-1">
				Allegiance:{" "}
			</label>
			<select
				id="allegiance_selector"
				name="allegiance_selector"
				value={list.allegiance}
				onChange={(e) => setList({ ...list, allegiance: e.target.value as ALLEGIANCE })}
				className="bg-transparent rounded-sm p-1 sm:text-lg font-graduate hover:text-primary-400 active:text-primary-400">
				<option value={ALLEGIANCE.loyalist} className="text-primary-950">
					{ALLEGIANCE.loyalist}
				</option>
				<option value={ALLEGIANCE.traitor} className="text-primary-950">
					{ALLEGIANCE.traitor}
				</option>
			</select>
		</div>
	)
}

export default ListAllegiance
