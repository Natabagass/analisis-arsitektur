const Images = ({ data }: { data: string }) => {
    return (
        <div className="w-full h-full justify-center flex">
            <img src={data} className="w-full h-full" alt="Image" />
        </div>
    );
}

export default Images;