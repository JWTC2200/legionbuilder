"use client"

import { useState } from "react"
import Main from "@/app/components/Main"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { useRouter } from "next/navigation"

const page = () => {
	const [email, setEmail] = useState<string>("")
	const [error, setError] = useState<string>("")

	const auth = getAuth()
	const router = useRouter()

	const handleReset = (e: React.SyntheticEvent) => {
		e.preventDefault()
		if (!email) {
			setError("Email required!")
			return
		}
		requestReset()
		setError("Password reset request sent. You will be redirect to the login page.")
		setTimeout(() => {
			router.push("/account/login")
		}, 3000)
	}

	const requestReset = async () => {
		try {
			const res = await sendPasswordResetEmail(auth, email)
		} catch (error) {
            //do nothing
        }
	}

	return (
		<Main className="flex flex-col gap-6 items-center">
			<section className="flex flex-col gap-12 p-4 w-full lg:w-1/2">
				<BreadCrumbs>
					<Crumb href="/account/reset">Password Reset</Crumb>
				</BreadCrumbs>

				{error ? <div className="text-red-500 px-4">{error}</div> : null}
				<form onSubmit={handleReset} className="flex flex-col gap-6 items-start">
					<div className="flex items-center w-full">
						<label htmlFor="email" className="font-graduate w-1/4">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2"
							required
						/>
					</div>
					<div className="w-full">
						<button
							type="submit"
							className="bg-primary-500 clip-path-halfagon-sm py-1 px-4 text-primary-100 font-semibold font-graduate hover:bg-primary-500 hover:text-primary-500 ml-1/4">
							Request reset
						</button>
					</div>
				</form>
			</section>
		</Main>
	)
}

export default page
