import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import {FloatingDiv} from './components/floatingdiv/floatingdiv'
import { oxygen } from './fonts'
import React from 'react'
import App from 'next/app'

export default function Home() {

  ReactDOM.render(<FloatingDiv/>, App)
  return (
    <main className={`${styles.main} ${oxygen.variable}`}>
      
      <nav className={styles.nav1}>
        <div className={styles.home1}>
          <Link href="/" className={`${styles.link2} ${styles.navdecor}`}>HOME</Link>
        </div>
        <div className={styles.one} >
          <Link href="/editorial" className={`${styles.link1} ${styles.navdecor}`}>EDITORIAL</Link>
          <Link href="/mythos" className={`${styles.link1} ${styles.navdecor}`}>MYTHOS</Link>
          <Link href="/projects" className={`${styles.link1} ${styles.navdecor}`}>PROJECTS</Link>
          <Link href="/social" className={`${styles.link1} ${styles.navdecor}`}>SOCIAL</Link>
        </div>

      </nav>

      <div className={styles.fdContainer}>
        <FloatingDiv/>
      </div>

    </main>
  )
}
// --IDEAS FROM LAST SESH--
//   ~Components on the homepage, your writing raw code rn so...Home
//   ~Maybe start with a floating div, introducing the page for now. I am getting anxy sitting here idk why so i am stopping but rn I really wanna keep going but I cannt....a