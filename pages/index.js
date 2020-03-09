import { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'

import CustomElement from '../components/frame-element'

const Home = () => {
  useEffect(() => {
    console.log('I was mounted')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>I/O marriage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CustomElement />
      <main className={styles.main}>
        <h1 className='title'>
          What shall become a beautiful marriage between{' '}
          <a href='https://nextjs.org'>Next.js</a> and{' '}
          <a href='https://preactjs.com'>Preact!</a>
        </h1>
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
