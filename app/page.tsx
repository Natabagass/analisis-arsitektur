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
  const [data, setData] = useState<data>()

  const getData = async () => {
    const res = await fetch('/api/get', {
      method: 'GET'
    })

    if (res.status === 200) {
      const datas = await res.json()
      setData(datas)
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
