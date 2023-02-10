"use client"
import Image from 'next/image'
import { useState } from "react"
import styles from './started.module.scss'
import {Button, Card, Container, Form, InputGroup, Modal, Stack,} from 'react-bootstrap';

import logo from "../../assets/imgs/1F336 1.png"
import iconModal from "../../assets/imgs/Vector (1).png"
import { useRouter } from 'next/navigation';

export default function Started() {
  const router = useRouter()
  const [sessionData, setSessionData] = useState([
    {
      name:"Interaction Name",
      date:"Date",
      duration:"Duration",
    },
    {
      name:"Session Name",
      date:"Date",
      duration:"Duration",
    },
    {
      name:"Session Name",
      date:"Date",
      duration:"Duration",
    },
    {
      name:"Session Name",
      date:"Date",
      duration:"Duration",
    },
  ]);
  const deleteSession = (index)=>{
    const rows = [...sessionData];
    rows.splice(index, 1);
    setSessionData(rows);
  }
  const viewChane = (index, evnt)=>{
    const { name, value } = evnt.target;
    const rowsInput = [...sessionData];
    rowsInput[index][name] = value;
    setSessionData(rowsInput);
   }
   const addTableRows = ()=>{
    setShow(false)
    const rowsInput={
        name:'',
        date:'',
        duration:'', 
    } 
    setSessionData([...sessionData, rowsInput])
  
}
//new session
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.startedBg}>
      <Container className={styles.container}>
        <Card className={styles.card}>
          <h1>Let's get started!</h1>
          <h2>Sign up and get 1 hour of free GPU hosting.</h2>
          <Button className={styles.new} onClick={handleShow}>NEW Session</Button>
          <Modal show={show} onHide={handleClose} className={styles.modal}>
              <Modal.Body className={styles.modalBody}>
                <div className={styles.title} onClick={handleClose}><Image src={iconModal} alt=""/></div>
                <Stack direction='horizontal' className={styles.groupLogo}>
                  <div className={styles.logo}><Image src={logo} alt="logo"/></div>
                  <h1 className={styles.textLogo}>Tamale.<span>ai</span></h1>
                </Stack>
                <p>Session Name</p>
                <Button onClick={addTableRows}>RECORD Sesion</Button>
              </Modal.Body>
          </Modal>
          {
            sessionData.map((data, index)=>{
              const {name, date, duration}= data;
              return(
                <div key={index}>
                  <InputGroup className={styles.group} >
                    <div className={styles.name}>
                      <Form.Control type="email" placeholder={data.name}/>
                    </div>
                    <div className={styles.date}>
                      <Form.Control type="email" placeholder={data.date} />
                    </div>
                    <div className={styles.date + (" ") + styles.duration}>
                      <Form.Control type="email" placeholder={data.duration} />
                    </div>
                    <Button className={styles.view} onClick={() => router.push('/view')}>View</Button>
                    <Button onClick={()=>(deleteSession(index))} className={styles.view + (" ") + styles.delete}>Delete</Button>
                  </InputGroup>
              </div>
              )
            })
          }
        </Card>
      </Container>
    </div>
  )
}

