import { ALLEGIANCE, BUILDER_FORMATION, BUILDER_LIST, FACTION, SUBFACTION_TYPE } from "@/app/types"

export const testList: BUILDER_LIST = {
	points: 200,
	list_name: "Tester",
	list_id: "testingtesting",
	user_id: "bob",
	main_faction: FACTION.solar,
	allegiance: ALLEGIANCE.traitor,
	formations: [],
}

export const testListTwo: BUILDER_LIST = {
	points: 400,
	list_name: "TesterTwo",
	list_id: "testingTwo",
	user_id: "joe",
	main_faction: FACTION.solar,
	allegiance: ALLEGIANCE.traitor,
	formations: [],
}

export const testFormOne: BUILDER_FORMATION = {
	name: "Formation One",
	ref_id: "formationOne",
	id: 1234567890,
	faction: FACTION.astartes,
	subfaction: SUBFACTION_TYPE.alphaLegion,
	choice: null,
	compulsory: null,
	optional: null,
}
export const testFormTwo: BUILDER_FORMATION = {
	name: "Formation Two",
	ref_id: "formationTwo",
	id: 2234567890,
	faction: FACTION.astartes,
	subfaction: SUBFACTION_TYPE.alphaLegion,
	choice: null,
	compulsory: null,
	optional: null,
}
export const testFormThree: BUILDER_FORMATION = {
	name: "Formation Three",
	ref_id: "formationThree",
	id: 3234567890,
	faction: FACTION.astartes,
	subfaction: SUBFACTION_TYPE.alphaLegion,
	choice: null,
	compulsory: null,
	optional: null,
}
