"use client"
import Image from 'next/image'
import styles from './about.module.scss'
import {Card, Col, Container, Row} from 'react-bootstrap';

import meet from "../../assets/imgs/chat 1.png"
import tamale1 from "../../assets/imgs/notes 1.png"
import tamale2 from "../../assets/imgs/idea (1) 1.png"
import tamale3 from "../../assets/imgs/notepad (1) 1.png"
import review1 from "../../assets/imgs/therapist 1.png"
import review2 from "../../assets/imgs/copy-writing 1.png"

export default function About() {
  return (
    <div className={styles.about}>
      <Container className={styles.container}>
        <h1 className={styles.title}>About the Product</h1>
        <Row className={styles.content}>
          <Col sm={4} className={styles.col}>
            <Card className={styles.card}>
              <div className={styles.groupImg}>
                <Image className={styles.meet} src={meet} alt=""/>
              </div>
              <p>Meet with your patient, and Tamale listens</p>
            </Card>
          </Col>
          <Col sm={4} className={styles.col}>
            <Card className={styles.card}>
              <div className={styles.groupImg}>
                <Image className={styles.tamale1} src={tamale1} alt=""/>
                <Image className={styles.tamale2} src={tamale2} alt=""/>
                <Image className={styles.tamale3} src={tamale3} alt=""/>
              </div>
              <p>Tamale Transcribes & Summarizes Interaction</p>
            </Card>
          </Col>
          <Col sm={4} className={styles.col}>
            <Card className={styles.card}>
              <div className={styles.groupImg}>
                <Image className={styles.review1} src={review1} alt=""/>
                <Image className={styles.review2} src={review2} alt=""/>
              </div>
              <p>Review Tamale Notes & Summarization</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
