"use client"

import React, { useState } from "react"
import { unitData } from "@/app/data/unit_data"
import { weapons } from "@/app/data/weapon_data"
import Main from "@/app/components/Main"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { calculatorWeapons, calculatorTarget, CALCWEAPON } from "./state"

const page = () => {
	const [selectedUnit, setSelectedUnit] = useState<string>("")
	const [attackerFilter, setAttackerFilter] = useState<string>("")
	const [selectedTarget, setSelectedTarget] = useState<string>("")
	const [targetFilter, setTargetFilter] = useState<string>("")
	const { calcWeapons, setCalcWeapons, clearCalcWeapons } = calculatorWeapons()
	const { calcTargets, setTargetUnit, clearTargetUnit } = calculatorTarget()

	const handleAddUnitWeapons = () => {
		if (!selectedUnit) {
			clearCalcWeapons()
			return
		}
		const unit = unitData.find((unit) => unit.id === Number(selectedUnit))
		if (unit) {
			let weaponSheets: CALCWEAPON[] = []
			unit.weapons.forEach((weaponId) => {
				const weaponInfo = weapons.find((weapon) => weapon.id === weaponId)
				if (weaponInfo) {
					weaponSheets.push({ ...weaponInfo, number: 1 })
				}
			})
			setCalcWeapons(weaponSheets)
		}
	}

	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<Crumb href="/reference/calculator">Calculator</Crumb>
			</BreadCrumbs>
			<section className="flex flex-col w-full p-4 border">
				{/* Results */}
				<div className="w-full border">
					{calcWeapons.map((weapon) => (
						<p key={weapon.id}>
							{weapon.name}
							{weapon.number}
						</p>
					))}
				</div>
				{/* Attacker & Target selectors */}
				<div className="flex flex-col md:flex-row justify-center items-center">
					{/* weapon/unit select */}
					<div className="border w-full">
						<div>
							<input value={attackerFilter} onChange={(e) => setAttackerFilter(e.target.value)} className="bg-inherit" />
							<select className="bg-inherit" value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
								<option value={""}>Select a unit</option>
								{unitData
									.filter((unitName) => unitName.name.toLowerCase().includes(attackerFilter.toLowerCase().trim()))
									.map((unit) => (
										<option key={"unit" + unit.id} value={unit.id} className="bg-secondary-900">
											{unit.name}
										</option>
									))}
							</select>
							<button type="button" onClick={handleAddUnitWeapons}>
								Select Unit
							</button>
						</div>
					</div>
					{/* target select */}
					<div className="border w-full">hello</div>
				</div>
			</section>
		</Main>
	)
}

export default page
