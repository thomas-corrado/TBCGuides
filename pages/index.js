import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import frontPage from '../components/frontPage';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Hanover Guides</title>
        <meta name="description" content="Hanover Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <frontPage />
      </main>

      
    </div>
  );
}
