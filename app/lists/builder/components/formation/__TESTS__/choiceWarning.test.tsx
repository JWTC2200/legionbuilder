import { render, screen } from "@testing-library/react"
import ChoiceWarning from "../ChoiceWarning"
import { testDetachmentSlot, testDetachmentUnit } from "@/__mocks__/mockDetachment"
import { BUILDER_DETACHMENT_SLOT } from "@/app/types"

describe("Check choice warning appears", () => {
	test("Nothing is selected", () => {
		render(<ChoiceWarning array={[]} />)
		expect(screen.queryByTestId("choice-warning")).toBeNull()
	})
	test("One unit is selected", () => {
		const testArray: BUILDER_DETACHMENT_SLOT[] = [{ ...testDetachmentSlot, selected_unit: testDetachmentUnit }]
		render(<ChoiceWarning array={testArray} />)
		expect(screen.queryByTestId("choice-warning")).toBeNull()
	})
	test("Two units selected", () => {
		const testArray: BUILDER_DETACHMENT_SLOT[] = [
			{ ...testDetachmentSlot, selected_unit: testDetachmentUnit },
			{ ...testDetachmentSlot, selected_unit: testDetachmentUnit },
		]
		render(<ChoiceWarning array={testArray} />)
		expect(screen.getByText("Selected too many detachments!")).toBeTruthy()
		expect(screen.queryByTestId("choice-warning")).toBeTruthy()
	})
})
