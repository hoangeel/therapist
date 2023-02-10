"use client"
import styles from './contentView.module.scss'
import {Button, Card, Container} from 'react-bootstrap';

export default function ContentView() {
  return (
    <div className={styles.viewBg}>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Button className={styles.session}>Session fields</Button>
          <div className={styles.group}>
            <Button className={styles.ai}>AI Transcript</Button>
            <Button className={styles.copy}>Copy to clipboard/email</Button>
          </div>
          <div className={styles.group}>
            <Button className={styles.ai}>AI Summary</Button>
            <Button className={styles.copy}>Copy to clipboard/email</Button>
          </div>
        </Card>
      </Container>
    </div>
  )
}
