import dynamic from 'next/dynamic'

const NewsVideoPage = dynamic(() => import('videos-news-app/Videos-news'), { ssr: false });
const PopularNewsPage = dynamic(() => import('popular-news-app/PopularNews'), { ssr: false });
const TagNews = dynamic(() => import('tag-news-app/TagNews'), { ssr: false });

export default function VideosNewsPage() {
    return (
        <main>
            <div style={{
                width: '100%',
                padding: '2.5rem',
            }}>
                <NewsVideoPage />
                <PopularNewsPage />
                <TagNews />
            </div>
        </main>
    )
}