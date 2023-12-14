import { UNIT_DATASHEET, WEAPON_PROFILES } from "@/app/types"
import { rerollFail } from "../utils"

export const calculateToHit = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	if (typeof weapon.to_hit !== "number") {
		return 1
	}

	let finalToHit = (7 - weapon.to_hit) / 6

	if (targetRules.includes("Flyer") && !weaponTraits.includes("Skyfire")) {
		finalToHit = 1 / 6
	}
	if (targetRules.includes("Flyer") && weaponTraits.includes("Tracking")) {
		finalToHit = rerollFail(finalToHit)
	}

	if (weaponTraits.includes("Accurate")) {
		finalToHit = rerollFail(finalToHit)
	}
	if (weaponTraits.includes("Rapid Fire")) {
		finalToHit = finalToHit + 1 / 6
	}

	return finalToHit
}

export default calculateToHit
