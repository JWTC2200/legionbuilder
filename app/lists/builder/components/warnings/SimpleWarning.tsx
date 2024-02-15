interface properties {
	children: React.ReactNode
	className?: string
}

const SimpleWarning = ({ children, className }: properties) => {
	return <div className={"text-red-700 text-xl font-graduate text-center " + className}>{children}</div>
}

export default SimpleWarning
