import { MutableRefObject, RefObject, useEffect } from "react"

export function clickOutside(ref: RefObject<HTMLHeadingElement>, handler: Function): void {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function clickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler()
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", clickOutside)

		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", clickOutside)
		}
	}, [ref])
}
