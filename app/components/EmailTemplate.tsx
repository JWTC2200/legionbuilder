import * as React from "react"
import { CONTACT_FORM_DATA } from "../types/types"

const EmailTemplate: React.FC<CONTACT_FORM_DATA> = ({ email, message, title }) => (
	<div>
		<p>Email: {email}</p>
		<p>Title: {title}</p>
		<p>{message}</p>
	</div>
)

export default EmailTemplate
