import { FORMATION } from "@type/types"
import FormationGroups from "@app/reference/formations/[name]/FormationGroups"
import FormationRule from "@app/reference/formations/[name]/FormationRule"

interface properties {
	formation: FORMATION
}
const FormationDataslate = ({ formation }: properties) => {
	const formationRules = formation.rules.length ? (
		<div className="pb-2 px-2 space-y-2">
			{formation.rules.map((rule) => {
				return <FormationRule rule={rule} key={rule.name} />
			})}
		</div>
	) : null

	const formationSlots = formation.formation_slots.map((formationSlots, index) => {
		return <FormationGroups formationSlots={formationSlots} key={formationSlots.slot_type + index} />
	})

	return (
		<article className="max-w-screen-xl sm:p-2 bg-dataslate clip-path-halfagon-lg">
			<div className="border-2 border-black bg-primary-950 text-primary-50 py-1 px-3 mb-2">
				<h2 className="text-2xl py-1 text-center font-graduate font-bold">
					{formation.subfaction ? formation.subfaction + ": " : ""}
					{formation.name}
				</h2>
			</div>
			{formationRules}
			{formationSlots}
		</article>
	)
}

export default FormationDataslate
