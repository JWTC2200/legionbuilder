import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { ReactNode } from "react"
import ATBG from "public/images/AT_bg.jpg"
import Image from "next/image"
import "./globals.css"
import "react-toastify/dist/ReactToastify.css"

import NavBar from "@components/navigation/NavBar"
import AuthContextProvider from "./firebase/auth/AuthContext"
import Maintenance from "./components/Maintenance"

export const metadata: Metadata = {
	title: "Legion Builder",
	description: "A List builder for Warhammer: The Horus Heresy - Legion Imperialis",
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="min-w-screen min-h-screen bg-secondary-900 bg-scroll text-secondary-100 flex flex-col items-center text-sm md:text-base">
				<div className="fixed w-screen h-screen">
					<Image src={ATBG} fill alt="background" className="z-0" style={{ objectFit: "cover" }} />
				</div>
				<AuthContextProvider>
					<NavBar />
					{process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true" ? <Maintenance /> : children}
					<Analytics />
				</AuthContextProvider>
			</body>
		</html>
	)
}

// style={{ backgroundImage: 'url("/images/AT_bg.jpg")' }}
