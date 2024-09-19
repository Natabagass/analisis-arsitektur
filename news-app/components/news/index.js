'sue client'

import Image from "next/image";
import { useEffect, useState } from "react";

const MediaShow = () => {
    const [data, setData] = useState({
        image: '',
        title: '',
        desc: ''
    })

    const getData = async () => {
        const news = await fetch('http://localhost:5000/news')

        if (news.status === 200) {
            const datasNews = await news.json()
            setData({ ...data, title: datasNews.title, desc: datasNews.desc, image: datasNews.image })
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
                <Image
                    src={data.image} 
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="center" 
                    alt="Article Image" 
                />
            </div>
            <p style={{ fontSize: '1rem', textAlign: 'justify' }}>{data.desc}</p>
        </div>
    );
}

export default MediaShow;