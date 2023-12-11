import { WEAPON_DATASHEET, WEAPON_PROFILES } from "@/app/types"
import { Row } from "@/app/components/HTML"
import React from "react"
import AttackWeaponProfiles from "./AttackWeaponProfiles"

const AttackWeapon = ({ weapon }: { weapon: WEAPON_DATASHEET }) => {
	return (
		<Row>
			<div className="pl-2 font-graduate flex flex-wrap w-[60%]">{weapon.name}</div>
			{weapon.profiles.map((profile, index) => (
				<AttackWeaponProfiles key={weapon.id + weapon.name + index} profile={profile} name={weapon.name} />
			))}
		</Row>
	)
}

export default AttackWeapon
