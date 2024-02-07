import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6"

interface properties {
	view: boolean
	toggle: React.Dispatch<React.SetStateAction<boolean>>
}

const FormationToggle = ({ view, toggle }: properties) => {
	return (
		<button
			type="button"
			onClick={() => toggle((prev) => !prev)}
			className="flex gap-1 items-center text-xl sm:text-3xl w-20 hover:text-tertiary-700">
			{view ? (
				<>
					<FaRegSquareMinus />
					<span className="text-sm sm:text-md">Hide</span>
				</>
			) : (
				<>
					<FaRegSquarePlus />
					<span className="text-sm sm:text-md">Show</span>
				</>
			)}
		</button>
	)
}

export default FormationToggle
