"use client"

import { IoClose } from "react-icons/io5"

const InfoPopup = ({ toggle }: { toggle: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className="fixed border-2 border-black bg-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-secondary-900 text-sm sm:text-lg font-semibold p-2 rounded-lg w-10/12 max-w-sm bg-dataslate">
			<div className="text-2xl flex justify-end w-full">
				<button onClick={() => toggle((prev) => !prev)}>
					<IoClose />
				</button>
			</div>
			<ul className="font-normal">
				<li className="text-center font-graduate font-semibold">Buttons:</li>
				<li>
					<strong>Save:</strong> stores a copy of your list on your device
				</li>
				<li>
					<strong>Print:</strong> opens a page with your list formatted for easier reading
				</li>
				<li>
					<strong>New:</strong> blank list, also clears any lists in storage
				</li>
				<li>
					<strong>Upload:</strong> Only if you're logged in. Save your list to account. If you're viewing someone elses list it will save a copy to your account instead. Also updates your stored list if you have one online already.
				</li>
			</ul>
		</div>
	)
}

export default InfoPopup
