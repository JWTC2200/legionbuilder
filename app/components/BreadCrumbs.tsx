"use client"

import { Children, ReactNode, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CaretDown, CaretUp } from "@components/Icons"
import { clickOutside } from "@/app/utils/events"

interface Addresses {
	prefix: string
	addresses: string[]
}

interface Crumb {
	href: string
	children: ReactNode
}

export function BreadCrumbs({ children }: { children: ReactNode }) {
	return (
		<header className="bg-secondary-900 p-4 py-2 text-lg font-graduate flex flex-wrap">
			{Children.map(children, (child, key) => (
				<span className="group" key={key}>
					{child}
					<span className="group-last:hidden px-2 text-secondary-500">&gt;</span>
				</span>
			))}
		</header>
	)
}

export function Crumb({ href, children }: Crumb) {
	const active = usePathname().endsWith(href)

	return !active ? (
		<Link href={href} className="text-primary-400 hover:text-primary-200">
			{children}
		</Link>
	) : (
		<h1 className="inline text-secondary-300">{children}</h1>
	)
}

export function ReferenceSelector({ addresses }: { addresses: Addresses }) {
	const ref = useRef<HTMLHeadingElement>(null)
	const [options] = useState(
		addresses.addresses.map((option) => {
			const href = `/${addresses.prefix}/${option}`

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

			<div
				className={`absolute z-50 bottom-o -left-2 ${open ? "max-h-[250px]" : "max-h-0"} bg-secondary-900 overflow-hidden transition-all`}>
				<ol className="p-2 pt-3 clip-path-halfagon-sm space-y-1">
					{options.map((option) => {
						return (
							<li key={option.href} className="px-2">
								<Link
									href={option.href}
									className="text-primary-400 hover:text-primary-200"
									onClick={toggleOpen}>
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
