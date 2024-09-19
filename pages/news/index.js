import dynamic from 'next/dynamic'

const NewsPage = dynamic(() => import('@/components/news/index'), { ssr: false });

export default function News() {
    return (
        <main>
            <div>
                <NewsPage />
            </div>
        </main>
    )
}
