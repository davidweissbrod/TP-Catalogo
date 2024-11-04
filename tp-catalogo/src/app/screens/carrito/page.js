import React from "react";
import { useCart } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/Navbar'
import { Nav } from "react-bootstrap";

export default function Carrito() {


  return (
    <>
      <NavBar/>
      <h1>Carrito</h1>
    </>
  );
}
