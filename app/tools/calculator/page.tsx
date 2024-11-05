"use client"

import { BreadCrumbs, Crumb, ReferenceSelector } from "@/app/components/BreadCrumbs"
import AttackingUnit from "./components/AttackingUnit"
import TargetUnit from "./components/TargetUnit"
import CalculatorResults from "./components/CalculatorResults"
import toolsAddresses from "@app/tools/addresses"

const page = () => {
	return (
		<>
			<BreadCrumbs>
				<Crumb href={"/tools"}>Tools</Crumb>
				<ReferenceSelector addresses={toolsAddresses} />
			</BreadCrumbs>
			<section className="flex flex-col w-full p-4 text-primary-950">
				<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
					<AttackingUnit />
					<TargetUnit />
				</div>
				<CalculatorResults />
			</section>
		</>
	)
}

export default page
