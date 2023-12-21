import { armouredTypes } from "../utils"
import { UNIT_DATASHEET, WEAPON_PROFILES } from "@/app/types"
import { UNIT_TYPE } from "@/app/types"

export const calculateAP = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	if (typeof weapon.ap === "string") {
		return 0
	}
	let ap = weapon.ap
	if (weaponTraits.includes("Anti-tank") && [UNIT_TYPE.infantry, UNIT_TYPE.cavalry].includes(targetType)) {
		ap = 0
	}
	if (weaponTraits.includes("Burrowing") && armouredTypes.includes(targetType)) {
		ap = ap + 1
	}
	if (weaponTraits.includes("Light AT") && armouredTypes.includes(targetType)) {
		ap = 0
	}
	if (weaponTraits.includes("Light") && targetRules.includes("Armoured")) {
		ap = 0
	}

	return ap
}

export default calculateAP
