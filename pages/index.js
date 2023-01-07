import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Edson Moraes - Gyn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Curiosidades Brasil Gyn" />
        <p className="description">
          Em breve, novidades do canal.
        </p>
      </main>

      <Footer />
    </div>
  )
}
