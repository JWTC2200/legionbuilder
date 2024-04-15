"use client"

import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import Main from "@components/Main"
import { listState } from "@/app/lists/state"
import { useSearchParams } from "next/navigation"
import { getList } from "@/app/firebase/firestore/getList"
import { List } from "@type/listTypes"
import { toast } from "react-toastify"
import ListModelsList from "@lists/components/ListModelsList"

const layout = ({ children }: { children: React.ReactNode }) => {
	const { setList } = listState()
	const searchParams = useSearchParams()
	const listParams = searchParams.get("listId")

	useEffect(() => {
		const getDbList = async (id: string) => {
			const data: List = await getList(id)
			if (data) {
				setList(data)
			} else {
				toast.error("Could not find linked list")
			}
		}
		if (listParams) {
			getDbList(listParams)
		}
	}, [listParams])

	return (
		<Main className="sm:max-w-screen-2xl flex flex-col items-center">
			<ToastContainer
				position="bottom-right"
				autoClose={800}
				closeOnClick
				toastStyle={{
					backgroundColor: "#052e16",
					border: "white 2px solid",
					borderRadius: "5px",
					color: "#f0fdf4",
				}}
				pauseOnFocusLoss={false}
			/>
			{children}
			<ListModelsList />
		</Main>
	)
}

export default layout
