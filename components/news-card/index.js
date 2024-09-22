import Image from "next/image";

const NewsCard = ({ item }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '0.375rem', overflow: 'hidden', width: '16rem' }}>
            <div style={{ position: 'relative', width: '100%', height: '10rem' }}>
                <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderTopLeftRadius: '0.375rem', borderTopRightRadius: '0.375rem' }}
                />
            </div>

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1F2937', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
                    {item.title}
                </h2>

                <p style={{ fontSize: '0.875rem', color: '#4B5563', overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
                    {item.description}
                </p>
            </div>
        </div>

    );
}

export default NewsCard;