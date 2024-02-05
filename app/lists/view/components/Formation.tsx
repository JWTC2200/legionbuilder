import { List, ListFormation } from "@/app/types"
import FormationGroup from "./FormationGroup"

interface properties {
	list: List
	formation: ListFormation
}

const Formation = ({ list, formation }: properties) => {
	return (
		<div>
			<h4 className="font-bold">
				{formation.nickname ? `${formation.nickname} - ` : null}
				{`${formation.name}, `}
			</h4>
			{formation.detachment_groups.map((group, index) => (
				<FormationGroup key={formation.id + "group" + index} list={list} formationGroup={group} />
			))}
		</div>
	)
}

export default Formation
