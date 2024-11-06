'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const ContextCarrito = createContext();
export const CarritoProvider = ({ children }) => {
const [carrito, setCarrito] = useState([]);
useEffect(() => {
const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
setCarrito(carritoGuardado);
}, []);

const agregarAlCarrito = (producto) => {
const nuevoCarrito = [...carrito, producto];
setCarrito(nuevoCarrito);
localStorage.setItem('carrito', JSON.stringify(nuevoCarrito)); 
};

const eliminarDelCarrito = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== productoAEliminar.id);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
};

return (
<ContextCarrito.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}> {children}</ContextCarrito.Provider>
);
};
export const useContextCarrito = () => {
const context = useContext(ContextCarrito);
return context;
};