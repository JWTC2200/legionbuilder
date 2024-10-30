import useAuthState from "@app/Auth"
import { collectionState } from "@app/collection/state"

interface properties {
	name: string
	number: number
}

const ListModelsOwned = ({ name, number }: properties) => {
	const { collection } = collectionState()

	const collectionModel = collection.find((model) => model.name === name)
	const owned = collectionModel ? collectionModel.number : 0
	const insufficient = owned < number

	const styles = insufficient ? "text-red-600" : ""

	return (
		<span>
			{" "}
			({insufficient ? <span className={styles}>{number - owned} missing, </span> : null}
			<span className={styles}>{owned} owned</span>)
		</span>
	)
}

export default ListModelsOwned
