import Link from "next/link"

export default function NewsList({ news }) {
	return (
		<ul className='news-list'>
			{news.map((newsItem) => {
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
	)
}
