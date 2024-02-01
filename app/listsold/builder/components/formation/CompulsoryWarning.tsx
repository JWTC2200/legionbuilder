import { BUILDER_FORMATION_SLOT } from "@/app/types"

const CompulsoryWarning = ({ array }: { array: BUILDER_FORMATION_SLOT[] }) => {
	const warningHTML = () => {
		if (array.filter((slot) => slot.selected_unit).length < array.length) {
			return (
				<div data-testid="comp-warning" className="text-red-600 pt-2 font-semibold">
					Compulsory detachments missing!
				</div>
			)
		} else {
			return null
		}
	}
	return warningHTML()
}

export default CompulsoryWarning
