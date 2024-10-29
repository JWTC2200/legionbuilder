import { listState } from "@/app/lists/state"
import { FACTION, factionsWitFormations } from "@type//types"

const ListFaction = () => {
	const { list, setList } = listState()

	return (
		<div className="flex items-center">
			<label htmlFor="faction_selector" className="text-lg sm:text-xl font-graduate mr-1">
				Faction:{" "}
			</label>
			<select
				id="faction_selector"
				name="faction_selector"
				value={list.faction}
				onChange={(e) =>
					setList({
						...list,
						faction: e.target.value as FACTION,
					})
				}
				className="bg-transparent rounded-sm p-1 sm:text-lg font-graduate hover:text-primary-400 active:text-primary-400">
				{factionsWitFormations
					.filter((filter) => filter !== FACTION.strategic)
					.map((faction) => (
						<option key={`list-faction-selector-${faction}`} value={faction} className={"text-primary-950"}>
							{faction}
						</option>
					))}
			</select>
		</div>
	)
}

export default ListFaction
