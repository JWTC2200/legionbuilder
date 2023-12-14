import React from "react"
import { calculatorWeapons, calculatorTarget } from "../state"
import TargetDisplay from "./TargetDisplay"
import AttackDisplay from "./AttackDisplay"

const CalculatorResults = () => {
	const { calcWeapons, calcUnit } = calculatorWeapons()
	const { calcTargets } = calculatorTarget()

	return (
		<section className="w-full text-secondary-300 my-2">
			<div className="flex flex-col md:flex-row gap-4 sm:justify-center items-center sm:items-start py-4">
				<AttackDisplay />

				{calcTargets ? <TargetDisplay /> : <div className="text-center text-red-600 w-full font-graduate text-secondary-100">Select a target unit</div>}
			</div>
		</section>
	)
}

export default CalculatorResults
