const Text = ({ data }: { data: string }) => {
    return (
        <div className="w-full">
            <h1>{data}</h1>
        </div>
    );
}

export default Text;