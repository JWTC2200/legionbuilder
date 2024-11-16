import { armouredTypes } from "../utils"
import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@type/types"
import { SpecialRule } from "@type/specialRules"
import { WeaponTraits } from "@type/weaponTraits"

export const calculateAP = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	if (typeof weapon.ap === "string") {
		return 0
	}
	let ap = weapon.ap
	if (weaponTraits.includes(WeaponTraits.antitank) && [UNIT_TYPE.infantry, UNIT_TYPE.cavalry].includes(targetType)) {
		ap = 0
	}
	if (weaponTraits.includes(WeaponTraits.burrowing) && armouredTypes.includes(targetType)) {
		ap = ap + 1
	}
	if (weaponTraits.includes(WeaponTraits.lightAT) && armouredTypes.includes(targetType)) {
		ap = 0
	}
	if (weaponTraits.includes(WeaponTraits.light) && targetRules.includes(SpecialRule.armoured)) {
		ap = 0
	}

	return ap
}

export default calculateAP
