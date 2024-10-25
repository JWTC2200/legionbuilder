"use client"

import { useEffect } from "react"
import Main from "@components/Main"
import useAuthState from "@app/Auth"

const layout = ({ children }: { children: React.ReactNode }) => {
	const userUid = useAuthState((state) => state.uid)

	useEffect(() => {
		if (userUid) {
		}
	}, [userUid])

	return (
		<Main className="sm:max-w-screen-2xl flex flex-col items-center">
			{userUid ? children : <div>You are not logged in</div>}
		</Main>
	)
}

export default layout
