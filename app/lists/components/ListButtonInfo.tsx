import React from "react"
import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { ImBin } from "@react-icons/all-files/im/ImBin"

const ListButtonInfo = () => {
	return (
		<section className="p-4">
			<ol className="sm:flex grid grid-cols-2 items-center justify-center sm:flex-row gap-2 sm:gap-4 ">
				<li className="flex items-center justify-center">
					<FaCopy className="mr-2 text-primary-400" /> Duplicate list
				</li>
				<li className="flex items-center justify-center">
					<FaEye className="mr-2 text-primary-400" /> View list
				</li>
				<li className="flex items-center justify-center">
					<FaLink className="mr-2 text-primary-400" /> Copy builder link
				</li>
				<li className="flex items-center justify-center">
					<ImBin className="mr-2 text-primary-400" /> Delete list
				</li>
			</ol>
		</section>
	)
}

export default ListButtonInfo
