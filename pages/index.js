import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import Head from 'next/head'

import Pimello from '../components/pimello'
import Clicker from '../components/clicker'

const getPosts = `
  query {
    post(id: 1) {
      id
      title
    }
  }
`

const Home = () => {
  useEffect(() => {
    console.log('I was mounted')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Pimello />
      <main className={styles.main}>
        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <Clicker />
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
