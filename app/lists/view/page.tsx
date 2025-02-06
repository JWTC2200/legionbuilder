"use client"

import React from "react"
import { listModelState, listState } from "@/app/lists/state"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import useAuthState from "@/app/Auth"
import { totalListPoints } from "../builder/utils"
import Formation from "./components/Formation"
import SaveListBtn from "../builder/components/SaveListBtn"
import DataslateSideWidget from "../builder/components/DataslateSideWidget"
import { FaListAlt } from "@react-icons/all-files/fa/FaListAlt"
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload"
import { Document, Page, StyleSheet } from "@react-pdf/renderer"
import { pdfStyles } from "@lists/view/pdfStyles"
import dynamic from "next/dynamic"
import PdfFormation from "@lists/view/pdfComponents/PdfFormation"
import PdfListInfo from "@lists/view/pdfComponents/PdfListInfo"
import PdfDamageFormation from "@lists/view/pdfComponents/PdfDamageFormation"

const PDFDownloadLink = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink), {
	ssr: false,
	loading: () => <p>Loading...</p>,
})

const page = () => {
	const { list } = listState()
	const userUid = useAuthState((state) => state.uid)
	const { visible, setVisible } = listModelState()
	const styles = StyleSheet.create(pdfStyles)

	if (!list) {
		return (
			<div className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
				<h2>No list found</h2>
			</div>
		)
	}

	const ListPdf = () => {
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<PdfListInfo list={list} />
					{list.formations.map((formation, index) => {
						return <PdfFormation list={list} formation={formation} key={`pdf-${formation.id}-${index}`} />
					})}
				</Page>
			</Document>
		)
	}

	const ListDamageBoxesPdf = () => {
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<PdfListInfo list={list} />
					{list.formations.map((formation, index) => {
						return (
							<PdfDamageFormation
								list={list}
								formation={formation}
								key={`damage-pdf-${formation.id}-${index}`}
							/>
						)
					})}
				</Page>
			</Document>
		)
	}

	return (
		<div className="w-full px-2 pb-8 max-w-screen-sm">
			<BreadCrumbs>
				<Crumb href="/lists">Lists</Crumb>
				<Crumb href="/lists/builder">Builder</Crumb>
				<Crumb href="/lists/view">View</Crumb>
			</BreadCrumbs>
			{userUid && userUid !== list.user ? (
				<SaveListBtn className="text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate my-4">
					Save copy of list
				</SaveListBtn>
			) : null}
			<div className={"flex flex-col gap-2 max-w-max mb-2"}>
				<button
					onClick={() => setVisible(!visible)}
					className="flex items-center text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate">
					<FaListAlt className="mr-1 text-xl" /> List Models
				</button>
				<button className="flex items-center text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate">
					<PDFDownloadLink document={<ListPdf />} fileName={list.name} className={"flex items-center"}>
						{({ loading }) =>
							loading ? (
								"Loading document..."
							) : (
								<>
									<FaFileDownload className="mr-1 text-xl" />
									List pdf
								</>
							)
						}
					</PDFDownloadLink>
				</button>
				<button className="flex items-center text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate">
					<PDFDownloadLink
						document={<ListDamageBoxesPdf />}
						fileName={`${list.name}-damage`}
						className={"flex items-center"}>
						{({ loading }) =>
							loading ? (
								"Loading document..."
							) : (
								<>
									<FaFileDownload className="mr-1 text-xl" />
									Damage box pdf
								</>
							)
						}
					</PDFDownloadLink>
				</button>
			</div>

			<div className="text-primary-50">
				<h2 className="text-lg font-bold">
					<span className="font-subrayada text-xl">{list.name}</span>
					{` ${totalListPoints(list).totalPoints} / ${list.points}pts`}
				</h2>
				<h3 className="font-graduate capitalize">{`Gamemode: ${list.gamemode ? list.gamemode : "Standard"}`}</h3>
				<h3 className="font-graduate">
					{list.allegiance} {list.faction}
				</h3>
				<h3 className="font-graduate">{`Formations ${list.formations.filter((formation) => formation.name).length}`}</h3>
				{list.formations.map((formation) => {
					if (formation.name) {
						return <Formation key={formation.id} list={list} formation={formation} />
					}
					return null
				})}
			</div>
			<DataslateSideWidget />
		</div>
	)
}

export default page
