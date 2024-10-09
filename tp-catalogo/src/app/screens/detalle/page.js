import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Detalle() {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

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
