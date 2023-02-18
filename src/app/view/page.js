"use client"
// import '../app/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../page.module.css'
import ContentView from 'components/view/contentView';


export default function View() {
  return (
    <main className={styles.main}>
      <ContentView/>
    </main>
  )
}
