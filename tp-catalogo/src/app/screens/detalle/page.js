'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error al obtener los detalles del producto:', error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {product.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
}


