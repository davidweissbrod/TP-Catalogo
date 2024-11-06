'use client';
import { useContextCarrito } from '../context/CartContext'; 
import Link from 'next/link';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'; 
import { Button } from 'react-bootstrap';

const NavbarComponent = () => {
  const { carrito, eliminarDelCarrito } = useContextCarrito(); 
  const totalCompra = carrito.reduce(
    (total, producto) => total + producto.price,
    0
  ); 
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Catalogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/screens/producto" passHref legacyBehavior>
              Producto
            </Nav.Link>
            <Nav.Link href="/screens/contacto" passHref legacyBehavior>
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-custom-components">
                🛒
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: '250px' }}>
                {carrito.length === 0 ? (
                  <Dropdown.ItemText>No hay productos en el carrito.</Dropdown.ItemText>
                ) : (
                  <>
                    <Dropdown.Header>Productos en el carrito</Dropdown.Header>
                    {carrito.map((producto) => (
                      <Dropdown.Item key={producto.id}>
                        <h4>{producto.title}</h4>
                        <b>Precio: ${producto.price}</b>
                        <br/>
                        <Button onClick={() => eliminarDelCarrito(producto)} style={{backgroundColor: 'red', border: 'none'}}>
                          Eliminar
                        </Button>
                      </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.ItemText>
                      <strong>Total: ${totalCompra}</strong>
                    </Dropdown.ItemText>
                    <Dropdown.Item as={Link} href="/screens/carrito">
                      Ir al carrito
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
