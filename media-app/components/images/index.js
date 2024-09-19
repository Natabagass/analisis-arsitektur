import Image from "next/image";

const Images = ({ data }) => {
    return (
        <div>
            <Image src={data} width={400} height={300} className="w-full h-full" alt="Image" />
        </div>
    );
}

export default Images;