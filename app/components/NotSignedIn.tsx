import Link from "next/link"

const NotSignedIn = () => {
	return (
		<div className="text-center font-graduate sm:text-lg">
			You are not siged in. Please{" "}
			<Link href={"/account/login"} className="underline text-primary-400 hover:text-primary-100">
				log in
			</Link>{" "}
			or create an{" "}
			<Link href={"/account/register"} className="underline text-primary-400 hover:text-primary-100">
				account
			</Link>
			.
		</div>
	)
}

export default NotSignedIn
