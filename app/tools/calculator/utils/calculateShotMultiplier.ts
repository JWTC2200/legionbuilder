import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@type/types"
import { WeaponTraits } from "@type/weaponTraits"

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
	if (weaponTraits.includes(WeaponTraits.gravitonPulse) && targetType === UNIT_TYPE.structure) {
		multiplier = multiplier * 3
	}

	return multiplier
}

export default calculateShotMultiplier
