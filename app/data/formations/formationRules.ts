import { FACTION, FORMATION_RULES } from "@type/types"

export const supportFormationText = (faction: FACTION): FORMATION_RULES => {
	return {
		name: `Support Formation (${faction})`,
		text: `This is a ${faction} Support Formation. An army can include one Support Formation for each ${faction} Formation without the Support Formation (${faction}) rule.`,
	}
}
