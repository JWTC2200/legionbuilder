import { List, FACTION, ALLEGIANCE, ListFormation } from "@/app/types"
import { nanoid } from "nanoid"

export const emptyList: List = {
	points: 3000,
	name: "New List",
	id: nanoid(),
	user: "",
	faction: FACTION.astartes,
	allegiance: ALLEGIANCE.loyalist,
	formations: [],
	detachments: [],
	upgrades: [],
	loadouts: [],
}

export const emptyFormation: ListFormation = {
	id: nanoid(),
	name: "",
	data_id: 0,
	faction: null,
	allegiance: null,
	subfaction: null,
	detachment_groups: [],
}
