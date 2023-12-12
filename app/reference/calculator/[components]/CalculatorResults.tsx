import React from "react"
import { calculatorWeapons, calculatorTarget } from "../state"
import TargetDisplay from "./TargetDisplay"
import AttackDisplay from "./AttackDisplay"

const CalculatorResults = () => {
	const { calcWeapons, calcUnit } = calculatorWeapons()
	const { calcTargets } = calculatorTarget()

	return (
		<section className="w-full text-secondary-300 my-4">
			<header className="w-full bg-backgrounds-950 text-center py-4 font-graduate text-xl font-semibold">RESULTS</header>
			<div className="flex flex-col md:flex-row gap-4 sm:justify-center items-center sm:items-start py-4">
				{calcWeapons.length ? (
					<div className="w-full">
						<AttackDisplay />
					</div>
				) : (
					<div className="text-center text-red-600 w-full">Select a weapon or attacking unit</div>
				)}
				{calcTargets ? <TargetDisplay /> : <div className="text-center text-red-600 w-full">Select a target unit</div>}
			</div>
		</section>
	)
}

export default CalculatorResults
