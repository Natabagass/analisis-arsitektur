import Image from 'next/image'
import { Inter } from 'next/font/google'
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
