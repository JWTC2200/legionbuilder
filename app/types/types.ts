import { Timestamp } from "firebase/firestore"
import { List } from "@type/listTypes"

export enum FACTION {
	astartes = "Legiones Astartes",
	solar = "Solar Auxillia",
	mechanicum = "Mechanicum",
	strategic = "Strategic Assets",
	collegiaTitanica = "Collegia Titanica",
	questorisFamilia = "Questoris Familia",
	none = "none",
}

export const factionTypeArray = Object.values(FACTION).filter(
	(entry) => ![FACTION.none, FACTION.collegiaTitanica, FACTION.questorisFamilia].includes(entry)
)

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

export enum SLOT_TYPE {
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
	rules: FORMATION_RULES[]
}

export interface FORMATION_RULES {
	name: string
	text: string
}

export interface FORMATION_SLOTS {
	slot_type: SLOT_TYPE
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
	detachment_type: DETACHMENT_TYPE[]
	base_cost: number
	td_ek?: number //titandeath enginekiller
	base_size: number
	max_size: number
	break_strength?: number
	main_unit: number[]
	related_unit: number[]
	dataslate_loadout: DATASLATE_LOADOUT[]
	upgrade_options: DETACHMENT_UPGRADE[]
	loadout_options: DETACHMENT_LOADOUT[]
	datasheet_info: DETACHMENT_UPGRADE_DATASHEET[]
}

export interface DATASLATE_LOADOUT {
	text?: string
	text_option?: string[]
	weapon_option?: number[]
	itallic_text?: string
}

export interface DETACHMENT_UPGRADE {
	name: string
	unit_ref: number
	options: {
		number: number
		cost: number
		td_ek?: number //titandeath engine killer cost
		size: number
		text?: string
		break_strength?: number
	}[]
}

export interface DETACHMENT_LOADOUT {
	location: string
	options: DETACHMENT_LOADOUT_WEAPON[]
}

export interface DETACHMENT_LOADOUT_WEAPON {
	name: string
	cost: number
	td_ek?: number //titandeath engine killer cost
}

export interface DETACHMENT_UPGRADE_DATASHEET {
	text?: string
	options?: { text: string; cost: number }[]
	info?: string
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
	list: List
	main_faction: string
	name: string
	created: Timestamp
}

export interface ListModelsNames {
	name: string
	number: number
	faction: FACTION
}
