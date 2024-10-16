"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react"
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../components/Navbar.js'
import styles from '../../styles/contacto.module.css'

const Contacto = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Navbar/>
        <h1 className={styles.title}>Contactanos!</h1>
            <div className={styles.formulario}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el mail"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control type="message" placeholder="Escriba aqui"/>
                </Form.Group>      
                <Button variant="primary" type="submit" onClick={handleShow}>
                    Enviar
                </Button>
            </Form>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Gracias por contactarnos</Modal.Title>
                </Modal.Header>
                <Modal.Body>Pronto leeremos tu mensaje</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default Contacto;