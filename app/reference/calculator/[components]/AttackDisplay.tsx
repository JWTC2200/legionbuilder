import React from "react"

import { calculatorWeapons } from "../state"
import AttackWeapon from "./AttackWeapon"

const AttackDisplay = () => {
	const { calcWeapons, calcUnit } = calculatorWeapons()

	return (
		<div className="w-full py-4 bg-dataslate clip-path-halfagon-lg">
			<h4 className="bg-backgrounds-950 py-2 font-graduate text-lg text-center mx-4">{calcUnit ? calcUnit : calcWeapons[0].name}</h4>
			<div className="mx-4">
				<div className="">
					<header className="flex bg-backgrounds-950 border-t border-primary-400">
						<div className="basis-[60%] pl-2">Weapon</div>
						<div className="basis-[20%] text-center">Range</div>
						<div className="basis-[20%] text-center">Damage</div>
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
