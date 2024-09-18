'use client'

import { useEffect, useState } from "react"

export default function TextsPage() {
    const [data, setData] = useState({
        text: '',
    })

    const getData = async () => {
        const text = await fetch('http://localhost:5000/text')

        if (text.status === 200) {
            const datasText = await text.json()
            setData({ ...data, text: datasText.text })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-full">
            <h1>{data.text}</h1>
        </div>
    );
}
