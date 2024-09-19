'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

const NewsVideo = () => {
    const [data, setData] = useState({
        video: '',
        title: '',
        desc: ''
    })

    const getData = async () => {
        const news = await fetch('http://localhost:5000/news-video')

        if (news.status === 200) {
            const datasNews = await news.json()
            setData({ ...data, title: datasNews.title, desc: datasNews.desc, video: datasNews.video })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gap: '2.5rem',
            padding: '2.5rem',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{data.title}</h1>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <video
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    src={data.video}
                    controls
                    alt="Article Video"
                />
            </div>
            <p style={{ fontSize: '1rem', textAlign: 'justify' }}>{data.desc}</p>
        </div>

    );
}

export default NewsVideo;