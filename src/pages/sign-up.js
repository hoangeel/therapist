"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'components/home/header';
import Footer from 'components/home/footer';
import Sign from 'components/sign-up/sign';
import styles from './page.module.css'

export default function SignUp() {
  return (
    <main className={styles.main}>
      <Header/>
        <Sign/>
      <Footer/>
    </main>
  )
}
