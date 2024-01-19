import React from "react"

const DetachmentDescription = ({ text }: { text: string }) => {
	return <p className="italic text-center pt-1">*{text}*</p>
}

export default DetachmentDescription
