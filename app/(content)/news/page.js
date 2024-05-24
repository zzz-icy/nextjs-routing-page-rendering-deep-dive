import { DUMMY_NEWS } from "@/dummy-news"
import NewsList from "@/components/news-list"
export default function NewsPage() {
	return (
		<>
			<p>News Page</p>
			<NewsList news={DUMMY_NEWS} />
		</>
	)
}
