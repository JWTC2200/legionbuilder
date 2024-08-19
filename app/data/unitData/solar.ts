import { FACTION, UNIT_DATASHEET, UNIT_TYPE } from "@type/types"

export const solar: UNIT_DATASHEET[] = [
	// ********************************************************************
	// ************************* SOLAR AUXILIA UNITS **********************
	// ********************************************************************
	{
		id: 2000,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Auxilia Commander",
		movement: '5"',
		save: 6,
		caf: 3,
		morale: 2,
		wounds: 1,
		weapons: [2000, 2001],
		special_rules: [
			{ name: "Commander" },
			{ name: "Inspire", value: '8"' },
			{ name: "Invulnerable Save", value: "6+" },
			{ name: "Master Tactitian" },
			{ name: "Solar Auxilia HQ", value: '10"' },
		],
	},
	{
		id: 2001,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Tactical Command",
		movement: '5"',
		save: 6,
		caf: 1,
		morale: 3,
		wounds: 1,
		weapons: [2002],
		special_rules: [
			{ name: "Commander" },
			{ name: "Inspire", value: '8"' },
			{ name: "Solar Auxilia HQ", value: '6"' },
		],
	},
	{
		id: 2002,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Auxiliaries",
		movement: '5"',
		save: 6,
		caf: 0,
		morale: 4,
		wounds: 1,
		weapons: [2002, 2003],
		special_rules: [{ name: "Chain of Command" }, { name: "Line" }],
	},
	{
		id: 2003,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Veletarii",
		movement: '5"',
		save: 6,
		caf: 1,
		morale: 4,
		wounds: 1,
		weapons: [2004, 2005],
		special_rules: [{ name: "Steadfast" }],
	},
	{
		id: 2004,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Charonite Ogryns",
		movement: '5"',
		save: 6,
		caf: 3,
		morale: 4,
		wounds: 1,
		weapons: [2006],
		special_rules: [{ name: "Furious Charge" }],
	},
	{
		id: 2005,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Auxilia Rapier",
		movement: '4"',
		save: 6,
		caf: 0,
		morale: 4,
		wounds: 1,
		weapons: [1008, 1009, 2007],
		special_rules: [{ name: "Bulky" }, { name: "Chain of Command" }],
	},
	{
		id: 2006,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.infantry, value: 1 },
		name: "Auxilia Tarantula",
		movement: "-",
		save: 5,
		caf: -3,
		morale: null,
		wounds: 1,
		weapons: [1017, 1018],
		special_rules: [{ name: "Automated Sentry" }],
	},
	{
		id: 2007,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.walker, value: 1 },
		name: "Aethon Heavy Sentinel",
		movement: '7"',
		save: 4,
		caf: 0,
		morale: 4,
		wounds: 1,
		weapons: [2008, 2009],
		special_rules: [{ name: "Forward Deployment" }],
	},
	{
		id: 2008,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Leman Russ",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2010, 2011, 1027, 2012],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2009,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Malcador Tank",
		movement: '9"',
		save: 3,
		caf: 2,
		morale: 4,
		wounds: 2,
		weapons: [2013, 2014, 2015, 2016, 2017, 2018, 1027, 2012, 2019, 2020],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2010,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.heavy, value: 3 },
		name: "Auxilia Super Heavy",
		movement: '7"',
		save: 2,
		caf: 4,
		morale: 4,
		wounds: 2,
		weapons: [2021, 2022, 1031, 2020, 1027, 2023, 2024, 2025, 2026],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2011,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Thunderbolt Fighter",
		movement: '25"',
		save: 4,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2027, 2028, 1041, 1048, 2031, 2032],
		special_rules: [{ name: "Flyer" }, { name: "Interceptor" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2012,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Avenger Strike Fighter",
		movement: '28"',
		save: 4,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [1041, 2033, 2034, 2035, 1048, 2031, 2032],
		special_rules: [{ name: "Flyer" }, { name: "Interceptor" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2013,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Lightning Fighter",
		movement: '30"',
		save: 4,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2036, 2037, 1048, 2031, 2038],
		special_rules: [{ name: "Flyer" }, { name: "Interceptor" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2014,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Marauder Bomber",
		movement: '24"',
		save: 3,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2039, 2040, 2041, 1048, 2031, 2032],
		special_rules: [{ name: "Flyer" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2015,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Marauder Pathfinder",
		movement: '22"',
		save: 3,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2042, 2043],
		loadout: [
			{
				options: [
					"Nose Mounted heavy bolter",
					"Rear Mounted heavy bolter",
					"Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
				],
			},
		],
		special_rules: [{ name: "Auger Array" }, { name: "Flyer" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2016,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Marauder Colossus",
		movement: '22"',
		save: 3,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2042, 2043, 2044],
		loadout: [
			{
				options: [
					"Nose Mounted heavy bolter",
					"Rear Mounted heavy bolter",
					"Colossus bomb",
					"Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
				],
			},
		],
		special_rules: [{ name: "Flyer" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2017,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Marauder Destroyer",
		movement: '24"',
		save: 3,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [2045, 2040, 2046, 2047],
		loadout: [
			{
				options: [
					"Nose Mounted autocannon array",
					"Marauder heavy bolter turrets",
					"Marauder assault cannons",
					"Destroyer bomb bay",
					"Any two of the following: Hellstrike missiles, Skystrike missiles or Wing bombs",
				],
			},
		],
		special_rules: [{ name: "Flyer" }, { name: "Jink", value: "5+" }],
	},
	{
		id: 2018,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Arvus Lighter",
		movement: '25"',
		save: 4,
		caf: 0,
		morale: null,
		wounds: 1,
		weapons: [],
		special_rules: [
			{ name: "Flyer" },
			{ name: "Hover" },
			{ name: "Jink", value: "5+" },
			{ name: "Transport", value: 2 },
		],
	},
	{
		id: 2019,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Dracosan",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2048, 2020],
		special_rules: [{ name: "Explorator Adaptation" }, { name: "Transport", value: 4 }],
	},
	{
		id: 2020,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Cyclops",
		movement: '9"',
		save: 5,
		caf: -8,
		morale: null,
		wounds: 1,
		weapons: [2049, 2050],
		special_rules: [{ name: "Compact" }, { name: "Remote Controlled Detonation" }],
	},
	{
		id: 2021,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Malcador Infernus",
		movement: '8"',
		save: 3,
		caf: 1,
		morale: 4,
		wounds: 2,
		weapons: [2051, 2017, 2018],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2022,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Valdor",
		movement: '8"',
		save: 3,
		caf: 1,
		morale: 4,
		wounds: 2,
		weapons: [2052, 2017, 2018],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2023,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.heavy, value: 3 },
		name: "Stormhammer",
		movement: '6"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 2,
		weapons: [2053, 2054, 2055, 2012, 2056, 2057],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2024,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Medusa",
		movement: '6"',
		save: 3,
		caf: 0,
		morale: 4,
		wounds: 1,
		weapons: [2058],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2025,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Basilisk",
		movement: '6"',
		save: 3,
		caf: 0,
		morale: 4,
		wounds: 1,
		weapons: [2059],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2026,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Leman Russ Exterminator",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2060, 1027, 2012],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2027,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Leman Russ Executioner",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2061, 1027, 2012],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2028,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Leman Russ Demolisher",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2062, 1027, 2012],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2029,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.vehicle, value: 2 },
		name: "Leman Russ Annihilator",
		movement: '8"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 1,
		weapons: [2063, 1027, 2012],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2030,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.heavy, value: 3 },
		name: "Shadowsword",
		movement: '6"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 2,
		weapons: [4041, 2064, 2065, 2023],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2031,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.heavy, value: 3 },
		name: "Stormsword",
		movement: '6"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 2,
		weapons: [2067, 2064, 2066, 2023],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
	{
		id: 2032,
		faction: FACTION.solar,
		subfaction: null,
		allegiance: null,
		unique: false,
		unit_type: { type: UNIT_TYPE.heavy, value: 3 },
		name: "Stormblade",
		movement: '6"',
		save: 2,
		caf: 2,
		morale: 4,
		wounds: 2,
		weapons: [4030, 2064, 2068, 2023],
		special_rules: [{ name: "Chain of Command" }, { name: "Explorator Adaptation" }],
	},
]
