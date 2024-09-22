import dynamic from 'next/dynamic';
import '@/styles/globals.css';

const Footer = dynamic(() => import('shared-nav-footer/Footer'), { ssr: false });
const Navbar = dynamic(() => import('shared-nav-footer/Navbar'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
