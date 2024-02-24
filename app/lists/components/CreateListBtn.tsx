import { emptyList } from "@/app/data/empty_objects"
import { listState } from "@/app/lists/state"
import { useState } from "react"
import { useRouter } from "next/navigation"

const CreateListBtn = () => {
	const [gamemode, setGamemode] = useState<"standard" | "titandeath">("standard")
	const { setList } = listState()
	const router = useRouter()

	const handleCreateNew = () => {
		setList({ ...emptyList, gamemode: gamemode })
		router.push("/lists/builder")
	}

	return (
		<div className="text-lg sm:text-xl font-graduate flex items-center gap-2">
			<label htmlFor="gamemode">Gamemode:</label>
			<select
				name="gamemode"
				id="gamemode"
				value={gamemode}
				onChange={(e) => setGamemode(e.target.value as "standard" | "titandeath")}
				className="bg-transparent rounded-sm p-1 sm:text-lg font-graduate text-tertiary-400 hover:text-primary-400 active:text-primary-400">
				<option value="standard" className="bg-secondary-900">
					Standard
				</option>
				<option value="titandeath" className="bg-secondary-900">
					Titandeath
				</option>
			</select>
			<button
				onClick={handleCreateNew}
				className="clip-path-halfagon-md py-1 px-2 bg-backgrounds-900 hover:text-primary-400 active:text-primary-400">
				Create List
			</button>
		</div>
	)
}

export default CreateListBtn
