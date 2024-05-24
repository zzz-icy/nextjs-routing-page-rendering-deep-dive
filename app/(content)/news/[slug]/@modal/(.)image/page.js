"use client"
import { DUMMY_NEWS } from "@/dummy-news"
import { notFound, useRouter } from "next/navigation"
export default function imagePage({ params }) {
	const router = useRouter()
	const newsItemSlug = params.slug
	const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug)
	if (!newsItem) {
		notFound()
	}

	return (
		<>
			<div
				className='modal-backdrop'
				onClick={router.back}
			/>
			<dialog
				className='modal'
				open
			>
				<div className='fullscreen-image'>
					<img
						src={`/images/news/${newsItem.image}`}
						alt={newsItem.title}
					/>
				</div>
			</dialog>
		</>
	)
}

// this is useful when we want to show the image in a modal when it is intercepted
// otherwise show it as a fullscreen page on reloading or url
