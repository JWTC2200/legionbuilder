import { rerollFail, rerollSuccess } from "./rerolls"
import { armouredTypes } from "../utils"
import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@type/types"
import calculateAP from "./calculateAP"
import { twoDiceOdds } from "./diceOdds"
import { SpecialRule } from "@type/specialRules"
import { WeaponTraits } from "@type/weaponTraits"

export const calculateSaves = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): number => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	const finalAP = calculateAP(weapon, target)

	const targetSave = target.save + finalAP
	let finalArmourSave: number

	if (targetType === UNIT_TYPE.structure) {
		const structureSave = weaponTraits.includes(WeaponTraits.bunkerBuster) ? targetSave + finalAP : targetSave
		if (structureSave > 12) {
			finalArmourSave = 0
		} else if (structureSave <= 2) {
			finalArmourSave = 1
		} else {
			const probability = twoDiceOdds
				.filter((value) => value.value >= structureSave)
				.map((dice) => dice.probability)
				.reduce((acc, sum) => acc + sum, 0)

			if (targetType === UNIT_TYPE.structure && weaponTraits.includes(WeaponTraits.gravitonPulse)) {
				finalArmourSave = 1 - probability
			} else {
				finalArmourSave = probability
			}
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

	if (weaponTraits.includes(WeaponTraits.armourbane) && armouredTypes.includes(targetType)) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}
	if (weaponTraits.includes(WeaponTraits.light) && targetRules.includes(SpecialRule.armoured)) {
		finalArmourSave = rerollFail(finalArmourSave)
	}
	if (
		weaponTraits.includes(WeaponTraits.shred) &&
		[UNIT_TYPE.infantry, UNIT_TYPE.cavalry, UNIT_TYPE.walker].includes(targetType)
	) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}
	if (weaponTraits.includes(WeaponTraits.neutronFlux) && targetRules.includes(SpecialRule.cyberneticaCortex)) {
		finalArmourSave = rerollSuccess(finalArmourSave)
	}

	// array of all additional saves
	const allSaves = [finalArmourSave]
	target.special_rules.forEach((rule) => {
		if (
			rule.name === SpecialRule.jink ||
			(rule.name === SpecialRule.invulnerableSave && !weaponTraits.includes(WeaponTraits.psi))
		) {
			allSaves.push((7 - Number(String(rule.value!).replace("+", ""))) / 6)
		}
	})
	if (targetRules.includes(SpecialRule.exploratorAdaptation)) {
		if (
			weaponTraits.includes(WeaponTraits.barrage) ||
			weaponTraits.includes(WeaponTraits.heavyBarrage) ||
			weaponTraits.includes(WeaponTraits.blast)
		) {
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
