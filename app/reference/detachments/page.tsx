"use client"

import React from "react"
import Link from "next/link"
import { DETACHMENT, factionTypeArray, detachmentTypeArray } from "../../types"
import { detachmentData } from "../../data/detachment_data"
import { getDetachmentIcon } from "../../utils/detachmentIcons"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"
import { Row } from "@components/HTML"
import FactionList from "@/app/reference/FactionList"

const page = () => {
	const sortByDetachmentType = (array: DETACHMENT[]): DETACHMENT[] => {
		let sortedArray = []
		for (let i = 0; i < detachmentTypeArray.length; i++) {
			for (let j = 0; j < array.length; j++) {
				if (array[j].detachment_type === detachmentTypeArray[i]) {
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
					<ReferenceSelector />
				</BreadCrumbs>
			</Sticky>

			<div className="w-full lg:flex lg:gap-4">
				{factionTypeArray.map((faction) => (
					<FactionList faction={faction} key={faction}>
						{sortByDetachmentType(detachmentData.filter((detachmentFaction) => detachmentFaction.faction === faction && !detachmentFaction.unique)).map((detachment) => (
							<Row key={detachment.name} className="px-4 hover:bg-secondary-700 hover:text-secondary-50 whitespace-nowrap">
								<Link key={detachment.name} href={`/reference/detachments/${detachment.name.replaceAll(" ", "_")} `} className="block flex items-center gap-2 w-full py-1">
									<span>{getDetachmentIcon(detachment.detachment_type)}</span>
									<span>{detachment.name}</span>
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
