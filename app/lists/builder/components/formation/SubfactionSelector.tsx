import { listState } from "@lists/state"
import { ListFormation } from "@type/listTypes"
import { SUBFACTION_TYPE, subfactionTypeArray } from "@type/types"

interface properties {
	formation: ListFormation
}
const SubfactionSelector = ({ formation }: properties) => {
	const { list, setList } = listState()

	const changeSubfaction = (e: string) => {
		setList({
			...list,
			formations: [
				...list.formations.map((form) => {
					if (form.id === formation.id) {
						return { ...form, subfaction: e as SUBFACTION_TYPE }
					}
					return form
				}),
			],
		})
	}

	return (
		<select
			onChange={(e) => changeSubfaction(e.target.value)}
			value={formation.subfaction as string}
			className={`w-[280px] text-center h-8 clip-path-halfagon-md bg-secondary-700 font-graduate  hover:text-secondary-100 ${formation.subfaction ? " text-primary-50" : "text-secondary-400"}`}>
			<option value="" className="text-primary-50">
				Choose Legion
			</option>
			{subfactionTypeArray.map((subfaction) => (
				<option key={formation.id + subfaction} value={subfaction} className="text-primary-50">
					{subfaction}
				</option>
			))}
		</select>
	)
}

export default SubfactionSelector
