import ModalBackdrop from "@/components/modal-backdrop"
import { getNewsItem } from "@/lib/news"
import { notFound } from "next/navigation"
export default async function imagePage({ params }) {
	const newsItemSlug = params.slug
	const newsItem = await getNewsItem(newsItemSlug)
	if (!newsItem) {
		notFound()
	}

	return (
		<>
			{/* make this its own component in order to make this comp server comp again */}
			{/* <div
				className='modal-backdrop'
				onClick={router.back}
			/> */}
			<ModalBackdrop />
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
