"use client"

import React from "react"
import { detachmentData } from "@/app/data/detachment_data"
import { notFound } from "next/navigation"
import DetachmentDataslate from "@components/DetachmentDataslate"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"

const page = ({ params: { name } }: { params: { name: string } }) => {
	const detachmentName = name.replaceAll("_", " ")
	const detachmentDataEntry = detachmentData.find((detachment) => detachment.name === detachmentName)

	if (!detachmentDataEntry) {
		notFound()
	}
	return (
		<Main>
			<Sticky className="z-10">
				<BreadCrumbs>
					<Crumb href="/reference">Reference</Crumb>
					<ReferenceSelector />
				</BreadCrumbs>
			</Sticky>

			<DetachmentDataslate detachment={detachmentDataEntry} />
		</Main>
	)
}

export default page
