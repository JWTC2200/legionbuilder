import WeaponTraitBox from "@/app/components/WeaponTraitBox"
import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_DATASHEET, WEAPON_PROFILES } from "@/app/types"
import { Fraction, fraction, number } from "mathjs"

export const calculateDamage = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	const armouredTypes = [UNIT_TYPE.vehicle, UNIT_TYPE.heavy, UNIT_TYPE.knight, UNIT_TYPE.titan]

	const calculateToHit = () => {
		if (typeof weapon.to_hit !== "number") {
			return 1
		}

		let finalToHit = fraction(7 - weapon.to_hit, 6)

		if (weaponTraits.includes("Accurate")) {
			finalToHit = fraction(number(finalToHit) + (1 - number(finalToHit)) * number(finalToHit))
		}
		if (weaponTraits.includes("Rapid Fire")) {
			finalToHit = fraction(number(finalToHit) + 1 / 6)
		}

		return finalToHit
	}

	const rerollSuccessfulSaves = (save: Fraction) => {
		return fraction(number(save) - number((1 - number(save)) * number(save)))
	}

	const rerollFailedSaves = (save: Fraction) => {
		return fraction(number(save) + number((1 - number(save)) * number(save)))
	}

	const calculateSaves = () => {
		const finalAP = calculateAP()

		const targetSave = target.save + finalAP
		let finalArmourSave = fraction(1, 1)

		if (targetSave > 6) {
			finalArmourSave = fraction(0, 1)
		} else if (targetSave <= 1) {
			finalArmourSave = fraction(1)
		} else {
			finalArmourSave = fraction(7 - number(targetSave), 6)
		}

		if (weaponTraits.includes("Armourbane") && armouredTypes.includes(targetType)) {
			finalArmourSave = rerollSuccessfulSaves(finalArmourSave)
		}
		if (weaponTraits.includes("Light") && targetRules.includes("Armoured")) {
			finalArmourSave = rerollFailedSaves(finalArmourSave)
		}

		// array of all additional saves
		const allSaves = [finalArmourSave]
		target.special_rules.forEach((rule) => {
			if (rule.name === "Jink" || (rule.name === "Invulnerable Save" && !weaponTraits.includes("Psi"))) {
				allSaves.push(fraction(7 - Number(String(rule.value!).replace("+", "")), 6))
			}
		})

		const sortedSaves = allSaves
			.map((save) => number(save))
			.sort()
			.reverse()
		// return best target save
		return sortedSaves[0]
	}

	const calculateAP = () => {
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

	const calculateShotMultiplier = () => {
		let multiplier = 1

		if (typeof weapon.dice === "number") {
			multiplier = weapon.dice
		}

		return multiplier
	}

	const toHit = calculateToHit()
	const save = calculateSaves()
	const shots = calculateShotMultiplier()

	let finalDamage = (1 - save) * shots * number(toHit)

	if (weaponTraits.includes("Light") && armouredTypes.includes(targetType)) {
		return 0
	}

	return Number(number(finalDamage).toFixed(2))
}
