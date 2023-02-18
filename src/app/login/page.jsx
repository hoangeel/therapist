"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentLogin from 'components/login/contentLogin';
import styles from '../page.module.css'


export default function Login() {
  return (
    <main className={styles.main}>
      <ContentLogin/>
    </main>
  )
}
