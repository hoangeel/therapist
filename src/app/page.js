"use client"
import styles from './page.module.css'
import Section from 'components/home/section';
import MoveAbout from 'components/home/moveAbout';
import About from 'components/home/about';

export default function Home() {
  return (
    <main className={styles.main}>
      <Section/>
      <About/>
      <MoveAbout/>
    </main>
  )
}
