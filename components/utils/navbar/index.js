const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#1f2937', color: '#fff' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                My Website
            </div>
            <nav style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
                <a href="/news-video" style={{ color: '#fff', textDecoration: 'none' }}>News Video</a>
                <a href="/news" style={{ color: '#fff', textDecoration: 'none' }}>News</a>
            </nav>
        </div>
    );
}

export default Navbar;