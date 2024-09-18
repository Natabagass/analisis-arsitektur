'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ImagesPage() {
    const [data, setData] = useState({
        imageUrl: '',
    })

    const getData = async () => {
        const image = await fetch('http://localhost:5000/image')

        if (image.status === 200) {
            const datasImage = await image.json()
            setData({ ...data, imageUrl: datasImage.url })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-full h-full justify-center flex">
            <Image src={data?.imageUrl} width={400} height={400} className="w-full h-full" alt="Image" />
        </div>
    );
}
