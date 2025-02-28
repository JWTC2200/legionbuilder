import { FACTION } from "@type/types"

export const factionColours = (faction: FACTION) => {
	if (faction === FACTION.astartes) return "text-astartes-300"
	if (faction === FACTION.solar) return "text-solar-500"
	if (faction === FACTION.mechanicum) return "text-mechanicus-500"
	if (faction === FACTION.darkMechanicum) return "text-darkMechanicus-600"
	if (faction === FACTION.strategic) return "text-strategic-300"
	if (faction === FACTION.collegiaTitanica) return "text-collegia-600"
	if (faction === FACTION.questorisFamilia) return "text-questoris-400"
}

export default factionColours
