import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6"

interface properties {
	view: boolean
	toggle: React.Dispatch<React.SetStateAction<boolean>>
	className?: string
}

const FormationToggle = ({ view, toggle, className }: properties) => {
	return (
		<button
			type="button"
			onClick={() => toggle((prev) => !prev)}
			className={`flex gap-1 justify-center items-center text-2xl hover:text-tertiary-700 ${className}`}>
			{view ? (
				<>
					<FaRegSquareMinus />
				</>
			) : (
				<>
					<FaRegSquarePlus />
				</>
			)}
		</button>
	)
}

export default FormationToggle
