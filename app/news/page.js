import Link from "next/link"
import { DUMMY_NEWS } from "@/dummy-news"
export default function NewsPage() {
	return (
		<>
			<p>News Page</p>
			<ul className='news-list'>
				{DUMMY_NEWS.map((newsItem) => {
					return (
						<li key={newsItem.id}>
							<Link href={`/news/${newsItem.slug}`}>
								<img
									src={`/images/news/${newsItem.image}`}
									alt={newsItem.title}
								/>
								{newsItem.title}
							</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}
