import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@/app/types"
import { rerollFail } from "./rerolls"

export const calculateToHit = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	let finalToHit

	if (typeof weapon.to_hit !== "number") {
		finalToHit = 1
	} else {
		finalToHit = (7 - weapon.to_hit) / 6
	}

	if (weaponTraits.includes("Graviton Pulse") && targetType !== UNIT_TYPE.structure) {
		if (targetRules.includes("Flyer") && !weaponTraits.includes("Skyfire")) {
			finalToHit = 1 / 6
		} else {
			finalToHit = (7 - target.save) / 6
		}
	} else if (weaponTraits.includes("Graviton Pulse") && targetType === UNIT_TYPE.structure) {
		return 2 / 3
	}

	if (targetRules.includes("Flyer") && !weaponTraits.includes("Skyfire")) {
		finalToHit = 1 / 6
	}
	// 1 always misses, 6 always hits.
	if (finalToHit > 5 / 6) {
		finalToHit = 5 / 6
	}
	if (finalToHit < 1 / 6) {
		finalToHit = 1 / 6
	}

	// multipliers after
	if (targetRules.includes("Flyer") && weaponTraits.includes("Tracking")) {
		finalToHit = rerollFail(finalToHit)
	}

	if (weaponTraits.includes("Accurate")) {
		finalToHit = rerollFail(finalToHit)
	}
	if (targetType === UNIT_TYPE.structure) {
		finalToHit = finalToHit + 1 / 6
	}

	if (weaponTraits.includes("Rapid Fire")) {
		finalToHit = finalToHit + 1 / 6
	}

	return finalToHit
}

export default calculateToHit
