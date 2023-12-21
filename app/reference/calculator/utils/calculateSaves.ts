import { UNIT_TYPE } from "@/app/types"
import { rerollFail, rerollSuccess } from "./rerolls"
import { armouredTypes } from "../utils"
import { UNIT_DATASHEET, WEAPON_PROFILES } from "@/app/types"
import calculateAP from "./calculateAP"
import { twoDiceOdds } from "./diceOdds"

export const calculateSaves = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	const finalAP = calculateAP(weapon, target)

	const targetSave = target.save + finalAP
	let finalArmourSave = 1

	if (targetType === UNIT_TYPE.structure) {
		const structureSave = weaponTraits.includes("Bunker Buster") ? targetSave + finalAP : targetSave
		if (structureSave > 12) {
			finalArmourSave = 0
		} else if (structureSave <= 2) {
			console.log("FAU")
			finalArmourSave = 1
		} else {
			const probability = twoDiceOdds
				.filter((value) => value.value >= structureSave)
				.map((dice) => dice.probability)
				.reduce((acc, sum) => acc + sum, 0)
			finalArmourSave = probability
		}
	} else {
		if (targetSave > 6) {
			finalArmourSave = 0
		} else if (targetSave <= 1) {
			finalArmourSave = 1
		} else {
			finalArmourSave = (7 - targetSave) / 6
		}
	}

	if (weaponTraits.includes("Armourbane") && armouredTypes.includes(targetType)) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}
	if (weaponTraits.includes("Light") && targetRules.includes("Armoured")) {
		finalArmourSave = rerollFail(finalArmourSave)
	}
	if (weaponTraits.includes("Shred") && [UNIT_TYPE.infantry, UNIT_TYPE.cavalry, UNIT_TYPE.walker].includes(targetType)) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}
	if (weaponTraits.includes("Neutron-flux") && targetRules.includes("Cybernetica Cortex")) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}

	// array of all additional saves
	const allSaves = [finalArmourSave]
	target.special_rules.forEach((rule) => {
		if (rule.name === "Jink" || (rule.name === "Invulnerable Save" && !weaponTraits.includes("Psi"))) {
			allSaves.push((7 - Number(String(rule.value!).replace("+", ""))) / 6)
		}
	})
	if (targetRules.includes("Explorator Adaptation")) {
		if (weaponTraits.includes("Barrage") || weaponTraits.includes("Heavy Barrage") || weaponTraits.includes("Blast")) {
			allSaves.push(1 / 6)
		}
	}

	const sortedSaves = allSaves
		.map((save) => save)
		.sort()
		.reverse()
	// return best target save
	return sortedSaves[0]
}

export default calculateSaves
