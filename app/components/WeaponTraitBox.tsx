import React from "react"
import { weaponTraitsData } from "../data/weapon_traits_data"
import { WEAPON_TRAIT } from "../types"

interface properties {
	trait: WEAPON_TRAIT
	disabled?: boolean
}

const WeaponTraitBox = ({ trait, disabled }: properties) => {
	const description = weaponTraitsData.find((weapon) => weapon.name.toLowerCase() === trait.name.toLowerCase())

	return (
		<span className="relative group/trait">
			<span className={`${disabled ? "" : "cursor-help hover:text-primary-700"} capitalize `}>{`${trait.name}${trait.value ? ` (${trait.value})` : ""}`}</span>
			{description?.tooltip ? (
				<div className={`absolute hidden ${disabled ? "" : "group-hover/trait:block"} z-20 -bottom-2 right-0 translate-y-full text-center w-[200px] sm:w-[300px]`}>
					<div className="clipped bg-backgrounds-950 text-primary-50 p-1 px-2 normal-case">{description?.tooltip ? description.tooltip : null}</div>
					<div className="top-0 absolute h-0 w-0 border-x-8 border-x-transparent border-b-[8px] border-b-primary-900 -translate-y-full right-8"></div>
				</div>
			) : null}
			<span className="group-last/trait:hidden">,&nbsp;</span>
		</span>
	)
}

export default WeaponTraitBox
