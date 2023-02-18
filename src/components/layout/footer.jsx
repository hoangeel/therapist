"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './footer.module.scss'
import {Button, Card, Col, Container, InputGroup, Row, Stack} from 'react-bootstrap';

import icon from "../../assets/imgs/1F33F 1.png"
import twitter from "../../assets/imgs/twitter.png"
import discord from "../../assets/imgs/discord.png"
import likedin from "../../assets/imgs/linkedin.png"
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter()
  return (
    <Container className={styles.container}>
      <div className={styles.footer}>
      <Image className={styles.icon} src={icon} alt="" onClick={() => router.push('/')}/>
        <h2>
          <span onClick={() => router.push('/')}>Tamale.ai</span> is currently in closed beta. If you are interested in seeing how 
          Tamale works in actionfor your practice please contact us on <b>Twitter</b> or <b>Discord</b>
        </h2>
        <h3>© <b>2023 Tamale.ai</b></h3>
        <Stack direction="horizontal" className={styles.group}>
          <div className={styles.twitter}><Image src={twitter} alt=""/></div>
          <div className={styles.discord}><Image src={discord} alt=""/></div>
          <div className={styles.likedin}><Image src={likedin} alt=""/></div>
        </Stack>
      </div>
    </Container>
  )
}
