"use client"
import styles from './sign.module.scss'
import {Button, Card, Container, Form,} from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Sign() {
  const router = useRouter()
  return (
    <div className={styles.signupBg}>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <h1>Login</h1>
          <p className={styles.text}>Login and get 1 hour of free GPU hosting.</p>
          <Form>
            <Form.Group className={styles.group}>
              <Form.Label>Firt Name</Form.Label>
              <Form.Control  type="email" placeholder="" />
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" placeholder="" />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </Form>
          <h4>Already a member? <span onClick={() => router.push('/login')}>Log In</span></h4>
          <Button>SIGN UP</Button>
        </Card>
      </Container>
    </div>
  )
}
