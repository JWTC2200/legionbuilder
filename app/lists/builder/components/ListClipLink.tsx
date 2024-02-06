import { List } from "@type//listTypes"
import { addToClipboard } from "@/app/utils/clipboard"
import { FaLink } from "@react-icons/all-files/fa/FaLink"

const ListClipLink = ({ list }: { list: List }) => {
	const currentUrl = window.location.href
	return (
		<button
			onClick={() => addToClipboard(`${currentUrl}/builder?listId=${list.id}`)}
			className="flex flex-col justify-center items-center text-lg hover:text-tertiary-700">
			<FaLink className="" />
		</button>
	)
}

export default ListClipLink
