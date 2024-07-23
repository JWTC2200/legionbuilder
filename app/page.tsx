import Main from "./components/Main"
import Link from "next/link"
import { FaGithub, FaDiscord } from "react-icons/fa6"
import { TfiEmail } from "react-icons/tfi"
import FrontpageUpdates from "@components/FrontpageUpdates"
import React from "react"
import Image from "next/image"

export default function Home() {
	return (
		<Main className="flex flex-col items-center py-4">
			<Link
				href="lists"
				className="px-8 py-2 builder_title_background font-graduate text-lg text-center sm:text-2xl rounded-full border-2 border-backgrounds-950 hover:text-primary-100 active:text-primary-100 hover:border-primary-100 active:border-primary-100">
				Create list
			</Link>

			<div className="m-4 flex flex-col items-center gap-2 text-lg sm:text-xl">
				<p>I've added two buttons to the list view page for download list PDFs</p>
				<Image
					src="/images/pdfbuttons.png"
					alt={"Image of PDF download links"}
					className={"rounded-xl"}
					width={600}
					height={400}
				/>
				<p>One is for the list with detachment upgrades and loadouts.</p>

				<p>The other has damage boxes for the list so you can more easily record casualties.</p>
				<div className={"flex flex-col gap-4 sm:max-w-full"}>
					<Image
						src={"/images/listpdf.png"}
						alt={"Image of list PDF"}
						className={"rounded-xl"}
						width={600}
						height={400}
					/>
					<Image
						src={"/images/listdamagepdf.png"}
						alt={"Image of list damage boxes"}
						className={"rounded-xl"}
						width={600}
						height={400}
					/>
				</div>
				<p>As usual feel free to contact me on Discord if you have any issues or suggestions. Thanks!</p>
			</div>

			<FrontpageUpdates />

			<section className="mx-4 self-start">
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
					className="mb-2 text-xl flex items-center gap-1
        hover:text-tertiary-700 hover:underline active:text-tertiary-700 focus:text-tertiary-700 mt-2">
					Github <FaGithub />
				</Link>
			</section>
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
