import { JSX } from "react"
import { WEAPON_DATASHEET } from "@type/types"
import WeaponProfile from "./WeaponProfile"
import { Row } from "@components/HTML"

export default function ({ weapon }: { weapon: WEAPON_DATASHEET }): JSX.Element {
	return (
		<Row className="flex flex-col py-1 group">
			<h3 className="block font-graduate font-bold uppercase border-b group-odd:border-secondary-400 group-even:border-secondary-500 px-4 py-1 overflow-hidden">
				<span className={"whitespace-nowrap"}>{weapon.name}</span>
			</h3>
			<div className="px-4">
				{weapon.profiles.map((profile, index) => (
					<WeaponProfile profile={profile} weapon={weapon} key={weapon.name + "profile" + index} />
				))}
			</div>
		</Row>
	)
}
