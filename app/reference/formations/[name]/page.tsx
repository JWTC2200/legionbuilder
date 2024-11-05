"use client"

import { formationData } from "@/app/data/formation_data"
import { notFound } from "next/navigation"
import FormationDataslate from "@app/reference/formations/[name]/FormationDataslate"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Main from "@components/Main"
import referenceAddresses from "@app/reference/addresses"

const page = ({ params: { name } }: { params: { name: string } }) => {
	const formationName = name.replaceAll("_", " ")
	const formationEntry = formationData.find((formation) => formation.name === formationName)
	if (!formationEntry) {
		notFound()
	}
	return (
		<Main>
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
				<ReferenceSelector addresses={referenceAddresses} />
			</BreadCrumbs>

			<FormationDataslate formation={formationEntry} />
		</Main>
	)
}

export default page
