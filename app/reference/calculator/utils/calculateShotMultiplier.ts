import { UNIT_DATASHEET, WEAPON_PROFILES } from "@/app/types"

export const calculateShotMultiplier = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET) => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	let multiplier = 1

	if (typeof weapon.dice === "number") {
		multiplier = weapon.dice
	}

	if (weapon.range === "T") {
		multiplier = 1
	}

	return multiplier
}

export default calculateShotMultiplier
