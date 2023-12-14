import React from "react"

import AttackWeapon from "./AttackWeapon"
import { FiRefreshCw } from "@react-icons/all-files/fi/FiRefreshCw"
import { calculatorWeapons } from "../state"
import { unitData } from "@/app/data/unit_data"
import { weapons } from "@/app/data/weapon_data"

const AttackDisplay = () => {
	const { calcWeapons, calcUnit, setCalcWeapons } = calculatorWeapons()

	const resetWeapons = () => {
		if (calcUnit) {
			const unit = unitData.find((unit) => unit.name === calcUnit)!
			const weaponsArray = unit.weapons.map((weapon) => weapons.find((dataId) => dataId.id === weapon)!)
			setCalcWeapons({ weapons: weaponsArray, name: unit.name })
		}
	}

	return (
		<div className="w-full py-4 bg-dataslate clip-path-halfagon-lg">
			<div className="bg-backgrounds-950 py-2 flex items-center justify-between mx-4">
				<button onClick={resetWeapons} className="ml-2 hover:text-primary-100">
					<FiRefreshCw />
				</button>
				<h4 className="font-graduate text-lg text-center mx-4">{calcUnit ? calcUnit : calcWeapons.length ? calcWeapons[0].name : "Select a weapon or unit"}</h4>
				<FiRefreshCw className="mr-2 text-backgrounds-950" />
			</div>

			<div className="mx-4">
				<div className="">
					<header className="flex bg-backgrounds-950 border-t border-primary-400">
						<div className="basis-[56%] pl-2">Weapon</div>
						<div className="basis-[22%] text-center">Range</div>
						<div className="basis-[22%] text-center">Damage</div>
					</header>
					{calcWeapons.map((weapon) => (
						<AttackWeapon key={weapon.name} weapon={weapon} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AttackDisplay
