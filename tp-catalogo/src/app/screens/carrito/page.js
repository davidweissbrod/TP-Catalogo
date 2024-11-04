import React from "react";
import { useCart } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';

export default function Carrito() {
  const { carrito, deleteFromCarrito, updateCartItem } = useCart();

  const handleCantidadCarrito = (id, cantidad) => {
    if (cantidad > 0) {
      updateCartItem(id, cantidad);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {carrito.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px' }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
              <h3>{item.title}</h3>
              <p><strong>${item.price}</strong></p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleCantidadCarrito(item.id, parseInt(e.target.value))}
                style={{ width: '50px', marginRight: '10px' }}
              />
              <Button variant="danger" onClick={() => deleteFromCarrito(item.id)}>
                Eliminar
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
