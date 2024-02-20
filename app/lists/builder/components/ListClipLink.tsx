import { List } from "@type//listTypes"
import { addToClipboard } from "@/app/utils/clipboard"
import { FaLink } from "@react-icons/all-files/fa/FaLink"
import { toast } from "react-toastify"

const ListClipLink = ({ list }: { list: List }) => {
	const currentUrl = window.location.href

	const handleClipboard = () => {
		addToClipboard(`${currentUrl}/builder?listId=${list.id}`)
		toast.success("Link added to clipboard")
	}

	return (
		<button
			onClick={handleClipboard}
			className="flex flex-col justify-center items-center text-lg hover:text-tertiary-700">
			<FaLink className="" />
		</button>
	)
}

export default ListClipLink
