import { FACTION, ALLEGIANCE, SUBFACTION_TYPE, SLOT_TYPE, DETACHMENT_TYPE } from "./types"

export interface List {
	gamemode?: "standard" | "titandeath"
	points: number
	name: string
	id: string
	user: string
	faction: FACTION
	allegiance: ALLEGIANCE
	formations: ListFormation[]
	detachments: ListDetachment[]
	upgrades: ListUpgrades[]
	loadouts: ListLoadouts[]
}

export interface ListFormation {
	id: string
	name: string
	nickname: string
	data_id: number
	faction: FACTION | null
	allegiance: ALLEGIANCE | null
	subfaction: SUBFACTION_TYPE | null
	detachment_groups: ListFormationGroup[]
}

export interface ListFormationGroup {
	id: string
	type: SLOT_TYPE
	detachment_slots: ListDetachmentSlot[]
}

export interface ListDetachmentSlot {
	id: string
	formation_id: string
	data_id: number
	type: DETACHMENT_TYPE
	faction: FACTION
	restricted: boolean
	options: number[]
	description?: string
}

export interface ListDetachment {
	id: number
	slot_id: string
	slot_type: DETACHMENT_TYPE | null
	formation_id: string
	name: string
	faction: FACTION | null
	allegiance: ALLEGIANCE | null
	subfaction: string | null
	cost: number
	size: number
	max_size: number
	break_strength?: number
}

export interface ListUpgrades {
	id: number
	formation_id: string
	slot_id: string
	upgrades: ListUpgrade[]
}

export interface ListUpgrade {
	name: string
	unit_ref: number
	number: number
	cost: number
	td_ek?: number //titandeath engine killer cost
	size: number
	text?: string
	break_strength?: number
}
// export interface

export interface ListLoadouts {
	id: number
	formation_id: string
	slot_id: string
	loadouts: ListLoadout[]
}

export interface ListLoadout {
	id: string
	number: number
	weapons: ListLoadoutWeapon[]
}
export interface ListLoadoutWeapon {
	location: string
	weapon: string
	cost: number
}
