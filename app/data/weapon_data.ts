import { WEAPON_DATASHEET } from "@type/types"
import { WeaponTraits } from "@type/weaponTraits"

// astartes 1000-1999, solar 2000-2999, mechanicum 3000-3999, knights-titans 4000-4999

export const weapons: WEAPON_DATASHEET[] = [
	// ********************************************************************
	// *************************ASTARTES WEAPONS **************************
	// ********************************************************************
	{
		id: 1000,
		name: "Legion combi-bolters",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.assault }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 1001,
		name: "Pintle Mounted twin-linked bolter",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1002,
		name: "Pintle Mounted multi-melta",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 1003,
		name: "Pintle Mounted havoc launcher",
		profiles: [
			{
				range: '15"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1004,
		name: "Legion bolter",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.assault }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 1005,
		name: "Plasma gun",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1006,
		name: "Missile launcher",
		profiles: [
			{
				range: '20"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.ignoresCover }, { name: WeaponTraits.light }],
			},
			{
				range: '20"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1007,
		name: "Legion bolt pistols",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 1008,
		name: "Laser destroyer array",
		profiles: [
			{
				range: '15"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1009,
		name: "Quad-launcher",
		profiles: [
			{
				range: '6"-30"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.barrage }, { name: WeaponTraits.light }],
			},
			{
				range: '16"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.demolisher }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1010,
		name: "Leviathan storm cannon",
		profiles: [
			{
				range: '10"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 1011,
		name: "Cyclone melta lance",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 1012,
		name: "Twin-linked volkite caliver",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.light },
				],
			},
		],
	},
	{
		id: 1013,
		name: "Leviathan siege claw",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 4,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 2 }],
			},
		],
	},
	{
		id: 1014,
		name: "Kheres assault cannon",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 1015,
		name: "Twin-linked lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1016,
		name: "In-built twin-linked bolter",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1017,
		name: "Tarantula lascannon battery",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1018,
		name: "Hyperios air-defence missile launcher",
		profiles: [
			{
				range: '25"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.skyfire }, { name: WeaponTraits.tracking }],
			},
		],
	},
	{
		id: 1019,
		name: "Sarcophagus Mounted weapons",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 6,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 1020,
		name: "Aiolus missile launcher",
		profiles: [
			{
				range: '25"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.skyfire }],
			},
		],
	},
	{
		id: 1021,
		name: "Hellfire plasma canonnade",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1022,
		name: "Anvilus autocannon battery",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1023,
		name: "Predator cannon",
		profiles: [
			{
				range: '18"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1024,
		name: "Sponson Mounted heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1025,
		name: "Predator lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1026,
		name: "Sponson Mounted lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1027,
		name: "Hull Mounted heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1028,
		name: "Twin-linked accelerator autocannon",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.tracking }],
			},
		],
	},
	{
		id: 1029,
		name: "Omega plasma array",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.accurate }],
			},
		],
	},
	{
		id: 1030,
		name: "Kratos battlecannon",
		profiles: [
			{
				range: '20"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [],
			},
			{
				range: '10"',
				dice: 1,
				to_hit: 4,
				ap: 4,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.armourbane }],
			},
		],
	},
	{
		id: 1031,
		name: "Co-axial autocannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.coaxial }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1032,
		name: "Melta blastgun",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 4,
				ap: 4,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.armourbane },
					{ name: WeaponTraits.bunkerBuster },
				],
			},
		],
	},
	{
		id: 1033,
		name: "Kratos autocannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 1034,
		name: "Kratos lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
				],
			},
		],
	},
	{
		id: 1035,
		name: "Xiphon lascannon array",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1036,
		name: "Xiphon rotary missile launcher",
		profiles: [
			{
				range: '24"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
					{ name: WeaponTraits.tracking },
				],
			},
		],
	},
	{
		id: 1037,
		name: "Storm Eagle heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1038,
		name: "Vengeance launcher",
		profiles: [
			{
				range: '15"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1039,
		name: "Tempest rockets",
		profiles: [
			{
				range: '35"',
				dice: 1,
				to_hit: 2,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.skyfire }],
			},
		],
	},
	{
		id: 1040,
		name: "Wing Mounted lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1041,
		name: "Avenger bolt cannon",
		profiles: [
			{
				range: '16"',
				dice: 5,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1042,
		name: "Quad heavy bolter batteries",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1043,
		name: "Gravis autocannon batteries",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.skyfire }],
			},
		],
	},
	{
		id: 1044,
		name: "Lascannon batteries ",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.skyfire }],
			},
		],
	},
	{
		id: 1045,
		name: "Turbo-laser destructor",
		profiles: [
			{
				range: '40"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 1046,
		name: "Thunderhawk heavy bolters",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1047,
		name: "Thunderhawk lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 1048,
		name: "Hellstrike missiles",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.armourbane }],
			},
		],
	},
	{
		id: 1049,
		name: "Twin-linked bolters",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1050,
		name: "Twin plasma guns",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1051,
		name: "Scimitar heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 1052,
		name: "Multi-melta",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1053,
		name: "Plasma cannon",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1054,
		name: "Heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 1055,
		name: "Nose Mounted heavy flamer",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 1056,
		name: "Cyclone missile launcher",
		profiles: [
			{
				range: '20"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 1057,
		name: "Sponson Mounted quad lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
				],
			},
		],
	},
	{
		id: 1058,
		name: "Sponson Mounted laser destroyers",
		profiles: [
			{
				range: '15"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
				],
			},
		],
	},
	{
		id: 1059,
		name: "Sponson Mounted twin-linked lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
				],
			},
		],
	},
	{
		id: 1060,
		name: "Turret Mounted twin bolter",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 1061,
		name: "Deathstorm missile launcher",
		profiles: [
			{
				range: '10"',
				dice: "D3+2",
				to_hit: 6,
				ap: 1,
				traits: [
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.limited, value: 1 },
					{ name: WeaponTraits.saturationFire },
				],
			},
		],
	},
	{
		id: 1062,
		name: "Punisher rotary cannon",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 1063,
		name: "Arcus missile launcher",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.rippleFire },
				],
			},
			{
				range: '20"',
				dice: 2,
				to_hit: 5,
				ap: 2,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.skyfire },
					{ name: WeaponTraits.tracking },
				],
			},
		],
	},
	{
		id: 1064,
		name: "Hull Mounted Anvilus autocannon",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1065,
		name: "Hull Mounted neutron blaster",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.shockPulse },
				],
			},
		],
	},
	{
		id: 1066,
		name: "Sabre missiles",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 1067,
		name: "Hull Mounted multi-melta",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 1068,
		name: "Termite twin-linked bolters",
		profiles: [
			{
				range: '8"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	// ********************************************************************
	// ************************ SOlAR AUXLIA WEAPONS **********************
	// ********************************************************************
	{
		id: 2000,
		name: "Archeotech pistol",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 2001,
		name: "Volkite chargers",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.deflagrate }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 2002,
		name: "Auxilia lasrifles",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 2003,
		name: "Flamers",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.ignoresCover }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 2004,
		name: "Auxilia laspistols",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 2005,
		name: "Power axes",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 2006,
		name: "Charonite claws",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 2007,
		name: "Mole mortar",
		profiles: [
			{
				range: '20"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.burrowing }],
			},
		],
	},
	{
		id: 2008,
		name: "Multi-laser",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 2009,
		name: "Sentinel missile launcher",
		profiles: [
			{
				range: '20"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.ignoresCover }],
			},
			{
				range: '20"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2010,
		name: "Leman Russ battlecannon",
		profiles: [
			{
				range: '25"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [],
			},
		],
	},
	{
		id: 2011,
		name: "Vanquisher battlecannon",
		profiles: [
			{
				range: '32"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.armourbane }],
			},
		],
	},
	{
		id: 2012,
		name: "Hull Mounted lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 2013,
		name: "Malcador battlecannon",
		profiles: [
			{
				range: '25"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 2014,
		name: "Malcador Vanquisher battlecannon",
		profiles: [
			{
				range: '32"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.armourbane },
				],
			},
		],
	},
	{
		id: 2015,
		name: "Malcador lascannon turret",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2016,
		name: "Malcador heavy bolter sponsons",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2017,
		name: "Malcador lascannon sponsons",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2018,
		name: "Malcador autocannon sponsons",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 2019,
		name: "Hull Mounted autocannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 2020,
		name: "Hull Mounted demolisher cannon",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 2021,
		name: "Baneblade cannon",
		profiles: [
			{
				range: '25"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [],
			},
		],
	},
	{
		id: 2022,
		name: "Hellhammer cannon",
		profiles: [
			{
				range: '14"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.demolisher }, { name: WeaponTraits.ignoresCover }],
			},
		],
	},
	{
		id: 2023,
		name: "Lascannon sponson turrets",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2024,
		name: "Baneblade heavy bolter sponsons",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2025,
		name: "Baneblade autocannon sponsons",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2026,
		name: "Baneblade heavy flamer sponsons",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 2027,
		name: "Quad autocannons",
		profiles: [
			{
				range: '16"',
				dice: 4,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2028,
		name: "Thunderbolt twin-linked lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2031,
		name: "Skystrike missiles",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
					{ name: WeaponTraits.tracking },
				],
			},
		],
	},
	{
		id: 2032,
		name: "Wing bombs",
		profiles: [
			{
				range: "-",
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Rear" }, { name: WeaponTraits.bombingRun }],
			},
		],
	},
	{
		id: 2033,
		name: "Avenger autocannon",
		profiles: [
			{
				range: '16"',
				dice: 4,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2034,
		name: "Avenger lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2035,
		name: "Heavy stubber tail gun",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 6,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2036,
		name: "Lightning twin lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2037,
		name: "Lightning twin multi-laser",
		profiles: [
			{
				range: '14"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2038,
		name: "Phosphex bomb clusters",
		profiles: [
			{
				range: "-",
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.bombingRun },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 2039,
		name: "Nose Mounted lascannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2040,
		name: "Marauder heavy bolter turrets",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 6,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2041,
		name: "Marauder bomb bay",
		profiles: [
			{
				range: "-",
				dice: 3,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Rear" }, { name: WeaponTraits.bombingRun }],
			},
		],
	},
	{
		id: 2042,
		name: "Nose Mounted heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 6,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2043,
		name: "Rear Mounted heavy bolter",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 6,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2044,
		name: "Colossus bomb",
		profiles: [
			{
				range: "-",
				dice: 6,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.bombingRun },
					{ name: WeaponTraits.bunkerBuster },
					{ name: WeaponTraits.limited, value: 1 },
				],
			},
		],
	},
	{
		id: 2045,
		name: "Nose Mounted autocannon array",
		profiles: [
			{
				range: '16"',
				dice: 6,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2046,
		name: "Marauder assault cannons",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.skyfire },
				],
			},
		],
	},
	{
		id: 2047,
		name: "Destroyer bomb bay",
		profiles: [
			{
				range: "-",
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Rear" }, { name: WeaponTraits.bombingRun }],
			},
		],
	},
	{
		id: 2048,
		name: "Hull Mounted twin lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.antitank },
				],
			},
		],
	},
	{
		id: 2049,
		name: "Demolition Charge",
		profiles: [
			{
				range: "-",
				dice: 1,
				to_hit: 3,
				ap: 1,
				traits: [{ name: WeaponTraits.blast, value: '3"' }, { name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 2050,
		name: "Incineration Charge",
		profiles: [
			{
				range: "-",
				dice: 1,
				to_hit: 3,
				ap: 1,
				traits: [
					{ name: WeaponTraits.blast, value: '3"' },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 2051,
		name: "Malcador inferno gun",
		profiles: [
			{
				range: "T",
				dice: null,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.firestorm },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 2052,
		name: "Neutron beam laser",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.shockPulse }],
			},
		],
	},
	{
		id: 2053,
		name: "Stormhammer cannon",
		profiles: [
			{
				range: '28"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.shred }],
			},
		],
	},
	{
		id: 2054,
		name: "Dual battlecannon",
		profiles: [
			{
				range: '25"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 2055,
		name: "Co-axial multi-laser",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.coaxial },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 2056,
		name: "Stormhammer multi-laser sponsons",
		profiles: [
			{
				range: '14"',
				dice: 5,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2057,
		name: "Stormhammer lascannon sponsons",
		profiles: [
			{
				range: '22"',
				dice: 4,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2058,
		name: "Medusa siege gun",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.barrage },
				],
			},
		],
	},
	{
		id: 2059,
		name: "Earthshaker cannon",
		profiles: [
			{
				range: '8"-90"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.barrage }],
			},
		],
	},
	{
		id: 2060,
		name: "Exterminator autocannon",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 2061,
		name: "Executioner plasma cannon",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 2062,
		name: "Demolisher cannon",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.demolisher }, { name: WeaponTraits.ignoresCover }],
			},
		],
	},
	{
		id: 2063,
		name: "Annihilator twin lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 2064,
		name: "Hull Mounted heavy bolter turret",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 2065,
		name: "Shadowsword heavy bolter sponsons",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2066,
		name: "Stormsword heavy bolter sponsons",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2067,
		name: "Stormsword siege cannon",
		profiles: [
			{
				range: '30"',
				dice: 1,
				to_hit: 3,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 2068,
		name: "Stormblade heavy bolter sponsons",
		profiles: [
			{
				range: '12"',
				dice: 4,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 2069,
		name: "Lascannon sponson turrets",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	// ********************************************************************
	// ********************** MECHANICUM WEAPONS **************************
	// ********************************************************************
	{
		id: 3000,
		name: "Volkite serpenta",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.deflagrate }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3001,
		name: "Meltagun",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 3002,
		name: "Las-locks",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 6,
				ap: 0,
				traits: [{ name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3003,
		name: "Lightning guns",
		profiles: [
			{
				range: '8"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 3004,
		name: "Thallax plasma-fusil",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 3005,
		name: "Maxima bolters",
		profiles: [
			{
				range: '8"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.assault }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3006,
		name: "Conversion beamers",
		profiles: [
			{
				range: '4-22"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [],
			},
		],
	},
	{
		id: 3007,
		name: "Myrmidon volkites",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.deflagrate }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3008,
		name: "Autocannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 3009,
		name: "Graviton hammers",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 2,
				traits: [{ name: WeaponTraits.wrecker, value: 1 }],
			},
		],
	},
	{
		id: 3010,
		name: "Mauler bolt cannon",
		profiles: [
			{
				range: '8"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 3011,
		name: "In-built bolters",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.assault }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3012,
		name: "Volkite incinerators",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.deflagrate }, { name: WeaponTraits.light }],
			},
		],
	},
	{
		id: 3013,
		name: "Rotor cannon",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 3014,
		name: "Power blade arrays",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 3015,
		name: "Arc blasters",
		profiles: [
			{
				range: '10"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.neutronFlux }],
			},
		],
	},
	{
		id: 3016,
		name: "Vultarax havoc launcher",
		profiles: [
			{
				range: '15"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [{ name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 3017,
		name: "Plasma mortar",
		profiles: [
			{
				range: '18"',
				dice: 1,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.demolisher }, { name: WeaponTraits.ignoresCover }],
			},
		],
	},
	{
		id: 3018,
		name: "Sollex heavy-las",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.armourbane }],
			},
		],
	},
	{
		id: 3019,
		name: "Graviton ram",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.wrecker, value: 2 }],
			},
		],
	},
	{
		id: 3020,
		name: "Lightning locks",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 3021,
		name: "Karacnos mortar battery",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.barrage },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 3022,
		name: "Shock ram",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 2,
				traits: [{ name: WeaponTraits.wrecker, value: 2 }],
			},
		],
	},
	{
		id: 3023,
		name: "Krios lightning cannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 5,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 3024,
		name: "Irad-scourer",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 3025,
		name: "Volkite caliver sponsons",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 3026,
		name: "Pulsar-fusil",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 3027,
		name: "Twin-linked volkite calivers",
		profiles: [
			{
				range: '12"',
				dice: 1,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.light },
				],
			},
		],
	},
	{
		id: 3028,
		name: "Twin-linked mauler bolt cannon",
		profiles: [
			{
				range: '8"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	// ********************************************************************
	// ********************* DARK MECHANICUM WEAPONS **********************
	// ********************************************************************
	{
		id: 5000,
		name: "Scintillax lascutter",
		profiles: [
			{
				range: `4"`,
				dice: 1,
				to_hit: 3,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.bunkerBuster },
				],
			},
		],
	},
	{
		id: 5001,
		name: "Exo-planar cannon",
		profiles: [
			{
				range: `10"`,
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.shred },
				],
			},
		],
	},
	{
		id: 5002,
		name: "Storm laser",
		profiles: [
			{
				range: '15"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 5003,
		name: "Errax meltagun",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }],
			},
		],
	},
	{
		id: 5004,
		name: "Stalker maxima bolters",
		profiles: [
			{
				range: '8"',
				dice: 3,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.assault },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 5005,
		name: "Errax lascutters",
		profiles: [
			{
				range: '4"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.bunkerBuster }],
			},
		],
	},
	{
		id: 5006,
		name: "Exo-planar repeaters",
		profiles: [
			{
				range: `10"`,
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [{ name: WeaponTraits.light }, { name: WeaponTraits.shred }],
			},
		],
	},
	{
		id: 5007,
		name: "Harpax lascutters",
		profiles: [
			{
				range: '4"',
				dice: 1,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.bunkerBuster }],
			},
		],
	},
	{
		id: 5008,
		name: "Storm laser flenser",
		profiles: [
			{
				range: '22"',
				dice: 3,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 5009,
		name: "Exo-planar bombard",
		profiles: [
			{
				range: '15"',
				dice: 3,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.bypass },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.shred },
				],
			},
		],
	},
	{
		id: 5010,
		name: "Storm laser array",
		profiles: [
			{
				range: '15"',
				dice: 5,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 5011,
		name: "Serperos lascutters",
		profiles: [
			{
				range: '4"',
				dice: 1,
				to_hit: 2,
				ap: 3,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.bunkerBuster },
					{ name: WeaponTraits.engineKiller, value: 1 },
					{ name: WeaponTraits.rend },
				],
			},
		],
	},
	{
		id: 5012,
		name: "Irradiation engine",
		profiles: [
			{
				range: '10"',
				dice: 3,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},

	// ********************************************************************
	// ***********************KNIGHT & TITAN WEAPONS **********************
	// ********************************************************************
	{
		id: 4000,
		name: "Thermal Cannon",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
				],
			},
			{
				range: '6"',
				dice: 1,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 1 },
				],
			},
		],
	},
	{
		id: 4001,
		name: "Rapid-fire battlecannon",
		profiles: [
			{
				range: '28"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 4002,
		name: "Questoris-avenger gatling cannon",
		profiles: [
			{
				range: '16"',
				dice: 5,
				to_hit: 5,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
				],
			},
		],
	},
	{
		id: 4003,
		name: "Heavy stubber",
		profiles: [
			{
				range: '14"',
				dice: 1,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 4004,
		name: "Meltagun",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4005,
		name: "Reaper chainsword",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 4006,
		name: "Thunderstrike gauntlet",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 2,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 1 }],
			},
		],
	},
	{
		id: 4007,
		name: "Rocket pods",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.barrage }],
			},
		],
	},
	{
		id: 4008,
		name: "Volkite chieorovile",
		profiles: [
			{
				range: '12"',
				dice: 3,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4009,
		name: "Hekaton siege claw",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 5,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 3 }],
			},
		],
	},
	{
		id: 4010,
		name: "Graviton gun",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: null,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.gravitonPulse }],
			},
		],
	},
	{
		id: 4011,
		name: "Lightning cannon",
		profiles: [
			{
				range: '22"',
				dice: 2,
				to_hit: 5,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.blast, value: 3 },
				],
			},
		],
	},
	{
		id: 4013,
		name: "Phased plasma-fusil",
		profiles: [
			{
				range: '10"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 4014,
		name: "Thermal spear",
		profiles: [
			{
				range: '8"',
				dice: 1,
				to_hit: 3,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 1 },
				],
			},
		],
	},
	{
		id: 4015,
		name: "Reaper chain-cleaver",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 4016,
		name: "Armiger autocannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 4017,
		name: "Armiger lightning locks",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4018,
		name: "Volkite veuglaire",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 4019,
		name: "Gyges siege claw",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 4,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 2 }],
			},
		],
	},
	{
		id: 4020,
		name: "Twin magna lascannon",
		profiles: [
			{
				range: '25"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
				],
			},
		],
	},
	{
		id: 4021,
		name: "Ionstorm missile pod",
		profiles: [
			{
				range: '25"',
				dice: 3,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 4022,
		name: "Helios defence missiles",
		profiles: [
			{
				range: '25"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.skyfire },
					{ name: WeaponTraits.tracking },
				],
			},
		],
	},
	{
		id: 4023,
		name: "Acastus lascannon",
		profiles: [
			{
				range: '22"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.antitank }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4024,
		name: "Conversion beam cannon",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
			{
				range: '6"-18"',
				dice: 1,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
			{
				range: '18"-35"',
				dice: 2,
				to_hit: 3,
				ap: 4,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 4025,
		name: "Volkite culverin",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.light },
				],
			},
		],
	},
	{
		id: 4026,
		name: "Karacnos mortar battery",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.barrage },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 4027,
		name: "Acastus autocannon",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.lightAT }],
			},
		],
	},
	{
		id: 4028,
		name: "Vulcan mega-bolter",
		profiles: [
			{
				range: '22"',
				dice: 10,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4030,
		name: "Plasma blastgun",
		profiles: [
			{
				range: '20"',
				dice: 2,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4031,
		name: "Inferno gun",
		profiles: [
			{
				range: "T",
				dice: 0,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.firestorm },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4032,
		name: "Incisor pattern melta lance",
		profiles: [
			{
				range: '14"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
				],
			},
			{
				range: '6"',
				dice: 1,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 2 },
				],
			},
		],
	},
	{
		id: 4033,
		name: "Volkite eradicator",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.beam },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4034,
		name: "Warhound shudder missiles",
		profiles: [
			{
				range: '35"',
				dice: 2,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.barrage },
					{ name: WeaponTraits.quake },
				],
			},
		],
	},
	{
		id: 4035,
		name: "Warhound swarmer missiles",
		profiles: [
			{
				range: '35"',
				dice: 8,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4036,
		name: "Ursus claw",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 4,
				ap: "SP",
				traits: [{ name: WeaponTraits.impale }],
			},
		],
	},
	{
		id: 4037,
		name: "Natrix shock lance",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 2,
				ap: 1,
				traits: [{ name: WeaponTraits.bypass }, { name: WeaponTraits.shockPulse }],
			},
		],
	},
	{
		id: 4038,
		name: "Graviton eradicator",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: null,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.gravitonPulse },
				],
			},
		],
	},
	{
		id: 4039,
		name: "Conversion beam dissolutor",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
			{
				range: '6"-18"',
				dice: 2,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
			{
				range: '18"-35"',
				dice: 2,
				to_hit: 2,
				ap: 4,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 4040,
		name: "Neutron laser",
		profiles: [
			{
				range: '38"',
				dice: 1,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.shockPulse }],
			},
		],
	},
	{
		id: 4041,
		name: "Volcano cannon",
		profiles: [
			{
				range: '70"',
				dice: 1,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.engineKiller, value: 2 },
				],
			},
		],
	},
	{
		id: 4042,
		name: "Ardex mega-bolter",
		profiles: [
			{
				range: '12"',
				dice: 9,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.pointDefence },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4043,
		name: "Conversion beam dissipator",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 3,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.accurate }],
			},
			{
				range: '6"-18"',
				dice: 3,
				to_hit: 3,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.demolisher },
				],
			},
			{
				range: '18"-35"',
				dice: 3,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.accurate },
					{ name: WeaponTraits.demolisher },
				],
			},
		],
	},
	{
		id: 4044,
		name: "Reaver laser blaster",
		profiles: [
			{
				range: '40"',
				dice: 3,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4045,
		name: "Reaver gatling blaster",
		profiles: [
			{
				range: '35"',
				dice: 4,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4046,
		name: "Reaver volcano cannon",
		profiles: [
			{
				range: '60"',
				dice: 1,
				to_hit: 2,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.engineKiller, value: 3 },
				],
			},
		],
	},
	{
		id: 4047,
		name: "Reaver melta cannon",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
				],
			},
			{
				range: '8"',
				dice: 2,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 4 },
				],
			},
		],
	},
	{
		id: 4048,
		name: "Reaver power fist",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 4,
				traits: [
					{ name: WeaponTraits.engineKiller, value: 1 },
					{ name: WeaponTraits.rend },
					{ name: WeaponTraits.wrecker, value: 4 },
				],
			},
		],
	},
	{
		id: 4049,
		name: "Reaver chain fist",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 4,
				traits: [
					{ name: WeaponTraits.engineKiller, value: 2 },
					{ name: WeaponTraits.rend },
					{ name: WeaponTraits.wrecker, value: 3 },
				],
			},
		],
	},
	{
		id: 4050,
		name: "Reaver volkite eradicator",
		profiles: [
			{
				range: '16"',
				dice: 3,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.beam },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4051,
		name: "Reaver apocalypse missile launcher",
		profiles: [
			{
				range: '8"-100"',
				dice: 5,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.heavyBarrage }],
			},
		],
	},
	{
		id: 4052,
		name: "Reaver vulcan mega-bolter",
		profiles: [
			{
				range: '22"',
				dice: 9,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4053,
		name: "Reaver turbo-laser destructor",
		profiles: [
			{
				range: '40"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.accurate }],
			},
		],
	},
	{
		id: 4054,
		name: "Reaver titan warp missile",
		profiles: [
			{
				range: '8"-75"',
				dice: "SP",
				to_hit: 2,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.engineKiller, value: 3 },
					{ name: WeaponTraits.limited, value: 1 },
					{ name: WeaponTraits.warp },
				],
			},
		],
	},
	{
		id: 4055,
		name: "Reaver graviton eradicator",
		profiles: [
			{
				range: '30"',
				dice: 2,
				to_hit: null,
				ap: 2,
				traits: [{ name: WeaponTraits.demolisher }, { name: WeaponTraits.gravitonPulse }],
			},
		],
	},
	{
		id: 4056,
		name: "Reaver conversion beam dissolutor",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [],
			},
			{
				range: '6"-18"',
				dice: 2,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.demolisher }],
			},
			{
				range: '18"-35',
				dice: 2,
				to_hit: 3,
				ap: 4,
				traits: [{ name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 4057,
		name: "Mori quake cannon",
		profiles: [
			{
				range: '80"',
				dice: 1,
				to_hit: 3,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.blast, value: 5 },
					{ name: WeaponTraits.quake },
				],
			},
		],
	},
	{
		id: 4058,
		name: "Belicosa volcano cannon",
		profiles: [
			{
				range: '70"',
				dice: 1,
				to_hit: 2,
				ap: 5,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.engineKiller, value: 4 },
				],
			},
		],
	},
	{
		id: 4059,
		name: "Ardex-defensor mauler bolt cannon turrets",
		profiles: [
			{
				range: '8"',
				dice: 5,
				to_hit: 5,
				ap: 2,
				traits: [{ name: WeaponTraits.lightAT }, { name: WeaponTraits.pointDefence }],
			},
		],
	},
	{
		id: 4060,
		name: "Anvilus pattern defence batteries",
		profiles: [
			{
				range: '20"',
				dice: 5,
				to_hit: 5,
				ap: 1,
				traits: [{ name: WeaponTraits.pointDefence }, { name: WeaponTraits.skyfire }],
			},
		],
	},
	{
		id: 4061,
		name: "Sunfury plasma annihilator",
		profiles: [
			{
				range: '25"',
				dice: 3,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4062,
		name: "Macro-gatling blaster",
		profiles: [
			{
				range: '35"',
				dice: 5,
				to_hit: 3,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.rapidFire }],
			},
		],
	},
	{
		id: 4063,
		name: "Arioch power claw",
		profiles: [
			{
				range: '18"',
				dice: 8,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 4,
				traits: [
					{ name: WeaponTraits.engineKiller, value: 1 },
					{ name: WeaponTraits.rend },
					{ name: WeaponTraits.wrecker, value: 5 },
				],
			},
		],
	},
	{
		id: 4064,
		name: "Apocalypse missile launcher",
		profiles: [
			{
				range: '8"-100"',
				dice: 10,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.heavyBarrage }],
			},
		],
	},
	{
		id: 4065,
		name: "Paired gatling blasters",
		profiles: [
			{
				range: '35"',
				dice: 8,
				to_hit: 4,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4066,
		name: "Paired turbo-laser destructors",
		profiles: [
			{
				range: '40"',
				dice: 4,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.accurate }, { name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4067,
		name: "Vulcan mega-bolter array",
		profiles: [
			{
				range: '22"',
				dice: 20,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4068,
		name: "Paired laser blasters",
		profiles: [
			{
				range: '40"',
				dice: 6,
				to_hit: 4,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4069,
		name: "Ardex-defensor lascannon turrets",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Rear" },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 4070,
		name: "Warlord graviton ruinator",
		profiles: [
			{
				range: '30"',
				dice: 3,
				to_hit: null,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.gravitonPulse },
				],
			},
		],
	},
	{
		id: 4071,
		name: "Conversion beam extripator",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 3,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
			{
				range: '6"-18"',
				dice: 3,
				to_hit: 3,
				ap: 3,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
			{
				range: '18"-35"',
				dice: 3,
				to_hit: 2,
				ap: 4,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
		],
	},
	{
		id: 4072,
		name: "Volkite destructor",
		profiles: [
			{
				range: '16"',
				dice: 4,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.beam },
					{ name: WeaponTraits.deflagrate },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4073,
		name: "Sinistramanus Tenebrae",
		profiles: [
			{
				range: '40"',
				dice: 3,
				to_hit: 4,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.heavyBeam },
					{ name: WeaponTraits.psi },
				],
			},
		],
	},
	{
		id: 4074,
		name: "Death pulse",
		profiles: [
			{
				range: '7"',
				dice: "D3+1",
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.psi }, { name: WeaponTraits.saturationFire }],
			},
		],
	},
	{
		id: 4075,
		name: "Antipathic tempest",
		profiles: [
			{
				range: '20"',
				dice: 1,
				to_hit: 4,
				ap: 1,
				traits: [
					{ name: WeaponTraits.blast, value: 5 },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.psi },
					{ name: WeaponTraits.quake },
				],
			},
		],
	},
	{
		id: 4076,
		name: "Suzerain class plasma destructor",
		profiles: [
			{
				range: '26"',
				dice: 4,
				to_hit: 3,
				ap: 4,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.demolisher }],
			},
			{
				range: '16"',
				dice: 2,
				to_hit: 2,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 2 },
				],
			},
		],
	},
	{
		id: 4077,
		name: "Revalator missile launcher",
		profiles: [
			{
				range: '40"',
				dice: 2,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.blast, value: 5 },
				],
			},
		],
	},
	{
		id: 4078,
		name: "Apocalypse missile array",
		profiles: [
			{
				range: '8"-100"',
				dice: 4,
				to_hit: 4,
				ap: 1,
				traits: [{ name: WeaponTraits.arc, value: "Front" }, { name: WeaponTraits.heavyBarrage }],
			},
		],
	},
	{
		id: 4079,
		name: "Melta cannon",
		profiles: [
			{
				range: '14"',
				dice: 2,
				to_hit: 4,
				ap: 3,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
				],
			},
			{
				range: '8"',
				dice: 2,
				to_hit: 3,
				ap: 4,
				traits: [
					{ name: WeaponTraits.antitank },
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.engineKiller, value: 2 },
				],
			},
		],
	},
	{
		id: 4080,
		name: "Ardex-defensor bombard turrets",
		profiles: [
			{
				range: '15"',
				dice: 4,
				to_hit: 5,
				ap: 2,
				traits: [
					{ name: WeaponTraits.barrage },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.ignoresCover },
				],
			},
		],
	},
	{
		id: 4082,
		name: "Desolator chainsword",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [
					{ name: WeaponTraits.engineKiller, value: 2 },
					{ name: WeaponTraits.reach },
					{ name: WeaponTraits.rend },
				],
			},
		],
	},
	{
		id: 4083,
		name: "Kirus siege drill",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 7,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 8 }],
			},
		],
	},
	{
		id: 4084,
		name: "Cruciator gatling array",
		profiles: [
			{
				range: '24"',
				dice: 14,
				to_hit: 5,
				ap: 1,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.shieldbane },
					{ name: WeaponTraits.shred },
				],
			},
		],
	},
	{
		id: 4085,
		name: "Kirus grav imploder",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 3,
				ap: 3,
				traits: [
					{ name: WeaponTraits.demolisher },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.quake },
				],
			},
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: 5,
				traits: [{ name: WeaponTraits.rend }, { name: WeaponTraits.wrecker, value: 5 }],
			},
		],
	},
	{
		id: 4086,
		name: "Acheron pattern flame cannon",
		profiles: [
			{
				range: '8"',
				dice: 3,
				to_hit: 4,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.ignoresCover },
					{ name: WeaponTraits.lightAT },
				],
			},
		],
	},
	{
		id: 4087,
		name: "In-built twin-linked heavy bolters",
		profiles: [
			{
				range: '12"',
				dice: 2,
				to_hit: 5,
				ap: 0,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.light },
					{ name: WeaponTraits.pointDefence },
				],
			},
		],
	},
	{
		id: 4088,
		name: "Reaper chainfist",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 4089,
		name: "Castigator pattern bolt cannon",
		profiles: [
			{
				range: '14"',
				dice: 4,
				to_hit: 5,
				ap: 2,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.lightAT },
					{ name: WeaponTraits.rapidFire },
					{ name: WeaponTraits.shieldbane },
				],
			},
		],
	},
	{
		id: 4090,
		name: "Tempest warblade",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 4091,
		name: "Shock Lance",
		profiles: [
			{
				range: "-",
				dice: null,
				to_hit: null,
				ap: "-",
				traits: [{ name: WeaponTraits.reach }, { name: WeaponTraits.rend }],
			},
		],
	},
	{
		id: 4092,
		name: "Ion gauntlet shield",
		profiles: [
			{
				range: '6"',
				dice: 2,
				to_hit: 5,
				ap: 2,
				traits: [{ name: WeaponTraits.arc, value: "Front" }],
			},
		],
	},
	{
		id: 4093,
		name: "Graviton singularity cannon",
		profiles: [
			{
				range: '16"',
				dice: 2,
				to_hit: 3,
				ap: 3,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.armourbane },
					{ name: WeaponTraits.collapsingSingularity },
				],
			},
		],
	},
	{
		id: 4094,
		name: "Atrapos lascutter",
		profiles: [
			{
				range: '6"',
				dice: 1,
				to_hit: 2,
				ap: 4,
				traits: [
					{ name: WeaponTraits.arc, value: "Front" },
					{ name: WeaponTraits.engineKiller, value: 1 },
					{ name: WeaponTraits.rend },
					{ name: WeaponTraits.wrecker, value: 3 },
				],
			},
		],
	},
]

// {
//   id:,
//   name: ,
//   profiles: [
//     {
//   range:,
//   dice:,
//   to_hit: ,
//   ap: ,
//   traits: [{name:"Arc", value:"Front"}]
// },
//   ]
// }
