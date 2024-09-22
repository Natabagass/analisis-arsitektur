const TagCardNews = ({ data }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', border: '1px solid #e5e7eb' }}>
            {data.map((tag, index) => (
                <span key={index} style={{ padding: '0.25rem 0.75rem', backgroundColor: '#E5E7EB', color: '#374151', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500' }}>
                    {tag.tag}
                </span>
            ))}
        </div>
    );
}

export default TagCardNews;