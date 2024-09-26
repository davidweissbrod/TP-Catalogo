import Image from "next/image";
import styles from "./page.module.css";
import Router from "./Router";


const getRandomProducts = () => {
  return products.sort(() => 0.5 - Math.random()).slice(0, 6);
};

export default function Home() {
  const randomProducts = getRandomProducts();

  return (
    <div>
      <h1>Bienvenido a nuestro Catálogo</h1>
      
        {carouselImages.map((src, index) => (
          <div key={index} className={styles.slide}>
            <Image src={src} alt={`Carousel ${index + 1}`} width={600} height={400} />
          </div>
        ))}

      <h2>Productos</h2>
      <div className={styles.products}>
        {randomProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <Image src={product.img} alt={product.name} width={200} height={200} />
            <h3>{product.name}</h3>
          </div>
        ))}
        <Router children={'Productos'} href={'./screens/producto'}/>
      </div>
    </div>
  );
}
