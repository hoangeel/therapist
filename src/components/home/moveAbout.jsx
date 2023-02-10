"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './moveAbout.module.scss'
import {Button, Col, Container, Row, Stack} from 'react-bootstrap';

import imgAbout from "../../assets/imgs/Frame.png"
import logo from "../../assets/imgs/1F336 1.png"

export default function MoveAbout() {
  return (
    <div className={styles.moveAboutBg}>
      <Container className={styles.container}>
          <div className={styles.moveAbout}>
            <h1 className={styles.title}>
              More About <span>Tamale.ai</span> <span><Image src={logo} alt="logo"/></span>
            </h1>
            <Row className={styles.content}>
              <Col lg={6} className={styles.col}>
                <div className={styles.img}>
                  <div className={styles.imgBg}/>
                  <Image src={imgAbout} alt="imgSection"/>
                </div>
              </Col>
              <Col lg={6} className={styles.col}>
                <div className={styles.text}>
                  <span>At Tamale.ai</span> we strive to make products that improve the patient-providerexperience. 
                  We combine our expertise in artificial intelligence and passion for helping people 
                  tothe world of healthcare. All of our services & technologies are HIPAA compliant and 
                  offer themultiple levels of safeguards to ensure your data and privacy are confidential
                </div>
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  )
}
