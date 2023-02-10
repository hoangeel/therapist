"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './section.module.scss'
import {Button, Container, Stack} from 'react-bootstrap';

import icon from "../../assets/imgs/Vector.png"
import imgSection from "../../assets/imgs/iconSection.png"
import { useRouter } from 'next/navigation';
export default function Section() {
  const router = useRouter()
  return (
    <div className={styles.sectionBg}>
      <Container className={styles.container}>
          <div className={styles.section}>
            <div className={styles.content}>
              <p>Spice up your therapy notes and pep up your quality of life!</p>
              <Button onClick={() => router.push('/sign-up')}>Sign Up Now<span><Image src={icon} alt="icon"/></span></Button>
            </div>
            <div className={styles.img}><Image src={imgSection} alt="imgSection"/></div>
          </div>
      </Container>
    </div>
  )
}
