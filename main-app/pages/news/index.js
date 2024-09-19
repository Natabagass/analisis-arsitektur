import dynamic from 'next/dynamic'

const NewsPage = dynamic(() => import('news-app/News'), { ssr: false });

export default function News() {
    return (
        <main>
            <div>
                <NewsPage />
            </div>
        </main>
    )
}
