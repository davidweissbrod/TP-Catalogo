import Image from "next/image";
import styles from "./page.module.css";
import Router from "./Router";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  { id: 1, name: "Producto 1", img: "/images/prod1.jpg", price: 50 },
  { id: 2, name: "Producto 2", img: "/images/prod2.jpg", price: 70 },
  { id: 3, name: "Producto 3", img: "/images/prod3.jpg", price: 120 },
  { id: 4, name: "Producto 4", img: "/images/prod4.jpg", price: 30 },
  { id: 5, name: "Producto 5", img: "/images/prod5.jpg", price: 90 },
  { id: 6, name: "Producto 6", img: "/images/prod6.jpg", price: 500 },
  { id: 7, name: "Producto 7", img: "/images/prod7.jpg", price: 70 },
  { id: 8, name: "Producto 8", img: "/images/prod8.jpg", price: 200 },
  { id: 9, name: "Producto 9", img: "/images/prod9.jpg", price: 100 },
  { id: 10, name: "Producto 10", img: "/images/prod10.jpg", price: 300 },
];

const carouselImages = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
  "/images/carousel6.jpg",
];

const getRandomProducts = () => {
  return products.sort(() => 0.5 - Math.random()).slice(0, 6);
};

export default function Home() {
  const randomProducts = getRandomProducts();

  return (
    <div>
      <h1>Bienvenido a nuestro Catálogo</h1>
      
      <Slider {...settings}>
        {carouselImages.map((src, index) => (
          <div key={index} className={styles.slide}>
            <Image src={src} alt={`Carousel ${index + 1}`} width={600} height={400} />
          </div>
        ))}
      </Slider>
      
      <h2>Productos</h2>
      <div className={styles.products}>
        {randomProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <Image src={product.img} alt={product.name} width={200} height={200} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
