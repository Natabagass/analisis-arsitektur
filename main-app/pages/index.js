import dynamic from 'next/dynamic'

const MediasPage = dynamic(() => import('media-app/MediaShow'), { ssr: false });

export default function Home() {
  return (
    <main>
      <div>
        <MediasPage />
      </div>
    </main>
  )
}
