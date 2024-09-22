const Footer = () => {
    return (
        <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#374151', color: '#fff', marginTop: '2rem' }}>
            <p style={{ marginBottom: '0.5rem' }}>© 2024 My Website. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
            </div>
        </div>
    );
}

export default Footer;