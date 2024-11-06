'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../context/CartContext'
import Navbar from '../../components/Navbar'

export default function Carrito() {


  return (
    <>
      <Navbar/>
      <h1>Carrito</h1>
    </>
  );
}
