"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/home/footer';
import Started from 'components/logged/started';
import Header from 'components/logged/header';
import styles from './page.module.css'


export default function Logged() {
  return (
    <main className={styles.main}>
      <Header/>
      <Started/>
      <Footer/>
    </main>
  )
}
