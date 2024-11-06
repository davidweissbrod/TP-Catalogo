'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContextCarrito } from '../../context/CartContext'; 
import { Button, Container, Row, Col, Card } from 'react-bootstrap'; 
import Link from 'next/link'; 
import Navbar from '../../components/Navbar'

const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContextCarrito(); 
  const totalCompra = carrito.reduce(
    (total, producto) => total + producto.price,
    0
  ); 

  return (
  <>
  <Navbar/>
  <Container className="mt-5">
    <h1>Detalles de tu carrito</h1>
      <div>
        <Row>
          {carrito.map((producto) => (
    <Col key={producto.id} sm={12} md={6} lg={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <div className="d-flex justify-content-center mb-3">
            <img 
              src={producto.thumbnail} 
              alt={producto.title} 
              style={{ width: '100%', maxWidth: '150px', height: 'auto' }} 
            />
          </div>
          <Card.Text>
            <strong>Precio:</strong> ${producto.price}
          </Card.Text>
          <Button variant="danger" onClick={() => eliminarDelCarrito(producto)} style={{ backgroundColor: 'red', border: 'none' }}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
 <div className="text-center mt-4">
    <h3>Total de la compra: ${totalCompra}</h3>
      <Link href="/" passHref>
          <Button variant="outline-secondary" className="mx-2" style={{marginBottom: '90px'}}>Seguir comprando</Button>
      </Link>
  </div>
</div>
</Container>
</>
  );
};


export default Carrito;

