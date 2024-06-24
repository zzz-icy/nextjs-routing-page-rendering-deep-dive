import NewsList from "@/components/news-list"
import {
	getAllNews,
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/lib/news"
import Link from "next/link"
export default async function FilteredNewsPage({ params }) {
	const filter = params.filter //will give us an array of all matched segments(catch all routes )
	console.log("filter", filter)
	const selectedYear = filter?.[0]
	const selectedMonth = filter?.[1]
	let news
	let links = await getAvailableNewsYears()

	if (selectedYear && !selectedMonth) {
		news = await getNewsForYear(selectedYear)
		links = getAvailableNewsMonths(selectedYear)
	}

	if (selectedYear && selectedMonth) {
		news = await getNewsForYearAndMonth(selectedYear, selectedMonth)
		links = []
	}
	console.log("aaa", news, selectedYear, selectedMonth)

	let newsContent = <p>No news found for the selected year.</p>
	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />
	}
	const availableYears = await getAvailableNewsYears()
	const availableMonths = getAvailableNewsMonths()

	if (
		(selectedYear && !availableYears.includes(selectedYear)) ||
		(selectedMonth && !availableMonths.includes(selectedMonth))
	) {
		throw new Error("Invalid filter.")
	}
	return (
		<>
			<header id='archive-header'>
				<nav>
					<ul>
						{links.map((link) => {
							const href = selectedYear
								? `/archive/${selectedYear}/${link}`
								: `/archive/${link}`

							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	)
}
