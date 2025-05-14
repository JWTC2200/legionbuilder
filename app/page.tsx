import Main from "./components/Main"
import Link from "next/link"
import { FaGithub, FaDiscord } from "react-icons/fa6"
import { TfiEmail } from "react-icons/tfi"
import { FaCoffee } from "react-icons/fa"
import FrontpageUpdates from "@components/FrontpageUpdates"
import React from "react"
import { IoDuplicateSharp } from "react-icons/io5"

export default function Home() {
	return (
		<Main className="flex flex-col items-center py-4">
			<Link
				href="lists"
				className="px-8 py-2 builder_title_background font-graduate text-lg text-center sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-primary-100 active:text-primary-100 hover:border-primary-100 active:border-primary-100">
				Create list
			</Link>

			<div className="m-4 flex flex-col gap-4 text-lg sm:text-xl">
				<div>
					A new duplicate formation button has been added to the list builder! This has been requested a lot,
					sorry it's taken so long.
				</div>
				<div className={"flex gap-2 items-center mb-8"}>
					To the right of the formation selector is a <IoDuplicateSharp /> button which will add the exact
					same formation to the list, with all upgrades and loadouts.
				</div>

				<div>
					LegionBuilder has an official{" "}
					<Link
						href={"https://buymeacoffee.com/legionbuilder"}
						className="text-primary-500 hover:text-tertiary-700 hover:underline active:text-tertiary-700 focus:text-tertiary-700 mt-2">
						buymeacoffee
					</Link>{" "}
					account!
				</div>
				<p>As usual feel free to contact me on Discord if you have any issues or suggestions. Thanks!</p>
			</div>

			<FrontpageUpdates />

			<div className="mx-4 self-start">
				<h2 className="text-lg font-graduate text-tertiary-700 mt-4">Suggestions or feedback?</h2>
				<Link
					href="https://discord.gg/kEXsZdThSe"
					target="_blank"
					className="hover:underline text-xl flex items-center gap-1 hover:text-tertiary-700 active:text-tertiary-700 focus:text-tertiary-700 mt-2">
					Join our Discord! <FaDiscord />
				</Link>
				<Link
					href="contact"
					className="hover:underline text-xl flex items-end gap-1 hover:text-tertiary-700 active:text-tertiary-700 focus:text-tertiary-700 mt-2">
					Contact me <TfiEmail />
				</Link>
				<Link
					href="https://github.com/JWTC2200/legionbuilder"
					className="mb-2 text-xl flex items-center gap-1	hover:text-tertiary-700 hover:underline active:text-tertiary-700 focus:text-tertiary-700 mt-2">
					Github <FaGithub />
				</Link>
				<Link
					href={"https://buymeacoffee.com/legionbuilder"}
					className="mb-2 text-xl flex items-center gap-1 hover:text-tertiary-700 hover:underline active:text-tertiary-700 focus:text-tertiary-700 mt-2">
					Buymeacoffee <FaCoffee />
				</Link>
			</div>
			<hr className="border rounded-full bg-stone-900 m-4 w-full" />
			<footer className="mx-4">
				<p>This website is unofficial and in no way endorsed by Games Workshop.</p>
				<p>
					Any use of terms from Games Workshop are used without permission. No challenge to their status
					intended. All rights reserved to their respective owners.
				</p>
			</footer>
		</Main>
	)
}
