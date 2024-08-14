import { ALLEGIANCE, DETACHMENT, DETACHMENT_TYPE, FACTION } from "@type/types"

// knights-titans 4000-4999,
export const strategicAssets: DETACHMENT[] = [
	{
		id: 4000,
		name: "Questoris Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 180,
		base_size: 1,
		max_size: 6,
		break_strength: 3,
		main_unit: [4000],
		related_unit: [4001, 4002, 4003, 4004],
		dataslate_loadout: [
			{
				text: "Each Questoris Knight has one of the following weapon loadouts:",
				text_option: [
					"Knight Errant: Thermal Cannon, heavy stubber and a Reaper chainsword*",
					"Knight Paladin: Rapid-fire battlecannon, heavy stubber and a Reaper chainsword*",
					"Knight Warden: Questoris-avenger gatling cannon, meltagun and a Reaper chainsword*",
					"Knight Gallant: Thunderstrike gauntlet, meltagun and a Reaper chainsword*",
					"Knight Crusader: Heavy stubber and either a Questoris-avenger gatling cannon and thermal cannon, or a rapid-fire battlecannon and thermal cannon*",
				],
			},
			{
				text: "For +15pts, a Questoris Knight may have one of the following weapon loadouts instead:",
				text_option: ["Knight Styrix", "Knight magaera"],
			},
			{
				itallic_text:
					"* A Questoris Knight with this loadout may also be equipped with rocket pods for +5 points",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4000,
				options: [
					{ number: 1, cost: 180, size: 1, break_strength: 3 },
					{ number: 2, cost: 340, size: 2, break_strength: 3 },
				],
			},
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moirax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Errant", cost: 0, td_ek: 10 },
					{ name: "Knight Warden", cost: 0 },
					{ name: "Knight Crusader", cost: 0, td_ek: 10 },
					{ name: "Knight Paladin", cost: 0 },
					{ name: "Knight Gallant", cost: 0 },
					{ name: "Knight Styrix", cost: 15 },
					{ name: "Knight Magaera", cost: 15 },
				],
			},
			{
				location: "Back",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Rocket Pods", cost: 5 },
				],
			},
			{
				location: "Arm",
				options: [
					{ name: "None", cost: 0 },
					{ name: "Thunderstrike Gauntlet", cost: 2 },
				],
			},
		],
		datasheet_info: [
			{
				text: "Questoris Knights can exchange their Reaper chainsword for a thunderstrike gauntlet for +2 points per model.",
			},
			{
				text: "A Questoris Knight Banner can purchase one of the following upgrades:",
				options: [
					{
						text: "1 additional Knight",
						cost: 180,
					},
					{ text: "2 additional Knights", cost: 340 },
				],
			},
			{
				text: "In addition, a Questoris Knight Banner may purchase one of the following upgrades:",
				options: [
					{
						text: "Questoris Knight Armiger Talon",
						cost: 180,
					},
					{ text: "Mechanicum Knight Moriax Talon", cost: 200 },
				],
				info: "This upgrade increases the Detachment size by 3",
			},
		],
	},
	{
		id: 4001,
		name: "Acastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 250,
		base_size: 1,
		max_size: 5,
		break_strength: 3,
		main_unit: [4005],
		related_unit: [4003, 4004],
		dataslate_loadout: [
			{
				text_option: [
					"Two Twin magana lascannon",
					"Acastus lascannon or Acastus autocannon",
					"Ironstorm missile pod or Helios defence missiles",
				],
			},
			{
				text: "Any Acastus Knight may exchange all of its weapons for the following, for +20pts",
				text_option: ["Two conversion beam cannon", "Volkite culverin", "Karacnos mortar battery"],
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4005,
				options: [{ number: 1, cost: 250, size: 1, break_strength: 3 }],
			},
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moriax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Two Twin magana lascannon", cost: 0 },
					{ name: "Two conversion beam cannon", cost: 20 },
				],
			},
			{
				location: "Chest",
				options: [
					{ name: "Acastus lascannon", cost: 0 },
					{ name: "Acastus autocannon", cost: 0 },
					{ name: "Volkite culverin", cost: 0 },
				],
			},
			{
				location: "Back",
				options: [
					{ name: "Ironstorm missile pod", cost: 0 },
					{ name: "Helios defence missiles", cost: 0 },
					{ name: "Karacnos mortar battery", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "An Acastus Knight Banner can increase its Detachment size by 1 for +250pts",
			},
			{
				text: "In addition, a Acastus Knight Banner may purchase one of the following upgrades:",
				options: [
					{
						text: "Questoris Knight Armiger Talon",
						cost: 180,
					},
					{ text: "Mechanicum Knight Moriax Talon", cost: 200 },
				],
				info: "This upgrade increases the Detachment size by 3",
			},
		],
	},
	{
		id: 4002,
		name: "Warhound Hunting Pack",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 330,
		base_size: 1,
		max_size: 3,
		break_strength: 4,
		main_unit: [4006],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Warhound Titans have two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Inferno gun",
					"Vulcan mega-bolter",
					"Turbo-laser destructor",
					"Plasma blastgun",
					"Graviton eradicator",
					"Conversion beam dissolutor",
					"Ursus claw",
					"Natrix shock lance",
					"Incisor pattern melta lance",
					"Volkite eradicator",
					"Warhound shudder missiles",
					"Warhound swarmer missiles",
				],
			},
		],
		upgrade_options: [
			{
				name: "Additional Warhound",
				unit_ref: 4006,
				options: [
					{ number: 1, cost: 330, size: 1, break_strength: 4 },
					{ number: 2, cost: 640, size: 2, break_strength: 4 },
				],
			},
		],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastgun", cost: 0 },
					{ name: "Graviton eradicator", cost: 0 },
					{ name: "Conversion beam dissolutor", cost: 0 },
					{ name: "Ursus claw", cost: 0 },
					{ name: "Natrix shock lance", cost: 0 },
					{ name: "Incisor pattern melta lance", cost: 0, td_ek: 20 },
					{ name: "Volkite eradicator", cost: 0 },
					{ name: "Warhound shudder missiles", cost: 0 },
					{ name: "Warhound swarmer missiles", cost: 0 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastgun", cost: 0 },
					{ name: "Graviton eradicator", cost: 0 },
					{ name: "Conversion beam dissolutor", cost: 0 },
					{ name: "Ursus claw", cost: 0 },
					{ name: "Natrix shock lance", cost: 0 },
					{ name: "Incisor pattern melta lance", cost: 0, td_ek: 20 },
					{ name: "Volkite eradicator", cost: 0 },
					{ name: "Warhound shudder missiles", cost: 0 },
					{ name: "Warhound swarmer missiles", cost: 0 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Warhound Hunting pack can purchase one of the following upgrades:",
				options: [
					{
						text: "Increase the Detachment size by 1",
						cost: 330,
					},
					{
						text: "Increase the Detachment size by 2",
						cost: 640,
					},
				],
			},
		],
	},
	{
		id: 4003,
		name: "Dire Wolf Heavy Scout Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 385,
		base_size: 1,
		max_size: 1,
		break_strength: 4,
		main_unit: [4007],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Ardex mega-bolters", "Neutron laser or Volcano cannon or Conversion beam dissipator"],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Back",
				options: [
					{ name: "Neutron laser", cost: 0 },
					{ name: "Volcano cannon", cost: 0, td_ek: 20 },
					{ name: "Conversion beam dissipator", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4004,
		name: "Reaver Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 415,
		base_size: 1,
		max_size: 1,
		break_strength: 5,
		main_unit: [4008],
		related_unit: [],
		dataslate_loadout: [
			{
				text: "Reaver Titans have two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Reaver laser blaster",
					"Reaver gatling blaster",
					"Reaver volcano cannon",
					"Reaver melta cannon",
					"Reaver power fist",
					"Reaver chainfist",
				],
			},
			{
				text: "Reaver Titans also have one weapon chosen from the list below:",
				text_option: [
					"Reaver apocalypse missile launcher",
					"Reaver vulcan mega-bolter",
					"Reaver titan warp missile",
					"Reaver turbo-laser destructor",
					"Reaver volkite eradicator",
					"Reaver graviton eradicator",
					"Reaver conversion beam dissolutor",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
					{ name: "Reaver power fist", cost: 0 },
					{ name: "Reaver chainfist", cost: 0 },
				],
			},
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
					{ name: "Reaver power fist", cost: 0 },
					{ name: "Reaver chainfist", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Reaver apocalypse missile launcher", cost: 0 },
					{ name: "Reaver vulcan mega-bolter", cost: 0 },
					{ name: "Reaver titan warp missile", cost: 0, td_ek: 30 },
					{ name: "Reaver turbo-laser destructor", cost: 0 },
					{ name: "Reaver volkite eradicator", cost: 0 },
					{ name: "Reaver graviton eradicator", cost: 0 },
					{ name: "Reaver conversion beam dissolutor", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4005,
		name: "Warbringer Nemesis Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 525,
		base_size: 1,
		max_size: 1,
		break_strength: 5,
		main_unit: [4009],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Anvillus pattern defence batteries",
					"Ardex-defensor mauler bolt cannon turrets",
					"Mori quake cannon or Belicosa volcano cannon",
				],
			},
			{
				text: "In addition, a Warbringer Nemesis Titan has two weapons chosen from the list below - it may choose two of the same weapon:",
				text_option: [
					"Reaver laser blaster",
					"Reaver gatling blaster",
					"Reaver volcano cannon",
					"Reaver melta cannon",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Reaver laser blaster", cost: 0 },
					{ name: "Reaver gatling blaster", cost: 0 },
					{ name: "Reaver volcano cannon", cost: 0, td_ek: 30 },
					{ name: "Reaver melta cannon", cost: 0, td_ek: 40 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Belicosa volcano cannon", cost: 0, td_ek: 40 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4006,
		name: "Warlord Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 600,
		base_size: 1,
		max_size: 1,
		break_strength: 6,
		main_unit: [4010],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: ["Ardex-defensor mauler bolt cannon turrets", "Ardex-defensor lascannon turrets"],
			},
			{
				text: "In addition, a Warlord Battle Titan has two weapons chosen from the list below - it may choose two of the same weapon:",
				text_option: [
					"Belicosa volcano cannon",
					"Sunfury plasma annihilator",
					"Macro-gatling blaster",
					"Mori quake cannon",
					"Arioch power claw",
					"Volkite destructor",
					"Warlord graviton ruinator",
					"Conversion beam extripator",
				],
			},
			{
				text: "Warlord Battle Titans also have one weapon chosen from the list below:",
				text_option: [
					"Apocalypse missile launchers",
					"Paired gatling blasters",
					"Paired turbo-laser destructors",
					"Vulcan mega-bolter array",
					"Paired laser blasters",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm 1",
				options: [
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Arm 2",
				options: [
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Apocalypse missile launchers", cost: 0 },
					{ name: "Paired gatling blasters", cost: 0 },
					{ name: "Paired turbo-laser destructors", cost: 0 },
					{ name: "Vulcan mega-bolter array", cost: 0 },
					{ name: "Paired laser blasters", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4007,
		name: "Warlord-Sinister Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: ALLEGIANCE.loyalist,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 675,
		base_size: 1,
		max_size: 1,
		break_strength: 6,
		main_unit: [4011],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Sinistramanus Tenebrae",
					"Arioch Power Claw",
					"Death Pulse",
					"Antipathic tempest",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
				],
			},
			{
				text: "In addition, a Warlord-Sinister Battle Titan has one weapon chosen from the list below",
				text_option: [
					"Apocalypse missile launchers",
					"Paired gatling blasters",
					"Paired turbo-laser destructors",
					"Vulcan mega-bolter array",
					"Paired laser blasters",
				],
			},
			{
				text: "Warlord-Sinister Battle Titans may exchange its Arioch power claw for one of the following:",
				text_option: [
					"Belicosa volcano cannon",
					"Sunfury plasma annihilator",
					"Macro-gatling blaster",
					"Mori quake cannon",
					"Volkite destructor",
					"Warlord graviton ruinator",
					"Conversion beam extripator",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm weapon",
				options: [
					{ name: "Arioch power claw", cost: 0 },
					{ name: "Belicosa Volcano Cannon", cost: 0, td_ek: 40 },
					{ name: "Sunfury plasma annihilator", cost: 0 },
					{ name: "Macro-gatling blaster", cost: 0 },
					{ name: "Mori quake cannon", cost: 0 },
					{ name: "Volkite destructor", cost: 0 },
					{ name: "Warlord graviton ruinator", cost: 0 },
					{ name: "Conversion beam extripator", cost: 0 },
				],
			},
			{
				location: "Carapace",
				options: [
					{ name: "Apocalypse missile launchers", cost: 0 },
					{ name: "Paired gatling blasters", cost: 0 },
					{ name: "Paired turbo-laser destructors", cost: 0 },
					{ name: "Vulcan mega-bolter array", cost: 0 },
					{ name: "Paired laser blasters", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4008,
		name: "Warmaster Heavy Battle Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 750,
		td_ek: 40,
		base_size: 1,
		max_size: 1,
		break_strength: 7,
		main_unit: [4012],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Two Suzerain class plasma destructors",
					"Revalator missile launcher",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
					"Anvilus pattern defence batteries or Ardex-defensor bomard turrets",
				],
			},
			{
				text: "In addition, a Warmaster Titan has two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Apocalypse missile array",
					"Melta cannon",
					"Inferno gun",
					"Vulcan mega-bolter",
					"Turbo-laser destructor",
					"Plasma blastun",
				],
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Shoulder 1",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Shoulder 2",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Turrets",
				options: [
					{ name: "Anvilus pattern defence batteries", cost: 0 },
					{ name: "Ardex-defensor bomard turrets", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4009,
		name: "Warmaster Iconoclast Titan",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.titan],
		base_cost: 750,
		base_size: 1,
		max_size: 1,
		break_strength: 7,
		main_unit: [4013],
		related_unit: [],
		dataslate_loadout: [
			{
				text_option: [
					"Desolator chainsword",
					"Kirius siege drill",
					"Ardex-defensor mauler bolt cannon turrets",
					"Ardex-defensor lascannon turrets",
					"Anvilus pattern defence batteries or Ardex-defensor bomard turrets",
					"Cruciator gatling array",
				],
			},
			{
				text: "In addition, a Warmaster Iconoclast has two weapons chosen from the list below - it may choose two of the same weapon",
				text_option: [
					"Apocalypse missile array",
					"Melta cannon",
					"Inferno gun",
					"Vulcan mega-bolter",
					"Turbo-laser destructor",
					"Plasma blastun",
				],
			},
			{
				text: "A Warmaster Iconoclast can exchange its Kirus siege drill for a Kirus grav imploder for +10pts",
			},
		],
		upgrade_options: [],
		loadout_options: [
			{
				location: "Arm",
				options: [
					{ name: "Kirus siege drill", cost: 0 },
					{ name: "Kirus grav imploder", cost: 10 },
				],
			},
			{
				location: "Shoulder 1",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Shoulder 2",
				options: [
					{ name: "Apocalypse missile array", cost: 0 },
					{ name: "Melta cannon", cost: 0, td_ek: 20 },
					{ name: "Inferno gun", cost: 0 },
					{ name: "Vulcan mega-bolter", cost: 0 },
					{ name: "Turbo-laser destructor", cost: 0 },
					{ name: "Plasma blastun", cost: 0 },
				],
			},
			{
				location: "Turrets",
				options: [
					{ name: "Anvilus pattern defence batteries", cost: 0 },
					{ name: "Ardex-defensor bomard turrets", cost: 0 },
				],
			},
		],
		datasheet_info: [],
	},
	{
		id: 4010,
		name: "Cerastus Knight Banner",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		unique: false,
		detachment_type: [DETACHMENT_TYPE.knight],
		base_cost: 215,
		base_size: 1,
		max_size: 6,
		break_strength: 3,
		main_unit: [4014],
		related_unit: [4015, 4003, 4004],
		dataslate_loadout: [
			{
				text: "Each Cerastus Knight has one of the following weapon loadouts:",
				text_option: [
					"Knight Acheron: Acheron pettern flame cannon, Reaper chainfist and in-build twin-linked heavy bolters",
					"Knight Castigator: Castigator pattern bolt cannon and a Tempest Warblade",
					"Knight Lancer: Shock Lance and an Ion gauntlet shield",
				],
			},
			{
				text: "For +20 points, a Cerastus Knight may have one of the following loadouts instead:",
				text_option: ["Cerastus Knight Atrapos"],
			},
			{
				itallic_text: "A Knight Lancer exchanges the Ion Shield (4+) special rule for Ion Shield (3+)",
			},
		],
		upgrade_options: [
			{
				name: "Additional Knight",
				unit_ref: 4014,
				options: [
					{ number: 1, cost: 200, size: 1, break_strength: 3 },
					{ number: 2, cost: 390, size: 2, break_strength: 3 },
				],
			},
			{
				name: "Armiger Talon",
				unit_ref: 4003,
				options: [{ number: 1, cost: 180, td_ek: 30, size: 3, break_strength: 2 }],
			},
			{
				name: "Moirax Talon",
				unit_ref: 4004,
				options: [{ number: 1, cost: 200, size: 3, break_strength: 2 }],
			},
		],
		loadout_options: [
			{
				location: "Chassis",
				options: [
					{ name: "Knight Acheron", cost: 0 },
					{ name: "Knight Castigator", cost: 0 },
					{ name: "Knight Lancer", cost: 0 },
					{ name: "Knight Atropos", cost: 20 },
				],
			},
		],
		datasheet_info: [
			{
				text: "A Cerastus Knight Banner can purchase one of the following upgrades:",
				options: [
					{
						text: "1 additional Knight",
						cost: 200,
					},
					{ text: "2 additional Knights", cost: 390 },
				],
			},
			{
				text: "In addition, a Cerastus Knight Banner may purchase one of the following upgrades:",
				options: [
					{
						text: "Questoris Knight Armiger Talon",
						cost: 180,
					},
					{ text: "Mechanicum Knight Moriax Talon", cost: 200 },
				],
				info: "This upgrade increases the Detachment size by 3",
			},
		],
	},
]
