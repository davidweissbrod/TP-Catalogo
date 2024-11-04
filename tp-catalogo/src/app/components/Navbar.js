import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Header(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Catalogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/screens/producto" passHref legacyBehavior>Producto</Nav.Link>
            <Nav.Link href="/screens/contacto" passHref legacyBehavior>Contacto</Nav.Link>
            <Nav.Link href='/screens/carrito' passHref legacyBehavior>Carrito</Nav.Link>
          </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    ); 
}