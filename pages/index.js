import dynamic from 'next/dynamic'

const MediasPage = dynamic(() => import('@/components/media-show/index'), { ssr: false });

export default function Home() {
  return (
    <main>
      <div>
        <MediasPage />
      </div>
    </main>
  )
}
