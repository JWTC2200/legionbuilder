"use client"

import { detachmentData } from "@/app/data/detachment_data"
import { notFound, usePathname } from "next/navigation"
import DetachmentDataslate from "@/app/components/DetachmentDataslate"
import Main from "@components/Main"
import { BreadCrumbs, Crumb, ReferenceSelector } from "@components/BreadCrumbs"
import Sticky from "@components/Sticky"

const page = ({ params: { name } }: { params: { name: string } }) => {
	const pathname = usePathname()
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
					<Crumb href={"/reference/detachments"}>Detachments</Crumb>
					<Crumb href={pathname}>{detachmentName}</Crumb>
				</BreadCrumbs>
			</Sticky>

			<DetachmentDataslate detachment={detachmentDataEntry} />
		</Main>
	)
}

export default page
