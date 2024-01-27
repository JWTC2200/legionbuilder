import { Timestamp } from "firebase/firestore"

export enum FACTION {
	astartes = "Legiones Astartes",
	solar = "Solar Auxillia",
	strategic = "Strategic Assets",
	none = "None",
}

export const factionTypeArray = Object.values(FACTION).filter((value) => value !== FACTION.none)

export enum ALLEGIANCE {
	loyalist = "Loyalist",
	traitor = "Traitor",
}

export enum DETACHMENT_TYPE {
	hq = "HQ",
	core = "Core",
	support = "Support",
	transport = "Transport",
	vanguard = "Vanguard",
	light = "Light Armour",
	battle = "Battle Tank",
	heavy = "Heavy Armour",
	artillery = "Artillery",
	bastion = "Bastion",
	air = "Air Support",
	knight = "Knight",
	titan = "Titan",
	dedicated = "Dedicated",
}

export const detachmentTypeArray = Object.values(DETACHMENT_TYPE)

export enum SUBFACTION_TYPE {
	darkAngels = "Dark Angels",
	empChild = "Emperor's Children",
	ironWar = "Iron Warriors",
	whiteScars = "White Scars",
	spaceWolves = "Space Wolves",
	impFists = "Imperial Fists",
	nightLords = "Night Lords",
	bloodAngels = "Blood Angels",
	ironHands = "Iron Hands",
	worldEaters = "World Eaters",
	ultramarines = "Ultramarines",
	deathGuard = "Death Guard",
	thousandSons = "Thousand Sons",
	sonsHorus = "Sons of Horus",
	wordBearers = "Word Bearers",
	salamanders = "Salamanders",
	ravenGuard = "Raven Guard",
	alphaLegion = "Alpha Legion",
}

export const subfactionTypeArray = Object.values(SUBFACTION_TYPE)

export enum UNIT_TYPE {
	infantry = "Infantry",
	cavalry = "Cavalry",
	walker = "Walker",
	vehicle = "Vehicle",
	heavy = "Super-Heavy Vehicle",
	knight = "Knight",
	titan = "Titan",
	structure = "Structure",
}

export enum SLOTSET {
	compulsory = "compulsory",
	optional = "optional",
	choice = "choice",
}

export interface UNIT_DATASHEET {
	id: number
	faction: FACTION
	subfaction: SUBFACTION_TYPE | null
	allegiance: ALLEGIANCE | null
	unique: boolean
	unit_type: { type: UNIT_TYPE; value: number }
	name: string
	movement: string
	save: number
	caf: number
	morale: number | null
	wounds: number
	weapons: number[]
	loadout?: [{ text?: string; options?: string[] }]
	special_rules: SPECIAL_RULE[]
}

export interface WEAPON_DATASHEET {
	id: number
	name: string
	profiles: WEAPON_PROFILES[]
}

export interface WEAPON_PROFILES {
	range: string
	dice: number | string | null
	to_hit: number | null
	ap: number | string
	traits: WEAPON_TRAIT[]
}
// Weapon trait / special rules

export interface WEAPON_TRAIT {
	name: string
	value?: number | string
}

export interface SPECIAL_RULE {
	name: string
	value?: number | string
}

export interface WEAPON_TRAIT_INFO {
	name: string
	tooltip?: string
	description: string[]
}

export interface SPECIAL_RULE_INFO {
	name: string
	tooltip?: string
	description: string[]
}

export interface FORMATION {
	id: number
	name: string
	faction: FACTION
	subfaction: SUBFACTION_TYPE | null
	allegiance: ALLEGIANCE | null
	formation_slots: FORMATION_SLOTS[]
}

export interface FORMATION_SLOTS {
	slot_type: SLOTSET
	slot_id: number[]
}

export interface FORMATION_SLOT {
	id: number
	type: DETACHMENT_TYPE
	faction: FACTION
	restricted: boolean
	options: number[]
	description?: string
}

export interface DETACHMENT {
	id: number
	name: string
	faction: FACTION
	subfaction: SUBFACTION_TYPE | null
	allegiance: ALLEGIANCE | null
	unique: boolean
	detachment_type: DETACHMENT_TYPE
	base_cost: number
	base_size: number
	max_size: number
	break_strength?: number
	main_unit: number[]
	related_unit: number[]
	loadout: DETACHMENT_LOADOUT[]
	upgrade_options: DETACHMENT_UPGRADE[]
	datasheet_info: DETACHMENT_UPGRADE_DATASHEET[]
}

export interface DETACHMENT_LOADOUT {
	text?: string
	text_option?: string[]
	weapon_option?: number[]
	itallic_text?: string
}

export interface DETACHMENT_UPGRADE {
	name: string
	options: {
		number: number
		cost: number
		size: number
		text?: string
		break_strength?: number
	}[]
}

export interface DETACHMENT_UPGRADE_DATASHEET {
	text?: string
	options?: { text: string; cost: number }[]
	info?: string
}

// List builder specific types ( effectively mirrors of above types)

export interface BUILDER_LIST {
	points: number
	list_name: string
	list_id: string
	user_id: string
	main_faction: FACTION
	allegiance: ALLEGIANCE | null
	formations: BUILDER_FORMATION[]
}

export interface BUILDER_FORMATION {
	name: string
	ref_id: string
	id: number
	faction: FACTION | null
	subfaction: SUBFACTION_TYPE | null
	formation_slots: BUILDER_FORMATION_SLOTS[]
}

export interface BUILDER_FORMATION_SLOTS {
	slot_type: SLOTSET
	slot: BUILDER_FORMATION_SLOT
}

export interface BUILDER_FORMATION_SLOT {
	ref_id: string
	slot_ref: string
	id: number
	type: DETACHMENT_TYPE
	faction: FACTION
	restricted: boolean
	options: number[]
	description?: string
	selected_unit: BUILDER_DETACHMENT_UNIT | null
}

export interface BUILDER_DETACHMENT_UNIT {
	id: number
	name: string
	faction: FACTION
	subfaction: SUBFACTION_TYPE | null
	allegiance: ALLEGIANCE | null
	base_cost: number
	base_size: number
	max_size: number
	break_strength?: number
	upgrade_options: BUILDER_DETACHMENT_UNIT_UPGRADES[]
}

export interface BUILDER_DETACHMENT_UNIT_UPGRADES {
	name: string
	number: number
	cost: number
	size: number
	text?: string
	break_strength?: number
}

// CONTACT FORM

export interface CONTACT_FORM_DATA {
	email: string
	title: string
	message: string
}

// db

export interface DB_ENTRY {
	formations: number
	game_size: number
	list: BUILDER_LIST
	main_faction: string
	name: string
	created: Timestamp
}
