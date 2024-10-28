import { listState } from "@/app/lists/state"
import { FACTION } from "@type//types"

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
				<option value={FACTION.astartes} className="text-primary-950">
					Legiones Astartes
				</option>
				<option value={FACTION.solar} className="text-primary-950">
					Solar Auxillia
				</option>
				<option value={FACTION.collegiaTitanica} className="text-primary-950">
					Collegia Titanica
				</option>
				<option value={FACTION.questorisFamilia} className="text-primary-950">
					Questoris Familia
				</option>
			</select>
		</div>
	)
}

export default ListFaction
