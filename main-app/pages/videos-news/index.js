import dynamic from 'next/dynamic'

const NewsVideoPage = dynamic(() => import('videos-news-app/Videos-news'), { ssr: false });

export default function VideosNewsPage() {
    return (
        <main>
            <div>
                <NewsVideoPage />
            </div>
        </main>
    )
}