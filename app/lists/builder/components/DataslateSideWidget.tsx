import { dataslateSideWidget } from "@lists/state"
import DetachmentDataslate from "@/app/components/DetachmentDataslate"
import SideMenutitle from "./SideMenutitle"
import FormationDataslate from "@app/reference/formations/[name]/FormationDataslate"

const DataslateSideWidget = () => {
	const { dataslate, formation, visible, setVisible } = dataslateSideWidget()

	return (
		<div
			onClick={() => setVisible(false)}
			className={`fixed left-0 top-0 h-full bg-dataslate pt-20 lg:pt-32 p-1 lg:p-4 w-screen max-w-[600px] overflow-auto text-backgrounds-950 ease-in-out duration-200 z-20 flex flex-col items-center gap-2 ${!visible ? "-translate-x-full" : "-translate-x-0"}`}>
			<SideMenutitle>Click anywhere to close</SideMenutitle>
			{dataslate?.main_unit.length ? <DetachmentDataslate detachment={dataslate} /> : null}

			{formation ? <FormationDataslate formation={formation} /> : null}
		</div>
	)
}

export default DataslateSideWidget
