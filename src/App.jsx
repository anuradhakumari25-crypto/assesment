// import React, { useState } from 'react'
// import GreadeCalculater from './GreadeCalculater'

// import { Route } from "react-router-dom";
// import ProductDetails from "./pages/ProductDetails";

// function App() {

//   return (
//     <div>
//       /* <GreadeCalculater/> */

//     </div>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from 
"react-router-dom";
import Home from "./pages/Home";
import { Suspense,lazy } from "react";
import Navbar from "./components/Navbar";
import { CardProvider } from "./contexts/CardContext";
// import ProductDetails from "./pages/ProductDetails";
// import Checkout from "./pages/Checkout";
const ProductDetails = lazy(()=>
import ("./pages/ProductDetails")
);

const Checkout = lazy(()=>
import("./pages/Checkout")
);

function App() {
  return (
    <CardProvider>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback = {<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </CardProvider>
    
  );
}

export default App;
