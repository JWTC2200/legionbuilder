import { weaponTraitsData } from "@/app/data/weapon_traits_data"
import { notFound } from "next/navigation"
const page = ({ params: { name } }: { params: { name: string } }) => {
	const traitName = name.replaceAll("_", " ")
	const weaponTraitEntry = weaponTraitsData.find((trait) => trait.name.toLowerCase() === traitName.toLowerCase())
	if (!weaponTraitEntry) {
		notFound()
	}
	return (
		<main className="h-full bg-dataslate p-4 flex flex-col items-center text-primary-950 max-w-lg w-full">
			<h2 className="text-2xl font-graduate font-bold underline w-full text-center mb-4">{weaponTraitEntry.name}</h2>
			{weaponTraitEntry.description.map((paragraph, index) => (
				<p key={index} className="mb-4">
					{paragraph}
				</p>
			))}
		</main>
	)
}

export default page
