import { useState } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Ingredients from './Component/Ingredients';
import Featured from './Component/Featured';
import About from './Component/About';
import All_product from './Component/All_Product';
import Our_Service from './Component/Service';
import Product_Testimonials from'./Component/Product_Testimonials';
import Subscribe from './Component/Subscribe';
import Footer from './Component/footer';
function App() {

  return (
    <> 
    <Navbar></Navbar>
    <div className="hero">
   <Hero></Hero>
   </div>
   <Ingredients></Ingredients>
   <Featured></Featured>
   <About></About>
   <All_product></All_product>
   <Our_Service></Our_Service>
   <Product_Testimonials></Product_Testimonials>
   <Subscribe></Subscribe>
   <Footer></Footer>
    </>
  )
}

export default App
