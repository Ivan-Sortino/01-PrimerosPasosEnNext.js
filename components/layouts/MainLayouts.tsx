import { FC, PropsWithChildren, ReactElement } from 'react';
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayouts.module.css'



export const MainLayouts: FC<PropsWithChildren> = ( { children }) => {
    return (
        <>
          <Head>
            <title>Home - Ivan</title>
            <meta name="description" content="Home Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar></Navbar>
    
          <main className={styles.main}>
            {children}    
          </main>
        </>
      )
}
