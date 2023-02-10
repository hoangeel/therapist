"use client"
import styles from './contentLogin.module.scss'
import {Button, Card, Container, Form,} from 'react-bootstrap';
import { useRouter } from 'next/navigation';
  
export default function ContentLogin() {
  const router = useRouter()
  return (
    <div className={styles.loginBg}>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <h1>Login</h1>
          <p className={styles.text}>Login and get 1 hour of free GPU hosting.</p>
          <Form>
            <Form.Group className={styles.group}>
              <Form.Label>E-Mail Address</Form.Label>
              <Form.Control  type="email" placeholder="" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="Enter your password" />
            </Form.Group>
            <Form.Check 
                className={styles.check}
                type="checkbox"
                id={`Me`}
                label={`Remember Me`}
              />
          </Form>
          <Button onClick={() => router.push('/logged-in-view')}>Login</Button>
          <h5>FORGOT YOUR PASSWORD</h5>
        </Card>
      </Container>
    </div>
  )
}
