"use client"
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from 'components/home/header';
import Section from 'components/home/section';
import MoveAbout from 'components/home/moveAbout';
import About from 'components/home/about';
import Footer from 'components/home/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Section/>
      <About/>
      <MoveAbout/>
      <Footer/>
    </main>
  )
}
