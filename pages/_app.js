import Footer from '@/components/utils/footer';
import Navbar from '@/components/utils/navbar';
import '@/styles/globals.css'

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
