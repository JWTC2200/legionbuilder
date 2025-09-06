// ********************************************************************
// ********************** MECHANICUM FORMATIONS ***********************
// ********************************************************************

// 5000-5999

import { ALLEGIANCE, FACTION, FORMATION, SLOT_TYPE } from "@type/types"
import { supportFormationText } from "@data/formations/formationRules"

export const darkMechanicum: FORMATION[] = [
	{
		id: 5000,
		name: "Terror Protocol Cohort",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [5000, 5003, 5900, 5900] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [5001, 5001, 5003, 5003] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [8001, 4000], text: "One of the following" },
		],
		rules: [
			{
				name: "Legionbuilder note",
				text: "Due to how some of the compulsory slots can only be filled with Traitor allegiance detachments this Formation will also be classed as a Traitor Formation.",
			},
			{
				name: "Command - Urgency",
				text: `When a Detachment with the Networked Anima special rule is activated during the Movement phase, all models within it increase their Movement characteristic by 2" if the detachment is within 6" of a model with the Noosphere Controller special rule. This effect lasts until the end of the round.`,
			},
			{
				name: "Terror Protocol",
				text: "Compulsory Core Detachment slots in this Formation must be filled with Errax 'Butcher' Assault Stalker Cohort Detachments.",
			},
		],
	},
	{
		id: 5001,
		name: "Purge Protocol Cohort",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [5006, 5004, 5004] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [5005, 5005, 5000] },
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [5006, 5006, 5004, 5004],
				text: "TWO Heavy armour slots or TWO Light armour slots",
			},
			{ slot_type: SLOT_TYPE.optional, slot_id: [4001] },
		],
		rules: [
			{
				name: "Legionbuilder note",
				text: "Due to how some of the compulsory slots can only be filled with Traitor allegiance detachments this Formation will also be classed as a Traitor Formation.",
			},
			{
				name: "Command - Exterminate",
				text: "Hits scored by a model with the Noospehere Controller special rule from this Formation mark the target Detachment until the end of the round. Models from this Formation with the Networked Anima special rule may re-roll HIt rolls of a 1 when firing upon a marked Detachment.",
			},
		],
	},
	{
		id: 5002,
		name: "Swarm Protocol Cohort",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: ALLEGIANCE.traitor,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [5901, 5901, 5901] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [5003, 5003, 5003, 5004, 5004] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [4000] },
		],
		rules: [
			{
				name: "Legionbuilder note",
				text: "Due to how some of the compulsory slots can only be filled with Traitor allegiance detachments this Formation will also be classed as a Traitor Formation.",
			},
			{
				name: "Swarm Protocol",
				text: "Compulsory Vanguard Detachment slots in this Formation must be filled with Harpax 'Swarmer' Scout Host Detachments.",
			},
			{
				text: "Any Harpax 'Swarmer' Scout Host selected within a Complusory Detachment slot may be upgraded to a 'Controller Host' for +15pts. A Detachment upgraded in this way gains the Noosphere Controller and Invulnerable Save (6+) special rules.",
			},
			{
				name: "Command - Overwhelm",
				text: `Harpax 'Swarmer' Scout Host Detachments within this Formation gain the Infiltrate special rule. All Detachments from this FOrmation with the Networked Anima special rule count their Scale as 1 higher for purposes of determining if enemy Detachments are Engaged and Pinnd while within 8" of a model from this Formation with the Noosphere Controller rule.`,
			},
			{
				text: "*Note: This is only ot determine if the enemy Detachment is Engaged and Pinned - the Harpax Swarms are still Engaged and Pinned by enemy Detachments of Scale (1).",
			},
		],
	},
	{
		id: 5003,
		name: "Dark Taghma Sub-covenant",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [5000, 5002, 5002, 5902, 5902] },
			{ slot_type: SLOT_TYPE.choice, slot_id: [5000, 5001, 5002, 5003, 5005, 5004, 5010, 5903] },
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [5005, 5006],
				text: "One of the following",
			},
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [4001, 4000, 4000],
				text: "One Titan slot or TWO Knight slots",
			},
		],
		rules: [
			{
				name: "Dedicated Transports",
				text: "Any Dark Mechanicum Detachment within the Formation that contain only Infantry or Walker models may be upgraded with Triaros Armoured Conveyors as Dedicated Transports",
			},
			{
				name: "Augumented Thralls",
				text: "Compulsory Core Detachment slots in this Formation must be filled with Adsecularis Tech-thrall Covenant Detachments.",
			},
		],
	},
	{
		id: 5004,
		name: "Ironbound Ruinhost",
		faction: FACTION.darkMechanicum,
		subfaction: null,
		allegiance: null,
		formation_slots: [
			{ slot_type: SLOT_TYPE.compulsory, slot_id: [3000, 5904, 5904] },
			{ slot_type: SLOT_TYPE.optional, slot_id: [5904, 5904, 5905, 5906] },
			{
				slot_type: SLOT_TYPE.choice,
				slot_id: [5904, 5904, 5905, 5905],
				text: "TWO Support slots or TWO Vanguard slots",
			},
		],
		rules: [
			supportFormationText(FACTION.darkMechanicum),
			{
				name: "Automata Malefica",
				text: "All slots within this Support Formation must be filled by Detachments taken from the Mechanicum Taghmata Army List. Detachments taken from the Mechanicum Taghmata Army List must have the Cybernetica Cortex (X) special rule or the Cortex Controller special rule",
			},
			{
				text: `All Detachments included in this Support Formation with the Cybernetica Cortex (X) special rule replace the variant they have with Cybernetica Cortex (March, Charge) and have the Dread Aura (3") special rule`,
			},
		],
	},
]
