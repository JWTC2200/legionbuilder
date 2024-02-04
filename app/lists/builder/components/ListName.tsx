import { ImQuill } from "@react-icons/all-files/im/ImQuill"
import { listState } from "../../state"

const ListName = () => {
	const { list, setList } = listState()
	return (
		<div className="text-primary-950 font-semibold flex gap-2 justify-center border border-backgrounds-950 items-center py-2 px-4 rounded-xl max-w-full">
			<ImQuill />
			<input
				type="text"
				id="list_name"
				name="list_name"
				maxLength={25}
				value={list.name}
				onChange={(e) => setList({ ...list, name: e.target.value })}
				className="bg-inherit text-center font-graduate text-lg sm:text-xl max-w-[80%] truncate"
			/>
			<ImQuill />
		</div>
	)
}

export default ListName
