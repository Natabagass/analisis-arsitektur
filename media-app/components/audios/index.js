const Audios = ({ data }) => {
    return (
        <div>
            <audio controls src={data} />
        </div>
    );
}

export default Audios;