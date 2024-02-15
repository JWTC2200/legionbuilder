"use client"

import Link from "next/link"
import { formationData } from "../../data/formation_data"
import { factionTypeArray } from "../../types/types"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"

const page = () => {
	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<ReferenceSelector />
			</BreadCrumbs>

			<div className="w-full lg:flex lg:gap-4">
				{factionTypeArray.map((faction) => (
					<FactionList faction={faction} key={faction}>
						{formationData
							.filter((formationFaction) => formationFaction.faction === faction)
							.map((formation) => (
								<Row
									key={formation.name}
									className="px-4 hover:bg-secondary-700 hover:text-secondary-50 whitespace-nowrap">
									<Link
										key={formation.name}
										href={`/reference/formations/${formation.name.replaceAll(" ", "_")} `}
										className="flex items-center gap-2 w-full py-1">
										<span>{formation.name}</span>
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
