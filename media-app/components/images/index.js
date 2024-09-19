import Image from "next/image";

const Images = ({ data }) => {
    return (
        <div styled={{
            position: 'relative',
            width: '100px',
            height: '200px',
        }}>
            <Image src={data} width={400} height={200} alt="Image" />
        </div>
    );
}

export default Images;