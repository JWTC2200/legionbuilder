import React from "react"
import { calculatorTarget } from "../state"
import { Row } from "@/app/components/HTML"
import SpecialRuleBox from "@/app/components/SpecialRuleBox"

const TargetDisplay = () => {
	const { calcTargets } = calculatorTarget()
	return (
		<div className="w-full py-4 bg-dataslate clip-path-halfagon-lg">
			<h4 className="bg-backgrounds-950 py-2 font-graduate text-lg text-center mx-4">{calcTargets?.name}</h4>
			<div className=" border-t border-primary-400 mx-4">
				<header className="bg-backgrounds-950 flex ">
					<div className="basis-[25%] text-center">Move</div>
					<div className="basis-[25%] text-center">Save</div>
					<div className="basis-[25%] text-center">CAF</div>
					<div className="basis-[25%] text-center">Morale</div>
					<div className="basis-[25%] text-center">W</div>
				</header>
				<Row className="flex text-center">
					<div className="basis-[25%]">{calcTargets?.movement}</div>
					<div className="basis-[25%]">{calcTargets?.save}+</div>
					<div className="basis-[25%]">
						{Number(calcTargets?.caf) > 0 ? "+" : null}
						{calcTargets?.caf}
					</div>
					<div className="basis-[25%]">{calcTargets?.morale ? calcTargets.morale + "+" : "-"}</div>
					<div className="basis-[25%]">{calcTargets?.wounds}</div>
				</Row>
			</div>
			{calcTargets?.special_rules ? (
				<div className="mx-4 text-black">
					<h5 className="font-bold bg-backgrounds-950 text-primary-100 px-4">Special Rules</h5>
					<div className="px-2 flex flex-wrap justify-start, gap-1 text-secondary-900 border-b border-r border-l border-backgrounds-950">
						{calcTargets.special_rules.sort().map((rule, index) => (
							<div key={rule.name + index} className="flex">
								<SpecialRuleBox rule={rule} />
								{index < calcTargets.special_rules.length - 1 ? "," : ""}
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	)
}

export default TargetDisplay
