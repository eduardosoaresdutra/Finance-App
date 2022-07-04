import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from "../components/shared/button"
import Header from "../components/templates/header"
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finance App</title>
        <meta name="Home" content="Finance App Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        
      </Header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
