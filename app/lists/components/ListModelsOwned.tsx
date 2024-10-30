import useAuthState from "@app/Auth"
import { collectionState } from "@app/collection/state"

interface properties {
	name: string
	number: number
}

const ListModelsOwned = ({ name, number }: properties) => {
	const { collection } = collectionState()

	const collectionModel = collection.find((model) => model.name === name)
	const ownedNumber = collectionModel ? collectionModel.number : 0

	const styles = ownedNumber < number ? "text-red-600" : ""

	return (
		<span>
			/<span className={styles}>{ownedNumber}</span>
		</span>
	)
}

export default ListModelsOwned
