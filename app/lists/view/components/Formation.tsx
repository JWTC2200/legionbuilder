import { List, ListFormation } from "@type/listTypes"
import FormationGroup from "./FormationGroup"
import { totalFormationPoints } from "@lists/builder/utils"
import FormationBreakPoints from "@lists/builder/components/formation/FormationBreakPoints"

interface properties {
	list: List
	formation: ListFormation
}

const Formation = ({ list, formation }: properties) => {
	return (
		<div className="pt-2 flex flex-col gap-1">
			<h4 className="font-bold font-graduate border-b border-white text-lg">
				{formation.nickname ? `${formation.nickname} - ` : ""}
				{formation.subfaction ? `${formation.subfaction}, ` : ""}
				{`${formation.name}, ${totalFormationPoints(list, formation)}pts`}
			</h4>
			<FormationBreakPoints formation={formation} className="flex gap-2" />

			{formation.detachment_groups.map((group, index) => (
				<FormationGroup key={formation.id + "group" + index} list={list} formationGroup={group} />
			))}
		</div>
	)
}

export default Formation
