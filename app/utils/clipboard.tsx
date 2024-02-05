export const addToClipboard = (link: string) => {
	navigator.clipboard.writeText(link)
}
