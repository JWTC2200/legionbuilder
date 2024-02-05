import { listState } from "../../../state"
import { List, ListFormation, SUBFACTION_TYPE, subfactionTypeArray } from "@/app/types"

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
			className={`w-[280px] text-center py-1 px-2 border border-backgrounds-950 font-graduate text-black hover:text-tertiary-800 active:text-tertiary-800 ${formation.subfaction ? " text-tertiary-800 font-semibold" : ""}`}>
			<option value="" className="text-black">
				Choose Legion
			</option>
			{subfactionTypeArray.map((subfaction) => (
				<option key={formation.id + subfaction} value={subfaction} className="text-black">
					{subfaction}
				</option>
			))}
		</select>
	)
}

export default SubfactionSelector
