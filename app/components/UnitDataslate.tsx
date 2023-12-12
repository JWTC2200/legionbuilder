import React from "react"
import Link from "next/link"
import { UNIT_DATASHEET } from "../types"
import { getUnitWeaponRows } from "../utils/unitweaponrows"
import SpecialRuleBox from "./SpecialRuleBox"
import { FaExternalLinkAlt } from "react-icons/fa"

const UnitDataslate = (unit: UNIT_DATASHEET) => {
	const unitWeaponRows = getUnitWeaponRows(unit.weapons)

	return (
		<article className="bg-dataslate p-4 break-inside-avoid clip-path-halfagon-lg">
			{/* TITLE */}
			<header className="flex gap-2 justify-between items-center bg-backgrounds-950 text-primary-50 py-2 px-2 mb-2">
				<h2 className="text-xl sm:text-2xl font-graduate font-bold">{unit.name}</h2>
				<h3 className="text-lg sm:text-xl font-graduate">
					{unit.unit_type.type} {`(${unit.unit_type.value})`}
				</h3>
			</header>
			{/* UNIT BASIC STATS */}
			<table className="w-full border-t-2 border-b-2 sm:border-2 border-black">
				<thead className="bg-backgrounds-950 text-primary-50">
					<tr>
						<th className="text-start px-2">Name</th>
						<th className="text-center">Move</th>
						<th className="text-center">Save</th>
						<th className="text-center">CAF</th>
						<th className="text-center">Morale</th>
						<th className="text-center pr-4">W</th>
					</tr>
				</thead>
				<tbody className="text-secondary-900">
					<tr>
						<td className="text-start px-2">
							{" "}
							<Link href={`/reference/units/${unit.name.replaceAll(" ", "_")}`} className="flex flex-wrap items-center gap-2 hover:text-tertiary-700 active:text-tertiary-600">
								{unit.name} <FaExternalLinkAlt />
							</Link>
						</td>
						<td className="text-center">{unit.movement}"</td>
						<td className="text-center">{unit.save}+</td>
						<td className="text-center">
							{Number(unit.caf) > 0 ? "+" : null}
							{unit.caf}
						</td>
						<td className="text-center">{unit.morale ? unit.morale + "+" : "-"}</td>
						<td className="text-center pr-4">{unit.wounds}</td>
					</tr>
				</tbody>
			</table>

			{/* LOADOUT ?  SECTION */}
			{unit.loadout ? (
				<div className="mt-2 border-t-2 border-b-2 sm:border-2 border-black">
					<h3 className="bg-backgrounds-950 text-primary-50 px-2 py-1 font-bold">Weapons</h3>
					{unit.loadout.map((weapon) => (
						<div key={weapon.text} className="text-primary-950 p-2 flex flex-col gap-1">
							{weapon.text ? <p>{weapon.text}</p> : null}
							{weapon.options ? (
								<ul className="list-disc grid sm:grid-cols-2">
									{weapon.options.map((option) => (
										<li key={option} className="ml-4">
											{option}
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</div>
			) : null}

			{/* WEAPON STATS SECTION */}
			{unitWeaponRows.length ? (
				<table className="w-full mt-4 border-t-2 border-b-2 sm:border-2 border-black">
					<thead className="bg-backgrounds-950 text-primary-50">
						<tr>
							<th className="text-start px-2">Weapon</th>
							<th className="text-center">Range</th>
							<th className="text-center">Dice</th>
							<th className="text-center">To Hit</th>
							<th className="text-center">AP</th>
							<th className="text-start px-2">Traits</th>
						</tr>
					</thead>
					<tbody className="text-secondary-900">{unitWeaponRows}</tbody>
				</table>
			) : null}

			{/* SPECIAL RULES SECTION */}
			{unit.special_rules.length ? (
				<div className="mt-2 border-t-2 sm:border-2 border-black">
					<h3 className="bg-backgrounds-950 text-primary-50 px-2 py-1 font-bold">Special Rules</h3>
					<div className="px-2 flex flex-wrap justify-start gap-1 text-secondary-900">
						{" "}
						{unit.special_rules.sort().map((rule, index) => (
							<div key={rule.name + index} className="flex">
								<SpecialRuleBox rule={rule} />
								{index < unit.special_rules.length - 1 ? "," : ""}
							</div>
						))}
					</div>
				</div>
			) : null}
		</article>
	)
}

export default UnitDataslate
