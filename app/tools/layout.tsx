"use client"

import { useEffect } from "react"
import Main from "@components/Main"
import useAuthState from "@app/Auth"
import { ToastContainer } from "react-toastify"

const layout = ({ children }: { children: React.ReactNode }) => {
	const userUid = useAuthState((state) => state.uid)

	return (
		<Main>
			{userUid ? (
				<>
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
				</>
			) : (
				<div className={"mt-8 font-graduate"}>You need to be logged in to use tools.</div>
			)}
		</Main>
	)
}

export default layout
