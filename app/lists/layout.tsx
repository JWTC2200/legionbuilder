"use client"

import { ToastContainer } from "react-toastify"
import Main from "../components/Main"

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Main className="sm:max-w-screen-2xl w-full flex flex-col items-center">
			<ToastContainer
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
		</Main>
	)
}

export default layout
