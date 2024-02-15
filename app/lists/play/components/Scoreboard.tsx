"use client"

import { useState } from "react"

const Scoreboard = () => {
	const [score, setScore] = useState({
		turnone: 0,
		turntwo: 0,
		turnthree: 0,
		turnfour: 0,
		turnfive: 0,
		turnsix: 0,
		turnseven: 0,
	})

	const SStyle = "flex justify-center items-center text-primary-50"
	const inputStyle = "bg-secondary-800 w-8 text-primary-50 text-center"

	const handleChange = (e: any) => {
		const key = e.target.name
		setScore({ ...score, [key]: Number(e.target.value) })
	}

	return (
		<div className="bg-secondary-800 flex justify-center p-4">
			<form onChange={(e) => handleChange(e)}>
				<div className="flex flex-col gap-2">
					<div className={SStyle}>
						<label htmlFor="turn-one">Turn 1: </label>
						<input
							id="turnone"
							name="turnone"
							type="number"
							value={Number(score["turnone"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-two">Turn 2: </label>
						<input
							id="turntwo"
							name="turntwo"
							type="number"
							value={Number(score["turntwo"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-three">Turn 3: </label>
						<input
							id="turnthree"
							name="turnthree"
							type="number"
							value={Number(score["turnthree"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-four">Turn 4: </label>
						<input
							id="turnfour"
							name="turnfour"
							type="number"
							value={Number(score["turnfour"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-five">Turn 5: </label>
						<input
							id="turnfive"
							name="turnfive"
							type="number"
							value={Number(score["turnfive"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-six">Turn 6: </label>
						<input
							id="turnsix"
							name="turnsix"
							type="number"
							value={Number(score["turnsix"]).toString()}
							className={inputStyle}
						/>
					</div>
					<div className={SStyle}>
						<label htmlFor="turn-seven">Turn 7: </label>
						<input
							id="turnseven"
							name="turnseven"
							type="number"
							value={Number(score["turnseven"]).toString()}
							className={inputStyle}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Scoreboard
