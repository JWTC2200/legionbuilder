import { useState } from "react"
import { ListDetachment, ListFormation } from "@/app/types/listTypes"
import FormationBreakPoints from "../../builder/components/formation/FormationBreakPoints"
import ResizingBox from "@/app/components/ResizingBox"
import Detachment from "./Detachment"
import { GiBrokenShield } from "react-icons/gi"
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6"

interface properties {
	formation: ListFormation
	detachments: ListDetachment[]
}

const Formation = ({ formation, detachments }: properties) => {
	const [toggle, setToggle] = useState<boolean>(true)
	const [broken, setBroken] = useState<boolean>(false)

	if (!detachments.length) {
		return null
	}

	const brokenStyle = broken ? "text-orange-700" : ""

	return (
		<div className="font-graduate flex flex-col gap-2">
			<div className="flex justify-around bg-secondary-700 clip-path-halfagon-lg py-2">
				<button onClick={() => setToggle(!toggle)} className="flex justify-center items-center text-2xl">
					{toggle ? <FaRegSquareMinus /> : <FaRegSquarePlus />}
				</button>
				<div className="flex flex-col items-center">
					<h2 className={`text-xl underline`}>{formation.name}</h2>
					<div className="flex flex-wrap gap-2">
						<FormationBreakPoints formation={formation} className={`flex gap-2 ${brokenStyle}`} />
					</div>
				</div>
				<button onClick={() => setBroken(!broken)} className={`flex justify-center items-center text-2xl ${broken ? brokenStyle : "text-primary-500"}`}>
					<GiBrokenShield />
				</button>
			</div>

			<ResizingBox toggle={toggle}>
				<div className="flex flex-wrap items-start justify-center gap-2 pb-4">
					{detachments.map((detachment) => (
						<Detachment key={detachment.slot_id} detachment={detachment} />
					))}
				</div>
			</ResizingBox>
		</div>
	)
}

export default Formation
