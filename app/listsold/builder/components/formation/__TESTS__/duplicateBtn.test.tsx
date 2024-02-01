import DuplicateBtn from "../DuplicateBtn"
import { listState } from "../../../state"
import { testList, testFormOne, testFormTwo, testFormThree } from "@/__mocks__/mockLists"
import { act, render, renderHook, screen, fireEvent } from "@testing-library/react"

jest.mock("nanoid", () => {
	return { nanoid: () => "123" }
})

const newList = { ...testList, formations: [testFormOne, testFormTwo, testFormThree] }

describe("Duplicate a formation", () => {
	test("Check duplicates button works", () => {
		//set list state
		const { result } = renderHook(() => listState())
		act(() => result.current.setList(newList))
		expect(result.current.list.formations).toHaveLength(3)

		//check list state
		const { name, ref_id, id } = result.current.list.formations[0]
		expect(name).toEqual("Formation One")
		expect(ref_id).toEqual("formationOne")
		expect(id).toEqual(1234567890)

		//render button
		render(<DuplicateBtn formation={result.current.list.formations[0]} />)
		const btn = screen.getByRole("button")
		fireEvent.click(btn)

		expect(result.current.list.formations).toHaveLength(4)
		const newFormation = result.current.list.formations[3]
		expect(newFormation.name).toEqual("Formation One")
		expect(newFormation.ref_id).toEqual("formation123")
	})
})
