import Main from "./components/Main"
import Link from "next/link"
import { FaGithub, FaDiscord } from "react-icons/fa6"
import { TfiEmail } from "react-icons/tfi"
import { FaCoffee } from "react-icons/fa"
import FrontpageUpdates from "@components/FrontpageUpdates"
import React from "react"
import Italic from "@components/text/Italic"

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
					The new units, formations and changes from the new Liber Strategia book have been added to the site!
				</div>
				<div>
					I'd like to thank everyone who as donated and helped me to add these changes early. It was super
					nice to get everyone's encouragement and support. Also saved me from a very hectic weekend!
				</div>
				<div>
					If there are any errors, bugs or issues please feel free to pop me a message, preferably in Discord!
					I expect there will be a few and will plan to have a patch on Monday, 8th after the weekend.
				</div>
				<div>
					There are a few issues that have been pointed out to me in the book which I've had to decide how to
					implement which I have listed here:
				</div>
				<div className={"pl-4"}>
					<ul className={"pl-4 list-disc text-sm font-graduate space-y-2"}>
						<li>
							Legion Typhon has a 2+ Morale instead of 3+ like other Astartes tanks
							<Italic text={" (I've left this alone for now)"} />
						</li>
						<li>
							Questoris Mechanicum Knight Banners weapons formatting. Graviton gun Graviton Pulse rule has
							been pushed down and Lightning cannon has lost blast(3)
							<Italic text={" (Left the Graviton gun alone. Removed Blast(3) from Lightning cannon)"} />
						</li>
						<li>
							The Auxilia Valdor, Baneblade and Hellhammer Squadron's Pintle Mounted heavy stubber options
							has a range of 12" instead of 14" like every other stubber weapon
							<Italic text={' (Decided to have them use the 14" range stubber for now)'} />
						</li>
					</ul>
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
