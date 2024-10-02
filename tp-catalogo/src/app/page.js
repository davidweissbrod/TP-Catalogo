'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Router from "./Router";
import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomImages from "./components/RandomImages";

export default function Home() {
  const [randomProducts, setRandomProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data.products;
      const randomProducts = getRandomProducts(products);
      setRandomProducts(randomProducts);
      console.log(products);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const getRandomProducts = (products) => {
    return products.sort(() => 0.5 - Math.random()).slice(0, 6);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bienvenido a nuestro Catálogo</h1>

      <div className={styles.carousel}>
        <RandomImages />
      </div>

      <h2>Productos</h2>
      <div className={styles.products}>
        {randomProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
            <h3>{product.name}</h3>
          </div>
        ))}
        <Router children={'Productos'} href={'./screens/producto'}>Productos</Router>
      </div>
    </div>
  );
}



