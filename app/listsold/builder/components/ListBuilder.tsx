import GameSize from "./GameSize"
import ListName from "./ListName"
import AddFormation from "./AddFormation"
import FormationDisplay from "./formation/FormationDisplay"
import Buttons from "./Buttons"
import QuickLinks from "./QuickLinks"
import Warnings from "./Warnings"

const ListBuilder = () => {
	return (
		<div className="flex flex-col gap-2 w-full max-w-screen-2xl items-center bg-dataslate pb-20 sm:px-4 lg:rounded-xl">
			<Buttons />
			<GameSize />
			<ListName />
			<Warnings />
			<AddFormation />
			<QuickLinks />
			<FormationDisplay />
		</div>
	)
}

export default ListBuilder
