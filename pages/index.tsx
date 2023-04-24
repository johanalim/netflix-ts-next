import { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import requests from '../utils/request'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>
          'Home' - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {/* banner */}
        <section>
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
        </section>
      </main>
      {/* modal */}
    </div>
  )
} 

export default Home