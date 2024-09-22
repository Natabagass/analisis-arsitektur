import { useEffect, useState } from "react"
import TagCardNews from "../tag-card-news"

const TagNews = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const media = await fetch('http://localhost:5000/tag')

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
            <h2 style={{ fontWeight: 'bold', fontSize: '30px' }}>Ini merupakan Tag Berita</h2>
            <TagCardNews data={data} />
        </div>
    );
}

export default TagNews;