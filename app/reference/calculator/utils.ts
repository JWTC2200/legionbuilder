import { UNIT_DATASHEET, UNIT_TYPE, WEAPON_PROFILES } from "@/app/types"

export const calculateDamage = (weapon: WEAPON_PROFILES, target: UNIT_DATASHEET): string => {
	const weaponTraits = weapon.traits.map((trait) => trait.name)
	const targetRules = target.special_rules.map((rule) => rule.name)
	const targetType = target.unit_type.type

	const armouredTypes = [UNIT_TYPE.vehicle, UNIT_TYPE.heavy, UNIT_TYPE.knight, UNIT_TYPE.titan]

	const calculateToHit = () => {
		if (typeof weapon.to_hit !== "number") {
			return 1
		}

		let finalToHit = (7 - weapon.to_hit) / 6

		if (targetRules.includes("Flyer") && !weaponTraits.includes("Skyfire")) {
			finalToHit = 1 / 6
		}
		if (targetRules.includes("Flyer") && weaponTraits.includes("Tracking")) {
			finalToHit = rerollFail(finalToHit)
		}

		if (weaponTraits.includes("Accurate")) {
			finalToHit = finalToHit + (1 - finalToHit) * finalToHit
		}
		if (weaponTraits.includes("Rapid Fire")) {
			finalToHit = finalToHit + 1 / 6
		}

		return finalToHit
	}

	const calculateSaves = () => {
		const finalAP = calculateAP()

		const targetSave = target.save + finalAP
		let finalArmourSave = 1

		if (targetSave > 6) {
			finalArmourSave = 0
		} else if (targetSave <= 1) {
			finalArmourSave = 1
		} else {
			finalArmourSave = (7 - targetSave) / 6
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

		if (weapon.range === "T") {
			multiplier = 1
		}

		return multiplier
	}

	if (weapon.range === "-" && !weapon.to_hit) {
		return "melee"
	}
	if (weaponTraits.includes("Light") && armouredTypes.includes(targetType)) {
		return "0"
	}
	// console.log(`tohit: ${calculateToHit()}, saves: ${calculateSaves()}, shots: ${calculateShotMultiplier()}`)

	let finalDamage = (1 - calculateSaves()) * calculateShotMultiplier() * calculateToHit()

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

const rerollSuccess = (save: number) => {
	return save - (1 - save) * save
}

const rerollFail = (save: number) => {
	return save + (1 - save) * save
}
