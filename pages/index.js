import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar.jsx'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mouiz Ahmed</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Navbar />
        <Main />
        <About />
        <Projects />
        
      </main>

      <footer>
       
      </footer>
    </div>
  )
}
