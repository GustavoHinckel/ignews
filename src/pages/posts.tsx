import Head from 'next/head'

import styles from './posts.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>

          <h1>POSTS</h1>

      </main>
    </>
  )
}