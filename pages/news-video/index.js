import dynamic from 'next/dynamic'

const NewsVideo = dynamic(() => import('@/components/news-videos'), { ssr: false });
const PopularNewsPage = dynamic(() => import('@/components/popular-news'), { ssr: false });
const TagNews = dynamic(() => import('@/components/tag-news'), { ssr: false })

export default function VideosNewsPage() {
    return (
        <main>
            <div style={{
                width: '100%',
                padding: '2.5rem',
            }}>
                <NewsVideo />
                <PopularNewsPage />
                <TagNews />
            </div>
        </main>
    )
}