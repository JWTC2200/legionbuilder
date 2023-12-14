"use client"
import Main from "@/app/components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@/app/components/BreadCrumbs"
import AttackingUnit from "./[components]/AttackingUnit"
import TargetUnit from "./[components]/TargetUnit"
import CalculatorResults from "./[components]/CalculatorResults"

const page = () => {
	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<ReferenceSelector />
			</BreadCrumbs>
			<section className="flex flex-col w-full p-4 text-primary-950">
				<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
					<AttackingUnit />
					<TargetUnit />
				</div>
				<CalculatorResults />
			</section>
		</Main>
	)
}

export default page
