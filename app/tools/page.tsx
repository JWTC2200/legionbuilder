import React from "react"
import Main from "@components/Main"
import { BreadCrumbs, Crumb } from "@components/BreadCrumbs"
import Item from "@app/reference/Item"

const Page = () => {
	return (
		<Main className="flex flex-col">
			<BreadCrumbs>
				<Crumb href={"/tools"}>Tools</Crumb>
			</BreadCrumbs>
			<section className="flex flex-wrap justify-center gap-8 lg:gap-12 py-4">
				<Item href={"/tools/calculator"} icon={"calculator"}>
					Calculator
				</Item>
				<Item href={"/tools/collection"} icon={"collection"}>
					Collection
				</Item>
			</section>
		</Main>
	)
}

export default Page
