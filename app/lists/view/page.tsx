"use client"

import { listModelState, listState } from "@/app/lists/state"
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs"
import useAuthState from "@/app/Auth"
import { totalListPoints } from "../builder/utils"
import Formation from "./components/Formation"
import SaveListBtn from "../builder/components/SaveListBtn"
import DataslateSideWidget from "../builder/components/DataslateSideWidget"
import { FaListAlt } from "@react-icons/all-files/fa/FaListAlt"
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer"
import React from "react"
import { pdfStyles } from "@lists/view/pdfStyles"

import dynamic from "next/dynamic"

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

	const MyDoc = () => {
		return (
			<Document>
				<Page size="A4" style={styles.page}>
					<View style={styles.section}>
						<Text>
							<Text>{list.name}</Text>
							{` ${totalListPoints(list).totalPoints} / ${list.points}pts`}
						</Text>
					</View>
					{list.formations.map((formation) => {
						return (
							<View style={styles.section}>
								<Text>{formation.name}</Text>
							</View>
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
			<button
				onClick={() => setVisible(!visible)}
				className="flex items-center text-primary-500 hover:text-primary-400 active:text-tertiary-400 font-graduate py-2">
				<FaListAlt className="mr-2  text-xl" /> List Models
			</button>
			<button>
				<PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
					{({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download now!")}
				</PDFDownloadLink>
			</button>

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
