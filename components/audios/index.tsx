const Audios = ({ data }: { data: string }) => {
    return (
        <div className="w-full">
            <audio controls src={data} />
        </div>
    );
}

export default Audios;