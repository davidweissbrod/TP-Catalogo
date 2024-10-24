import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const RandomImages = () => {
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    const getRandomProducts = () => {
        const shuffled = products.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 1);
        setRandomProducts(selected);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            getRandomProducts();
        }
    }, [products]);

    return (
        <div>
            <div>
                {randomProducts.map(product => (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="product-image"
                        width= {250}
                        height={250}
                    />
                ))}
            </div>
        </div>
    );
};

export default RandomImages;
