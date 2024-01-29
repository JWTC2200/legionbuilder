import { BUILDER_FORMATION_SLOT } from "@/app/types"

interface properties {
	detachmentSlot: BUILDER_FORMATION_SLOT
}

const UpgradeList = ({ detachmentSlot }: properties) => {
	if (detachmentSlot.selected_unit) {
		return (
			<div className="mb-1 text-center">
				{detachmentSlot.selected_unit.upgrade_options
					.filter((takenUpgrade) => takenUpgrade.number > 0)
					.map((upgrade, index) => (
						<div
							key={"upgradeList" + detachmentSlot.slot_ref + index}
							className="font-graduate text-xs sm:text-sm">
							~ <span className="font-semibold">{upgrade.cost}pts</span>: {upgrade.number} {upgrade.name}{" "}
							~
						</div>
					))}
			</div>
		)
	}
}

export default UpgradeList
