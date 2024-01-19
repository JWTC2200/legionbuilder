import { render, screen } from "@testing-library/react"
import CompulsoryWarning from "../CompulsoryWarning"
import { testDetachmentSlot, testDetachmentUnit } from "@/__mocks__/mockDetachment"
import { BUILDER_DETACHMENT_SLOT } from "@/app/types"

describe("Check compulsory slots warning", () => {
	test("Nothing is selected", () => {
		render(<CompulsoryWarning array={[testDetachmentSlot]} />)
		expect(screen.getByText("Compulsory detachments missing!")).toBeTruthy()
		expect(screen.queryByTestId("comp-warning")).toBeTruthy()
	})
	test("1 of 1 slots selected", () => {
		const testArray: BUILDER_DETACHMENT_SLOT[] = [{ ...testDetachmentSlot, selected_unit: testDetachmentUnit }]
		render(<CompulsoryWarning array={testArray} />)
		expect(screen.queryByTestId("comp-warning")).toBeNull()
	})
	test("1 of 2 slots selected", () => {
		const testArray: BUILDER_DETACHMENT_SLOT[] = [
			{ ...testDetachmentSlot, selected_unit: testDetachmentUnit },
			testDetachmentSlot,
		]
		render(<CompulsoryWarning array={testArray} />)
		expect(screen.getByText("Compulsory detachments missing!")).toBeTruthy()
		expect(screen.queryByTestId("comp-warning")).toBeTruthy()
	})
})
