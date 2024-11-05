"use client"

import Link from "next/link"
import { formationData } from "@data/formation_data"
import { factionsWitFormations } from "@type/types"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"
import referenceAddresses from "@app/reference/addresses"

const page = () => {
	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<ReferenceSelector addresses={referenceAddresses} />
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
											{formation.legend ? <span className={"italic"}>FoL:</span> : null}{" "}
											{formation.subfaction ? formation.subfaction : ""} {formation.name}
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
