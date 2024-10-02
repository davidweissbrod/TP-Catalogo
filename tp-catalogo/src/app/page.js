'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Router from "./Router";
import products from './data/products.json';
//import imagen from 'src/app/images/off_white.jpg'





const getRandomProducts = () => {
  return products.sort(() => 0.5 - Math.random()).slice(0, 6);
};

const getRandomImages = () => {
  return products.map(product => product.image).sort(() => 0.5 - Math.random()).slice(0, 3);
};

export default function Home() {
  const randomProducts = getRandomProducts();
  const carouselImages = getRandomImages();



 

  return (
    <div>
      <h1>Bienvenido a nuestro Catálogo</h1>

      <div className={styles.carousel}>
        {carouselImages.map((src, index) => (
          <div key={index} className={styles.slide}>
            <Image src='' alt={`Imagen`} width={600} height={400} />
          </div>
        ))}
      </div>

      <h2>Productos</h2>
      <div className={styles.products}>
        {randomProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <Image src='' alt={'product.name'} width={200} height={200} />
            <h3>{product.name}</h3>
          </div>
        ))}
        <Router children={'Productos'} href={'./screens/producto'}>Productos</Router>
      </div>
    </div>
  );
}

