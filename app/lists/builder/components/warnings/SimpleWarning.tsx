interface properties {
	children: React.ReactNode
}

const SimpleWarning = ({ children }: properties) => {
	return <div className="text-red-600 font-bold text-xl font-graduate text-center">{children}</div>
}

export default SimpleWarning
