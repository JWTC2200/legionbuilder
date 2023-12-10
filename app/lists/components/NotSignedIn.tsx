import React from "react"
import Link from "next/link"

const NotSignedIn = () => {
	return (
		<div className="text-center">
			<Link href={"/account/login"} className="underline text-primary-400 hover:text-primary-100">
				Log in
			</Link>{" "}
			or create an{" "}
			<Link href={"/account/register"} className="underline text-primary-400 hover:text-primary-100">
				account
			</Link>{" "}
			to save lists!
		</div>
	)
}

export default NotSignedIn
