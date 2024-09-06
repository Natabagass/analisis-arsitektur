/* eslint-disable @next/next/no-img-element */
'use client'

import Audios from "@/components/audios";
import Images from "@/components/images";
import Text from "@/components/text";
import Videos from "@/components/videos";
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
      <Text data={data.text} />
      <Images data={data.imageUrl} />
      <Videos data={data.videoUrl} />
      <Audios data={data.audioUrl} />
    </div>
  );
}