"use client"

import Link from "next/link"
import { DETACHMENT, factionTypeArray, detachmentTypeArray } from "@type/types"
import { detachmentData } from "@data/detachment_data"
import { getDetachmentIcon } from "@app/utils/detachmentIcons"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"
import { sortedByNameKey } from "@app/utils/sorting"
import referenceAddresses from "@app/reference/addresses"

const page = () => {
	const sortByDetachmentType = (array: DETACHMENT[]): DETACHMENT[] => {
		let sortedArray = []
		for (let i = 0; i < detachmentTypeArray.length; i++) {
			for (let j = 0; j < array.length; j++) {
				if (array[j].detachment_type[0] === detachmentTypeArray[i]) {
					sortedArray.push(array[j])
				}
			}
		}
		return sortedArray
	}

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
						{sortByDetachmentType(
							sortedByNameKey(
								detachmentData.filter(
									(detachmentFaction) =>
										detachmentFaction.faction === faction && !detachmentFaction.unique
								)
							) as DETACHMENT[]
						).map((detachment) => {
							const Icon = getDetachmentIcon(detachment.detachment_type[0])
							return (
								<Row
									key={detachment.name + faction}
									className="px-4 hover:bg-secondary-700 hover:text-secondary-50 whitespace-nowrap">
									<Link
										href={`/reference/detachments/${detachment.name.replaceAll(" ", "_")} `}
										className="flex items-center gap-2 w-full py-1">
										<span>
											<Icon className={"h-4 w-4 sm:h-6 sm:w-6"} />{" "}
										</span>
										<span>{detachment.name}</span>
									</Link>
								</Row>
							)
						})}
					</FactionList>
				))}
			</div>
		</Main>
	)
}

export default page
