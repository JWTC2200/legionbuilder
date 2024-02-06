import { List, FACTION, ALLEGIANCE, ListFormation, ListDetachment, ListUpgrades, ListLoadouts } from "@/app/types/types"
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
	nickname: "",
	data_id: 0,
	faction: null,
	allegiance: null,
	subfaction: null,
	detachment_groups: [],
}

export const emptyDetachment: ListDetachment = {
	id: 0,
	slot_id: "",
	slot_type: null,
	formation_id: "",
	name: "",
	faction: null,
	allegiance: null,
	subfaction: null,
	cost: 0,
	size: 0,
	max_size: 0,
}

export const emptyUpgrade: ListUpgrades = {
	id: 0,
	formation_id: "",
	slot_id: "",
	upgrades: [],
}

export const emptyLoadouts: ListLoadouts = {
	id: 0,
	formation_id: "",
	slot_id: "",
	loadouts: [],
}
