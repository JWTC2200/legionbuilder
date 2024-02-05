import Link from "next/link"
import { listState } from "@/app/lists/state"
const CreateListBtn = () => {
	const { clearList } = listState()

	return (
		<Link
			href="/lists/builder"
			className="px-8 py-2 banner_background font-graduate text-lg text-center sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-primary-100 active:text-primary-100 hover:border-primary-100 active:border-primary-100"
			onClick={clearList}>
			Create List
		</Link>
	)
}

export default CreateListBtn
