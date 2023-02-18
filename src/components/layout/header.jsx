"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './header.module.scss'
import { Button, Container, Offcanvas, Stack } from 'react-bootstrap';

import logo from "../../assets/imgs/1F336 1.png"
import iconMenu from "../../assets/imgs/iconMenu.jpg"
import { useRouter } from 'next/navigation';

export default function Header({ isPrivate }) {
  const router = useRouter()
  const [show, setShow] = useState(false);

  console.log(">>> isPrivate: ", isPrivate)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Stack direction="horizontal">
          <div className={styles.logo} onClick={() => router.push('/')}><Image src={logo} alt="logo" /></div>
          <h1 className={styles.textLogo} onClick={() => router.push('/')}>Tamale.<span>ai</span></h1>
          {
            isPrivate ? (<Button className={styles.signUp}>Account</Button>) : (
              <>
                <Button className={styles.signUp} onClick={() => router.push('/sign-up')}>Sign Up</Button>
                <Button className={styles.signUp + (" ") + styles.login} onClick={() => router.push('/login')}>Login</Button>
              </>
            )
          }
          <div className={styles.menu}>
            <Button className={styles.iconmenu} onClick={handleShow}>
              <Image src={iconMenu} alt="" />
            </Button>
            <Offcanvas className="abcd" show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header className={styles.back}>
                <Offcanvas.Title onClick={handleClose}>X</Offcanvas.Title>
              </Offcanvas.Header>
              {isPrivate ? (<Offcanvas.Body>
                <h3 onClick={() => router.push('/account')}>Account</h3>
                <h3 onClick={() => router.push('/')}>Logout</h3>
              </Offcanvas.Body>) : (<Offcanvas.Body>
                <h3 onClick={() => router.push('/sign-up')}>Sign Up</h3>
                <h3 onClick={() => router.push('/login')}>Login</h3>
              </Offcanvas.Body>)}
            </Offcanvas>
          </div>
        </Stack>
      </div>
    </Container>
  )
}


