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
			className="text-xl sm:text-3xl my-1 hover:text-tertiary-700">
			{view ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
		</button>
	)
}

export default FormationToggle
