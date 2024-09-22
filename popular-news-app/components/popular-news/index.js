import { useEffect, useState } from "react";
import NewsCard from "../news-card";

const PopularNews = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const media = await fetch('http://localhost:5000/popular-news')

        if (media.status === 200) {
            const datasMedia = await media.json()
            setData(datasMedia)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1.5rem', marginTop: '2.5rem', justifyContent: 'center' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Ini merupakan Berita Populer</h2>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '1.5rem', justifyContent: 'center' }}>
                {
                    data.map((item, index) => (
                        <NewsCard
                            key={index}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default PopularNews;