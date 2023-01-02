import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar.jsx'
import Main from './Main.jsx'
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200']
})

export default function Home() {

  

  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={poppins.className}>
        <Navbar />
        <Main />

        
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
