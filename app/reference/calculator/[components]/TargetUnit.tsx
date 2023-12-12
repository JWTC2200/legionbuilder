import React, { useState, useEffect } from "react"
import { calculatorTarget } from "../state"
import { unitData } from "@/app/data/unit_data"
import { sortedByNameKey } from "@/app/utils/sorting"
import TargetUnitDisplay from "./TargetDisplay"

const TargetUnit = () => {
	const [selectedTarget, setSelectedTarget] = useState<string>("")
	const [targetFilter, setTargetFilter] = useState<string>("")
	const { setTargetUnit, clearTargetUnit } = calculatorTarget()

	const handleSelectedTarget = (targetId: string) => {
		const target = unitData.find((unit) => unit.id === Number(targetId))
		if (target) {
			setTargetUnit(target)
		}
	}

	useEffect(() => {
		if (selectedTarget) {
			handleSelectedTarget(selectedTarget)
		} else {
			clearTargetUnit()
		}
	}, [selectedTarget])

	return (
		<section className="w-full text-primary-950">
			<h3 className="font-graduate text-center text-secondary-300 text-xl mb-2">Target Unit</h3>
			<input type="text" name="target" id="target" placeholder="Search units..." className="bg-dataslate w-full p-4 font-graduate placeholder:text-primary-800 focus:outline-none" value={targetFilter} onChange={(e) => setTargetFilter(e.target.value)} />
			<select className="w-full bg-dataslate p-4 font-graduate placeholder:text-primary-950 focus:outline-none" value={selectedTarget} onChange={(e) => setSelectedTarget(e.target.value)}>
				<option value={""}>Select target unit</option>
				{sortedByNameKey(unitData)
					.filter((unitName) => unitName.name.toLowerCase().includes(targetFilter.toLowerCase().trim()))
					.map((unit) => (
						<option key={"unit" + unit.id} value={unit.id} className="text-black">
							{unit.name}
						</option>
					))}
			</select>
		</section>
	)
}

export default TargetUnit
