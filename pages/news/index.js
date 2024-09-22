import dynamic from 'next/dynamic'

const NewsPage = dynamic(() => import('@/components/news/index'), { ssr: false });
const PopularNewsPage = dynamic(() => import('@/components/popular-news'), { ssr: false });
const TagNews = dynamic(() => import('@/components/tag-news'), { ssr: false })

export default function News() {
    return (
        <main>
            <div style={{
                width: '100%',
                padding: '2.5rem',
            }}>
                <NewsPage />
                <PopularNewsPage />
                <TagNews />
            </div>
        </main>
    )
}
