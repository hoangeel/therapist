"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from 'components/sign-up/sign';
import styles from '../page.module.css'


export default function SignUp() {
  return (
    <main className={styles.main}>
      <Sign/>
    </main>
  )
}
