import React, { useState, useEffect } from "react"
import { calculatorWeapons } from "../state"
import { unitData } from "@/app/data/unit_data"
import { weapons } from "@/app/data/weapon_data"
import { CALCWEAPON } from "../state"
import { sortedByNameKey } from "@/app/utils/sorting"

const AttackingUnit = () => {
	const [unitOrWeapon, setUnitOrWeapon] = useState<boolean>(true)
	const [selectedAttacker, setSelectedAttacker] = useState<string>("")
	const [attackerFilter, setAttackerFilter] = useState<string>("")
	const { setCalcWeapons, clearCalcWeapons } = calculatorWeapons()

	const handleAddUnitWeapons = (selectedAttack: string) => {
		if (unitOrWeapon) {
			const unit = unitData.find((unit) => unit.id === Number(selectedAttack))
			if (unit) {
				let weaponSheets: CALCWEAPON[] = []
				unit.weapons.forEach((weaponId) => {
					const weaponInfo = weapons.find((weapon) => weapon.id === weaponId)
					if (weaponInfo) {
						weaponSheets.push({ ...weaponInfo, number: 1 })
					}
				})
				setCalcWeapons({ weapons: weaponSheets, name: unit.name })
			}
		} else {
			const weapon = weapons.find((weapon) => weapon.id === Number(selectedAttack))
			if (weapon) {
				setCalcWeapons({ weapons: [{ ...weapon, number: 1 }], name: "" })
			}
		}
	}

	const swapUnitOrWeapons = () => {
		setSelectedAttacker("")
		setUnitOrWeapon((prev) => !prev)
	}

	useEffect(() => {
		if (selectedAttacker) {
			handleAddUnitWeapons(selectedAttacker)
		} else {
			clearCalcWeapons()
		}
	}, [selectedAttacker])

	return (
		<section className="w-full text-primary-950">
			<h3 className="font-graduate text-center text-primary-400 text-xl mb-2">
				{unitOrWeapon ? "Unit" : "Weapon"} /
				<button onClick={swapUnitOrWeapons} className="text-sm ml-2 hover:text-primary-100 active:text-primary-100">
					{unitOrWeapon ? "Weapon" : "Unit"}
				</button>
			</h3>
			<input type="text" name="attacker" id="attacker" placeholder={`Search ${unitOrWeapon ? " units" : "weapons"}`} className="bg-dataslate w-full p-4 font-graduate placeholder:text-primary-800 focus:outline-none" value={attackerFilter} onChange={(e) => setAttackerFilter(e.target.value)} />
			<select className="w-full bg-dataslate p-4 font-graduate placeholder:text-primary-950 focus:outline-none" value={selectedAttacker} onChange={(e) => setSelectedAttacker(e.target.value)}>
				<option value={""}>Select {unitOrWeapon ? "attacking unit" : "weapon"}</option>
				{(unitOrWeapon ? sortedByNameKey(unitData) : sortedByNameKey(weapons))
					.filter((entry) => entry.name.toLowerCase().includes(attackerFilter.toLowerCase().trim()))
					.map((filteredEntries) => (
						<option key={"unit" + filteredEntries.id} value={filteredEntries.id} className="text-black">
							{filteredEntries.name}
						</option>
					))}
			</select>
		</section>
	)
}

export default AttackingUnit
