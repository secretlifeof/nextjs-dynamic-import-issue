import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import Head from 'next/head'

import { withUrqlClient } from 'next-urql'
import { useQuery } from 'urql'

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
  const [result] = useQuery({
    query: getPosts
  })

  // useEffect(() => {
  //   window.EventBus.fire('pass-data', { data: result.data })
  // }, [result])
  // console.log('launch', launch())
  // const ceRef = useRef(null)

  // useEffect(() => {
  //   if (ceRef.current) {
  //     start()
  //   }
  // }, [])

  const senddata = () => {
    // if (typeof window !== 'undefined') {
    //   window.EventBus.fire('pass-data', { data: result.data })
    // }
    console.log('Click')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Pimello />
      <main className={styles.main}>
        <h1
          className='title'
          onClick={() => console.log('CLICK')}
          style={{ background: 'yellow' }}
        >
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
          <div>{JSON.stringify(result.data)}</div>
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

export default withUrqlClient({ url: 'http://localhost:1337/graphql' })(Home)
