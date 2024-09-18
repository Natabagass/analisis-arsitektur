'use client'

import { useEffect, useState } from "react"

export default function ImagesPage() {
    const [data, setData] = useState({
        audioUrl: '',
    })

    const getData = async () => {
        const audio = await fetch('http://localhost:5000/audio')

        if (audio.status === 200) {
            const datasAudio = await audio.json()
            setData({ ...data, audioUrl: datasAudio.url })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-full">
            <audio controls src={data.audioUrl} />
        </div>
    );
}
