import { useEffect, useState } from "react"

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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
                {data.map((tag, index) => (
                    <span key={index} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#E5E7EB', color: '#374151', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500' }}>
                        {tag.tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TagNews;