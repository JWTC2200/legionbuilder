"use client"

import { Children, ReactNode, isValidElement, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CaretDown, CaretUp } from "@components/Icons"
import { clickOutside } from "@/app/utils/events"

export function BreadCrumbs({ children }: { children: ReactNode }) {
	return (
		<header className="bg-secondary-900 p-4 py-2 text-lg font-graduate">
			{Children.map(
				children,
				(child, key) => (
					// isValidElement(child) ? (
					<span className="group" key={key}>
						{child}
						<span className="group-last:hidden px-2 text-secondary-500">&gt;</span>
					</span>
				)
				// ) : null
			)}
		</header>
	)
}

export function Crumb({ href, children }: { href: string; children: ReactNode }) {
	const active = usePathname().endsWith(href)

	return !active ? (
		<Link href={href} className="text-primary-400 hover:text-primary-200">
			{children}
		</Link>
	) : (
		<h1 className="inline text-secondary-300">{children}</h1>
	)
}

export function ReferenceSelector() {
	const ref = useRef<HTMLHeadingElement>(null)
	const [options] = useState(
		["units", "weapons", "detachments", "formations", "calculator"].map((option) => {
			const href = "/reference/" + option

			return {
				href,
				text: option[0].toUpperCase() + option.slice(1),
				selected: usePathname().startsWith(href),
			}
		})
	)

	const [selectedOption] = useState(options.filter((option) => option.selected)[0])
	const [open, setOpen] = useState(false)
	const toggleOpen = () => (open ? setOpen(false) : setOpen(true))

	clickOutside(ref, () => setOpen(false))

	return (
		<h1 className="relative inline-block text-secondary-300" ref={ref}>
			<button className="flex items-center gap-0" onClick={toggleOpen}>
				<span>{selectedOption.text}</span>
				{!open ? <CaretDown /> : <CaretUp />}
			</button>

			<div className={`absolute z-50 bottom-o -left-2 ${open ? "max-h-[158px]" : "max-h-0"} bg-secondary-900 overflow-hidden transition-all`}>
				<ol className="p-2 pt-3 clip-path-halfagon-sm space-y-1">
					{options.map((option) => {
						return (
							<li key={option.href} className="px-2">
								<Link href={option.href} className="text-primary-400 hover:text-primary-200" onClick={toggleOpen}>
									{option.text}
								</Link>
							</li>
						)
					})}
				</ol>
			</div>
		</h1>
	)
}
