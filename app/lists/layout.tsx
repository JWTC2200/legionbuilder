"use client"

import { ToastContainer } from "react-toastify"
import Main from "@components/Main"
import ListModelsList from "@lists/components/ListModelsList"

const layout = ({ children }: { children: React.ReactNode }) => {
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
