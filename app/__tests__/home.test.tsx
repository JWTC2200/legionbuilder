import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import SpecialRuleBox from "../components/SpecialRuleBox"
import Home from "../page"

test("SpecialRuleBox Render", () => {
	render(<SpecialRuleBox rule={{ name: "Armoured" }} />)
	expect(screen.getByText("Armoured"))

	render(<SpecialRuleBox rule={{ name: "Jink", value: 5 }} />)
	expect(screen.getByText("Jink (5)"))
	expect(screen.getByText("Main Rulebook p.92"))
})
