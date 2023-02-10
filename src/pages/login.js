"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentLogin from 'components/login/contentLogin';
import Header from 'components/home/header';
import Footer from 'components/home/footer';
import styles from './page.module.css'

export default function Login() {
  return (
    <main className={styles.main}>
      <Header/>
      <ContentLogin/>
      <Footer/>
    </main>
  )
}
