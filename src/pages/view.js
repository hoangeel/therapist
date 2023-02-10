"use client"
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/home/footer';
import Header from 'components/logged/header';
import ContentView from 'components/view/contentView';
import styles from './page.module.css'

export default function View() {
  return (
    <main className={styles.main}>
      <Header/>
      <ContentView/>
      <Footer/>
    </main>
  )
}
