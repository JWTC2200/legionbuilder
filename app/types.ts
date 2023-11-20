export enum FACTION {
  astartes = "Legiones Astartes",
  solar = "Solar Auxillia",
  strategic = "Strategic Assets",
}

export const factionTypeArray = Object.values(FACTION);

export enum ALLEGIANCE {
  loyalist = "Loyalist",
  traitor = "Traitor",
  neutral = "Neutral",
}

export enum DETACHMENT_TYPE {
  hq = "HQ",
  core = "Core",
  support = "Support",
  vanguard = "Vanguard",
  light = "Light Armour",
  battle = "Battle Tank",
  heavy = "Heavy Armour",
  artillery = "Artillery",
  air = "Air Support",
  bastion = "Bastion",
  transport = "Transport",
  titan = "Titan",
  knight = "Knight",
  unique = "Unique",
}

export enum UNIT_TYPE {
  knight = "Knight",
  infantry = "Infantry",
  titan = "Titan",
  vehicle = "Vehicle",
}

export const detachmentTypeArray = Object.values(DETACHMENT_TYPE);

export interface FORMATION {
  id: number;
  name: string;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  compulsory: number[] | null;
  optional: number[] | null;
  choice: number[][] | null;
}

export interface FORMATION_SLOT {
  id: number;
  type: DETACHMENT_TYPE;
  restricted?: boolean;
  options: number[];
  description?: string;
}

export interface DETACHMENT {
  id: number;
  name: string;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  base_cost: number;
  base_size: number;
  max_size: number;
  main_unit: number[];
  related_unit: number[];
  loadout: DETACHMENT_LOADOUT[];
  upgrade_options: DETACHMENT_UPGRADE[];
  datasheet_info: DETACHMENT_UPGRADE_DATASHEET[];
}

export interface DETACHMENT_LOADOUT {
  text?: string;
  text_option?: string[];
  weapon_option?: number[];
  itallic_text?: string;
}

export interface DETACHMENT_UPGRADE {
  name: string;
  options: { number: number; cost: number; size: number }[];
}

export interface DETACHMENT_UPGRADE_DATASHEET {
  text?: string;
  options?: { text: string; cost: number }[];
  info?: string;
}

export interface UNIT_DATASHEET {
  id: number;
  faction: FACTION;
  allegiance: ALLEGIANCE;
  unit_type: { type: UNIT_TYPE; value: number };
  name: string;
  movement: number;
  save: number;
  caf: number;
  morale: number | null;
  wounds: number;
  weapons: number[];
  special_rules: string[];
}

export interface WEAPON_DATASHEET {
  id: number;
  name: string;
  profiles: {
    range: string;
    dice: number | null;
    to_hit: number | null;
    ap: number;
    traits: string[];
  }[];
}

export interface WEAPON_TRAIT {
  name: string;
  description: string;
}

export interface SPECIAL_RULE {
  name: string;
  description: string;
}

export interface BUILDER_LIST {
  points: number;
  main_faction: FACTION;
  formations: BUILDER_FORMATION[];
}

export interface BUILDER_FORMATION {
  name: string;
  id: string;
  choice: number[][];
  compulsory: number[];
  optional: number[];
}

export interface BUILDER_DETACHMENT_SLOT {
  slot_ref: string;
  id: number;
  type: DETACHMENT_TYPE;
  restricted?: boolean;
  options: number[];
  description?: string;
  selected_unit: BUILDER_DETACHMENT_UNIT;
}

export interface BUILDER_DETACHMENT_UNIT {
  id: number;
  name: string;
  upgrade_options: BUILDER_DETACHMENT_UNIT_UPGRADES[];
}

export interface BUILDER_DETACHMENT_UNIT_UPGRADES {
  name: string;
  number: number;
  cost: number;
  size: number;
}
