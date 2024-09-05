/* eslint-disable @next/next/no-img-element */
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

type data = {
  text: string,
  videoUrl: string,
  audioUrl: string,
  imageUrl: string
}

export default function Home() {
  const [data, setData] = useState<data>({
    text: '',
    videoUrl: '',
    audioUrl: '',
    imageUrl: ''
  })

  const getData = async () => {
    const video = await fetch('/api/video')
    const text = await fetch('/api/text')
    const image = await fetch('/api/image')
    const audio = await fetch('/api/audio')

    if (video.status === 200 || text.status === 200 || image.status === 200 || audio.status === 200) {
      const datasVideo = await video.json()
      const datasText = await text.json()
      const datasImage = await image.json()
      const datasAudio = await audio.json()
      setData({...data, text: datasText.text, videoUrl: datasVideo.url, imageUrl: datasImage.url, audioUrl: datasAudio.url})
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-10 p-10 h-full justify-center items-center w-full">
      <div className="w-full">
        <h1>{data?.text}</h1>
      </div>
      <div className="w-full h-full justify-center flex">
        <img src={data?.imageUrl} className="w-full h-full" alt="Image" />
      </div>
      <div className="w-full">
        <video
          src={data?.videoUrl}
          controls={true}
          autoPlay={false}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          className="top-0 left-0 z-10"
        />
      </div>
      <div className="w-full">
        <audio controls src={data?.audioUrl} />
      </div>
    </div>
  );
}