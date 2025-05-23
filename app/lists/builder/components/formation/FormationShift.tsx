import React from "react"
import { listState } from "@lists/state"
import { ListFormation } from "@type/listTypes"
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io"

interface properties {
	formation: ListFormation
}

function FormationShift({ formation }: properties) {
	const { list, setList } = listState()

	const formationsLength = list.formations.length
	const formationIndex = list.formations.map((listFormationIds) => listFormationIds.id).indexOf(formation.id)

	const shiftFormation = (direction: "up" | "down") => {
		const removeFormation = list.formations.filter((formations) => formations.id !== formation.id)

		const newIndex =
			direction === "up"
				? removeFormation.toSpliced(formationIndex - 1, 0, formation)
				: removeFormation.toSpliced(formationIndex + 1, 0, formation)

		setList({ ...list, formations: newIndex })
	}

	return formationsLength > 1 ? (
		<div className={"flex flex-col md:flex-row gap-1"}>
			{formationIndex > 0 ? (
				<IoMdArrowUp
					className={
						"text-xl cursor-pointer hover:text-tertiary-500 active:text-primary-400 hover:border-tertiary-500 active:border-primary-400 border-2 rounded-full"
					}
					onClick={() => formationIndex > 0 && shiftFormation("up")}
				/>
			) : null}{" "}
			{formationIndex < formationsLength - 1 ? (
				<IoMdArrowDown
					className={
						"text-xl cursor-pointer hover:text-tertiary-500 active:text-primary-400 hover:border-tertiary-500 active:border-primary-400 border-2 rounded-full"
					}
					onClick={() => formationIndex < formationsLength - 1 && shiftFormation("down")}
				/>
			) : null}
		</div>
	) : null
}

export default FormationShift
