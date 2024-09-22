import dynamic from 'next/dynamic'

const NewsPage = dynamic(() => import('news-app/News'), { ssr: false });
const PopularNewsPage = dynamic(() => import('popular-news-app/PopularNews'), { ssr: false });
const TagNews = dynamic(() => import('tag-news-app/TagNews'), { ssr: false });

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
