import { List, FACTION, ALLEGIANCE, ListFormation, ListDetachment } from "@/app/types"
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

export const emptyDetachment: ListDetachment = {
	id: 0,
	slot_id: "",
	formation_id: "",
	name: "",
	faction: null,
	allegiance: null,
	subfaction: null,
	cost: 0,
	size: 0,
	max_size: 0,
}

export const emptyUpgrade: ListUpgrade = {
	id: "",
	formation_id: "",
	name: "",
	slot_id: "",
	number: 0,
	cost: 0,
	size: 0,
}

export const emptyLoadouts: ListLoadouts = {
	id: "",
	formation_id: "",
	slot_id: "",
	loadouts: [],
}
