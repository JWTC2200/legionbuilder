import Item from "./Item"
import Main from "@components/Main"
import { BreadCrumbs, Crumb } from "@components/BreadCrumbs"

const page = () => {
	return (
		<Main className="flex flex-col">
			<BreadCrumbs>
				<Crumb href="/reference">Reference</Crumb>
			</BreadCrumbs>
			<section className="flex flex-wrap justify-center gap-8 lg:gap-12 py-4">
				<Item href="/reference/units" icon="skull">
					Units
				</Item>
				<Item href="/reference/weapons" icon="sentryGun">
					Weapons
				</Item>
				<Item href="/reference/detachments" icon="tank">
					Detachments
				</Item>
				<Item href="/reference/formations" icon="banner">
					Formations
				</Item>
				<Item href="/reference/calculator" icon="calculator">
					Calculator
				</Item>
			</section>
		</Main>
	)
}

export default page
