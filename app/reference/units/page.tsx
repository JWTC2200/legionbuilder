"use client"

import Link from "next/link"
import { unitData } from "../../data/unit_data"
import { factionTypeArray } from "../../types/types"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"
import { sortUnitDatasheets } from "@app/utils/sorting"
import referenceAddresses from "@app/reference/addresses"

const page = () => {
	return (
		<Main>
			<Sticky className="z-10">
				<BreadCrumbs>
					<Crumb href="/reference">Reference</Crumb>
					<ReferenceSelector addresses={referenceAddresses} />
				</BreadCrumbs>
			</Sticky>

			<div className="w-full grid lg:grid-cols-2 lg:gap-4">
				{factionTypeArray.map((faction) => (
					<FactionList faction={faction} key={faction}>
						{sortUnitDatasheets(
							unitData.filter(
								(unitDataslate) => unitDataslate.faction === faction && !unitDataslate.unique
							)
						).map((unit) => (
							<Row key={unit.name} className="px-4 hover:bg-secondary-700 hover:text-secondary-50">
								<Link
									href={`/reference/units/${unit.name.replaceAll(" ", "_")} `}
									className="block w-full py-1">
									{unit.name}
								</Link>
							</Row>
						))}
					</FactionList>
				))}
			</div>
		</Main>
	)
}

export default page
