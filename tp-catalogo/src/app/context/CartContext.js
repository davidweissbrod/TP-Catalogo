import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    setCarrito((carritoAnterior) => {
      const productoExiste = carritoAnterior.find((item) => item.id === producto.id);
      if (productoExiste) {
        return carritoAnterior.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...carritoAnterior, { ...producto, cantidad: 1 }];
      }
    });
  };

  const deleteFromCarrito = (id) => {
    setCarrito((carritoAnterior) => carritoAnterior.filter((item) => item.id !== id));
  };

  const updateCantidadFromCarrito = (id, cantidad) => {
    setCarrito((carritoAnterior) =>
      carritoAnterior.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ carrito, addToCart, deleteFromCarrito, updateCantidadFromCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
