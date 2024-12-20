'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/page.module.css'
import Router from "./components/Router";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarouselHome from "./components/Carousel";
import Navbar from './components/Navbar.js'


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
    <>
      <Navbar/>
      <div className={styles.productsHome}>
      <h1>Bienvenido a nuestro Catálogo</h1>
      <CarouselHome />
      <h2>Productos</h2>
      <div className={styles.products}>
        {randomProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p><strong>${product.price}</strong></p>
          </div>
        ))}
      </div>
      <Router children={'Mas Productos'} href={'./screens/producto'}/>
    </div>
    </>
  );
  
}



