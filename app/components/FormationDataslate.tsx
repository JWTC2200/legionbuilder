import { FORMATION } from "@type/types"
import { formationSlotData } from "@data/formation_slot_data"
import { getDetachmentIcon } from "@app/utils/detachmentIcons"

const FormationDataslate = (formation: FORMATION) => {
	return (
		<article className="max-w-screen-xl p-2 border-2 border-black bg-dataslate rounded-lg">
			<div className="border-2 border-black bg-primary-950 text-primary-50 py-1 px-3 mb-2">
				<h2 className="text-2xl text-center font-graduate font-bold">{formation.name}</h2>
			</div>
			{formation.formation_slots.map((group, index) => (
				<div key={formation.id + "group" + index} className="flex flex-col items-center">
					<h2 className="text-2xl w-full text-center font-graduate font-bold bg-primary-950 text-primary-50 py-1 px-3 mb-2">
						{`${group.slot_type} Detachments`}
					</h2>
					<div className="text-primary-950 flex flex-wrap justify-center items-center gap-4 m-2">
						{group.slot_id.map((slotId) => {
							const slot = formationSlotData.find((slot) => slot.id === slotId)
							if (slot) {
								return (
									<div
										key={"compulsory" + index}
										className="flex flex-col justify-center items-center text-center bg-primary-950 text-primary-950 w-40 h-32 p-2 border-2 border-black rounded-xl bg-dataslate">
										<span className="text-3xl">{getDetachmentIcon(slot.type)}</span>
										<p className="font-semibold font-graduate">{slot.type}</p>
										{slot.description ? <p className="italic text-sm">{slot.description}</p> : null}
									</div>
								)
							}
							return null
						})}
					</div>
				</div>
			))}
		</article>
	)
}

export default FormationDataslate
