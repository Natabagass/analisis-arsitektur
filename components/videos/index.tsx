const Videos = ({ data }: { data: string }) => {
    return (
        <div className="w-full">
            <video
                src={data}
                controls={true}
                autoPlay={false}
                width="100%"
                height="100%"
                style={{ objectFit: 'cover' }}
                className="top-0 left-0 z-10"
            />
        </div>
    );
}

export default Videos;