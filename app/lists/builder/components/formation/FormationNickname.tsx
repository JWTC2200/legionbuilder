import { listState } from "@/app/lists/state"
import { ListFormation } from "@/app/types"

interface properties {
	formation: ListFormation
}

const FormationNickname = ({ formation }: properties) => {
	const { list, setList } = listState()

	const handleNickname = (e: string) => {
		setList({
			...list,
			formations: [
				...list.formations.filter((entry) => entry.id !== formation.id),
				{ ...formation, nickname: e },
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
			className="bg-secondary-800 py-1 px-4 text-primary-50 font-graduate overflow-auto text-center outline-none clip-path-halfagon-md"
		/>
	)
}

export default FormationNickname
