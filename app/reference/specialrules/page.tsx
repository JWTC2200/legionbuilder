"use client"

import { specialRulesData } from "@/app/data/special_rule_data"
import { useState } from "react"
import Link from "next/link"

const page = () => {
	const [searchTerm, setSearchTerm] = useState("")

	const sortedRules = specialRulesData.sort((a, b) => {
		const nameA = a.name.toUpperCase()
		const nameB = b.name.toUpperCase()
		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}
		return 0
	})

	const filteredRules = sortedRules.filter((rule) => rule.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))

	return (
		<main className="h-full bg-dataslate p-4 flex flex-col items-center">
			<div className="text-center">
				<label htmlFor="search" className="font-graduate text-xl text-primary-950">
					Search:
				</label>
				<input
					type="text"
					name="search"
					id="search"
					className="bg-inherit border border-primary-950 text-primary-950 rounded-md ml-2 px-2 font-graduate"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value)
					}}
				/>
			</div>
			<ul className="list-disc text-primary-950 ml-4">
				{filteredRules.map((rule) => (
					<Link key={rule.name} href={`/reference/specialrules/${rule.name.replaceAll(" ", "_")}`}>
						<li>{rule.name}</li>
					</Link>
				))}
			</ul>
		</main>
	)
}

export default page
