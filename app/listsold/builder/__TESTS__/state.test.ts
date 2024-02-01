import { listState, builderBottomWidget } from "../state"
import { describe } from "@jest/globals"
import { act, renderHook } from "@testing-library/react"
import { testList } from "@/__mocks__/mockLists"

jest.mock("nanoid", () => {
	return { nanoid: () => "123" }
})

describe("List state tests", () => {
	it("list state default values", () => {
		const { result } = renderHook(() => listState())
		expect(result.current.list.points).toEqual(3000)
	})

	it("list changes correctly", () => {
		const { result } = renderHook(() => listState())
		act(() => result.current.setList(testList))

		const { points, list_name, list_id } = result.current.list

		expect(points).toEqual(200)
		expect(list_name).toEqual("Tester")
		expect(list_id).toEqual("testingtesting")

		act(() => result.current.setList({ ...result.current.list, user_id: "doe" }))

		expect(result.current.list.points).toEqual(200)
		expect(result.current.list.user_id).toEqual("doe")
	})

	it("list clears", () => {
		const { result } = renderHook(() => listState())
		act(() => result.current.setList(testList))
		act(() => result.current.clearList())
		expect(result.current.list.points).toEqual(3000)
	})
})

describe("Builder bottom widget tests", () => {
	it("Widget starts minimised", () => {
		const { result } = renderHook(() => builderBottomWidget())
		expect(result.current.widget).toBe(false)
	})
	it("Widget opens and closes correctly", () => {
		const { result } = renderHook(() => builderBottomWidget())

		act(() => result.current.toggleWidget())
		expect(result.current.widget).toBe(true)
		act(() => result.current.toggleWidget())
		expect(result.current.widget).toBe(false)
	})
})
