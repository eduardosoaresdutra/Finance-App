import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/templates/header"
import styles from '../styles/Home.module.scss'
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finance App</title>
        <meta name="Home" content="Finance App Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Link href="/dashboard">Dashboard</Link>
      </Header>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
