import { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import requests from '../utils/request'
import Banner from '@/components/Banner'

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
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 '>
        <Banner/>
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