import Footer from '@/components/utils/footer'
import Navbar from '@/components/utils/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <nav>
        <Navbar />
      </nav>
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        <Footer />
      </footer>
    </Html>
  )
}
