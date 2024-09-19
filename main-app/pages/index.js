import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
const MediasPage= dynamic(() => import('media-app/MediaShow'), { ssr: false });

export default function Home() {
  return (
    <main>
      <div>
        <MediasPage />
      </div>
    </main>
  )
}
