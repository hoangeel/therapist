"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Started from 'components/logged/started';
import styles from '../page.module.css'

export default function Logged() {
  return (
    <main className={styles.main}>
      <Started/>
    </main>
  )
}
