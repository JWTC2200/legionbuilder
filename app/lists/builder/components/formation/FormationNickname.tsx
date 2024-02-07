import { listState } from "@/app/lists/state"
import { ListFormation } from "@type/listTypes"

interface properties {
	formation: ListFormation
}

const FormationNickname = ({ formation }: properties) => {
	const { list, setList } = listState()

	const handleNickname = (e: string) => {
		setList({
			...list,
			formations: [
				...list.formations.map((entry) => {
					if (entry.id === formation.id) {
						return { ...formation, nickname: e }
					}
					return entry
				}),
			],
		})
	}

	return (
		<input
			value={formation.nickname}
			type="text"
			maxLength={24}
			onChange={(e) => handleNickname(e.target.value)}
			placeholder="Custom formation name"
			className="bg-secondary-700 px-4 h-8 text-primary-50 font-graduate overflow-auto text-center outline-none clip-path-halfagon-md"
		/>
	)
}

export default FormationNickname
