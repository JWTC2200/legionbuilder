"use client"

import UnitDataslate from "@/app/components/UnitDataslate"
import { unitData } from "@/app/data/unit_data"
import { notFound, usePathname } from "next/navigation"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"

const page = ({ params: { name } }: { params: { name: string } }) => {
	const pathname = usePathname()
	const unitName = name.replaceAll("_", " ")
	const unitDataEntry = unitData.find((unit) => unit.name === unitName)
	if (!unitDataEntry) {
		notFound()
	}
	return (
		<Main>
			<Sticky className="z-10">
				<BreadCrumbs>
					<Crumb href="/reference">Reference</Crumb>
					<Crumb href={"/reference/units"}>Units</Crumb>
					<Crumb href={pathname}>{unitName}</Crumb>
				</BreadCrumbs>
			</Sticky>
			<UnitDataslate unit={unitDataEntry} />
		</Main>
	)
}

export default page
