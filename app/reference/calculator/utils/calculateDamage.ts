import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@/app/types"
import { armouredTypes, demolisherTraits } from "../utils"
import calculateShotMultiplier from "./calculateShotMultiplier"
import calculateToHit from "./calculateToHit"
import calculateSaves from "./calculateSaves"

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
		if (!weaponTraits.includes("Wrecker") || targetType !== UNIT_TYPE.structure) {
			return "Melee"
		}
	}

	if (weaponTraits.includes("Light") && armouredTypes.includes(targetType)) {
		return "0"
	}

	let finalDamage =
		(1 - calculateSaves(weapon, target)) * calculateShotMultiplier(weapon, target) * calculateToHit(weapon, target)

	if (weaponTraits.includes("Deflagrate")) {
		const copyWeapon = {
			...weapon,
			traits: weapon.traits.filter((trait) => {
				if (trait.name !== "Deflagrate") {
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
