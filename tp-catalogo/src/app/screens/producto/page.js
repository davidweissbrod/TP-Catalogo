'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleShow(product, breakpoint) {
    setSelectedProduct(product);
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const categories = [...new Set(data.products.map(product => product.category))];
        setCategories(categories);
      });
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Productos</h1>
        <br />
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '20px', borderRadius: '30px' }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
        >
          <option value="">Categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{ border: '1px solid #ddd', padding: '20px', cursor: 'pointer' }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: '100%', height: '300px', objectFit: 'contain' }}
              />
              <h3>{product.title}</h3>
              <p><strong>${product.price}</strong></p>
              <Button className="me-2 mb-2" onClick={() => handleShow(product, true)}>
                Ver detalles
              </Button>
            </div>
          ))}
        </div>

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: '2rem' }}>{selectedProduct?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
            {selectedProduct && (
              <>
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.title}
                  style={{ width: '400px', height: 'auto', marginRight: '20px' }}
                />
                <div>
                  <h4>Precio: <strong>${selectedProduct.price}</strong></h4>
                  <p>{selectedProduct.description}</p>
                </div>
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
