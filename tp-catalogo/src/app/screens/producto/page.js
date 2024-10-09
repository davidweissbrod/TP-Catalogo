"use client"
import { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleProductClick = (id) => {
    router.push(`/products/${id}`); 
  };


  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      >
        <option value="">Categorias</option>
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
            onClick={() => handleProductClick(product.id)} 
            style={{ border: '1px solid #ddd', padding: '20px', cursor: 'pointer' }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
