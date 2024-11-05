"use client"

import { detachmentData } from "@/app/data/detachment_data"
import { notFound } from "next/navigation"
import DetachmentDataslate from "@/app/components/DetachmentDataslate"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"
import referenceAddresses from "@app/reference/addresses"

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
					<ReferenceSelector addresses={referenceAddresses} />
				</BreadCrumbs>
			</Sticky>

			<DetachmentDataslate detachment={detachmentDataEntry} />
		</Main>
	)
}

export default page
