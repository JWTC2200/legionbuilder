import React from "react"

interface properties {
	children: React.ReactNode
}

const SideMenuTitle = ({ children }: properties) => {
	return (
		<h3 className="clip-path-octagon-md builder_title_background text-primary-50 font-graduate py-1 px-6 text-center">
			{children}
		</h3>
	)
}

export default SideMenuTitle
