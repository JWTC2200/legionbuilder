import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@type/types"
import { armouredTypes, demolisherTraits } from "../utils"
import calculateShotMultiplier from "./calculateShotMultiplier"
import calculateToHit from "./calculateToHit"
import calculateSaves from "./calculateSaves"
import { WeaponTraits } from "@type/weaponTraits"

export const calculateDamage = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): string => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetType = target.unit_type.type

	if (targetType === UNIT_TYPE.structure) {
		const canDamage = weaponTraits.filter((trait) => demolisherTraits.includes(trait))
		if (!canDamage.length) {
			return "Immune"
		}
	}

	if (weapon.range === "-" && !weapon.to_hit) {
		if (!weaponTraits.includes(WeaponTraits.wrecker) || targetType !== UNIT_TYPE.structure) {
			return "Melee"
		}
	}

	if (weaponTraits.includes(WeaponTraits.light) && armouredTypes.includes(targetType)) {
		return "0"
	}

	let finalDamage =
		(1 - calculateSaves(weapon, target)) * calculateShotMultiplier(weapon, target) * calculateToHit(weapon, target)

	if (weaponTraits.includes(WeaponTraits.deflagrate)) {
		const copyWeapon = {
			...weapon,
			traits: weapon.traits.filter((trait) => {
				if (trait.name !== WeaponTraits.deflagrate) {
					return trait
				}
			}),
		}
		const deflagrateAttack = calculateDamage(copyWeapon, target)
		if (typeof weapon.dice === "number") {
			finalDamage = finalDamage + (Number(deflagrateAttack) * Number(deflagrateAttack)) / weapon.dice
		}
	}

	return finalDamage.toFixed(2)
}

export default calculateDamage
