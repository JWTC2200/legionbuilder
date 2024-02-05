interface properties {
	children: React.ReactNode
	className?: string
}

const SimpleWarning = ({ children, className }: properties) => {
	return <div className={"text-red-600 font-bold text-xl font-graduate text-center " + className}>{children}</div>
}

export default SimpleWarning
