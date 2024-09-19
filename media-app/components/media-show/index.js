'use client'

import { useEffect, useState } from "react";
import Text from "@/components/text";
import Images from "@/components/images";
import Videos from "@/components/videos";
import Audios from "@/components/audios";

const MediaShow = () => {
    const [data, setData] = useState({
        text: '',
        videoUrl: '',
        audioUrl: '',
        imageUrl: ''
    })

    const getData = async () => {
        const media = await fetch('http://localhost:5000/media')

        if (media.status === 200) {
            const datasMedia = await media.json()
            setData({ ...data, text: datasMedia.text, videoUrl: datasMedia.video, imageUrl: datasMedia.image, audioUrl: datasMedia.audio })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '2.5rem',
            padding: '2.5rem',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            <Text data={data.text} />
            <Images data={data.imageUrl} />
            <Videos data={data.videoUrl} />
            <Audios data={data.audioUrl} />
        </div>
    );
}

export default MediaShow;