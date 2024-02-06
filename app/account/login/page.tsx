"use client"

import { useState } from "react"
import Link from "next/link"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import useAuthState from "@/app/Auth"
import Main from "@components/Main"
import { BreadCrumbs, Crumb } from "@components/BreadCrumbs"

const page = () => {
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [error, setError] = useState<string>("")
	const saveSession = useAuthState((state) => state.saveSession)

	const auth = getAuth()
	const router = useRouter()

	const handleSignIn = async (e: React.SyntheticEvent) => {
		e.preventDefault()

		if (!email) {
			setError("Email required!")
		}

		if (!password) {
			setError("Password required!")
			return
		}

		setError("")

		try {
			const credentials = await signInWithEmailAndPassword(auth, email, password)
			saveSession(credentials.user.uid)
			router.back()
		} catch (error) {
			setError("Login failed")
		}
	}

	return (
		<Main className="flex flex-col gap-6 items-center">
			<section className="flex flex-col gap-12 p-4 w-full lg:w-1/2">
				<BreadCrumbs>
					{/* <Crumb href="/account">Account</Crumb> */}
					<Crumb href="/account/login">Login</Crumb>
				</BreadCrumbs>

				{error ? <div className="text-red-500 px-4">{error}</div> : null}

				<form onSubmit={handleSignIn} className="flex flex-col gap-6 items-start">
					<div className="flex items-center w-full">
						<label htmlFor="email" className="font-graduate w-1/4">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2"
						/>
					</div>
					<div className="flex items-center w-full">
						<label htmlFor="password" className="font-graduate w-1/4">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2"
						/>
					</div>
					<div className="w-full">
						<button
							type="submit"
							className="bg-primary-500 clip-path-halfagon-sm py-1 px-4 text-primary-100 font-semibold font-graduate hover:bg-primary-500 hover:text-primary-500 ml-1/4">
							Login
						</button>
					</div>
				</form>

				<p className="p-4 bg-secondary-800 text-secondary-300 clip-path-octagon-md italic">
					Don't have an account? Register for an account{" "}
					<Link href="/account/register" className="text-primary-500 hover:text-primary-100">
						here
					</Link>
					.
					<br />
					Please note: An account is NOT required to use the builder. An account is only required if you want
					to save more than one list or create links for sharing with other players.
				</p>
			</section>
		</Main>
	)
}

export default page
