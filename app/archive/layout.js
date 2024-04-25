export default function ArchiveLayout({
	children,
	archive,
	latest,
	//   Slots are passed as props to the shared parent layout  alongside the children prop
}) {
	return (
		<div>
			<h1>News Archive</h1>
			<section id='archive-filter'>{archive}</section>
			<section id='archive-latest'>{latest}</section>
		</div>
	)
}
