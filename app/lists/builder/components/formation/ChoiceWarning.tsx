import { BUILDER_DETACHMENT_SLOT } from "@/app/types"

const ChoiceWarning = ({ array }: { array: BUILDER_DETACHMENT_SLOT[] }) => {
	const warningHTML = () => {
		if (array.filter((slot) => slot.selected_unit).length > 1) {
			return (
				<div className="text-red-600 pt-2 font-semibold" data-testid="choice-warning">
					Selected too many detachments!
				</div>
			)
		} else {
			return null
		}
	}

	return warningHTML()
}

export default ChoiceWarning
