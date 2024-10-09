"use client"
import React, { useState } from "react"
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Contacto = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <h1>Contactanos!</h1>
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