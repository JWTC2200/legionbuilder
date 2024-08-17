import { FACTION, FORMATION, SLOT_TYPE } from "@type/types"
import { astartes } from "@data/formations/astartes"
import { solar } from "@data/formations/solar"
import { legends } from "@data/formations/legends"

export const formationData: FORMATION[] = [
	...astartes,
	...solar,
	{
		id: 1,
		name: "Legion Astranii Class Augumented Spearhead",
		faction: FACTION.astartes,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [1, 2, 3, 4, 5, 6] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [7, 8] },
		],
		rules: [
			{
				name: "Inducted Cohorts",
				text: 'All Legion HQ Detachments within this formation gain the Solar Auxilia HQ (10") Special Rule',
			},
			{
				name: "Subordinate",
				text: "Detachments and models selected from the Solar Auxilia Army List as part of this Formation do not count as [Legion Name] Detachments or models and do not gain any additional special rules associated with any Legion.",
			},
		],
	},
	// ********************************************************************
	// ******************** KNIGHTS/TITAN FORMATIONS **********************
	// ********************************************************************
	{
		id: 4000,
		name: "Knight Household Lance",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		formation_slots: [{ slot_type: SLOT_TYPE.compulsory, slot_id: [4000] }],
		rules: [
			{
				name: "Paragon of Duty",
				text: "Each Knight scion is a master of battle, trained in the tactics of their Household. As such each Knight model within this Formation that has the Independat Special rule always form its own Independent Unit, even if there are several models within a Detachment that have the same name.",
			},
		],
	},
	{
		id: 4001,
		name: "Legion Support",
		faction: FACTION.strategic,
		subfaction: null,
		allegiance: null,
		formation_slots: [{ slot_type: SLOT_TYPE.compulsory, slot_id: [4001] }],
		rules: [],
	},

	// Legends should go last
	...legends,
]
