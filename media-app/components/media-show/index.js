'sue client'

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
        <div className="grid grid-cols-2 gap-10 p-10 h-full justify-center items-center w-full">
            <Text data={data.text} />
            <Images data={data.imageUrl} />
            <Videos data={data.videoUrl} />
            <Audios data={data.audioUrl} />
        </div>
    );
}

export default MediaShow;