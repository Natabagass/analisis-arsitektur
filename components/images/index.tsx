import Image from "next/image";

const Images = ({ data }: { data: string }) => {
    return (
        <div className="w-full h-full justify-center flex">
            <Image src={data} width={400} height={300} className="w-full h-full" alt="Image" />
        </div>
    );
}

export default Images;