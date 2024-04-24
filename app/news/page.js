import Link from "next/link"

export default function NewsPage() {
	return (
		<>
			<p>News Page</p>
			<ul>
				<li>
					<Link href='/news/first-news'>First news item</Link>
				</li>
				<li>
					<Link href='/news/second-news'>Second news item</Link>
				</li>
				<li>
					<Link href='/news/third-news'>Third news item</Link>
				</li>
			</ul>
		</>
	)
}
