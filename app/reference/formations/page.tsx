"use client"

import Link from "next/link"
import { formationData } from "@data/formation_data"
import { FACTION } from "@type/types"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"

const page = () => {
	const factionsWitFormations = Object.values(FACTION).filter((faction) => faction !== FACTION.none)

	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<ReferenceSelector />
			</BreadCrumbs>

			<div className="w-full grid lg:grid-cols-2 lg:gap-4">
				{factionsWitFormations.map((faction) => (
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
										<span>
											{formation.subfaction ? formation.subfaction + ": " : ""} {formation.name}
										</span>
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
