import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ListProduct from './Pages/ListProduct'
import ProductRegistration from './Pages/ProductRegistration'
import { useEffect, useState } from 'react';


function App() {
   const [product, setProduct] = useState([]);

   useEffect(() => {
      const savedProduct = localStorage.getItem("product");
      if (savedProduct) {
         setProduct(JSON.parse(savedProduct));
      }
   }, []);  

   useEffect(() => {
      if(product.length > 0)
      localStorage.setItem("product", JSON.stringify(product));
   }, [product]);

   return (
         <Router>
            <Routes>
               <Route path="/" element={<ProductRegistration product={product} setProduct={setProduct}/>} />
               <Route path="/products" element={<ListProduct product={product} setProduct={setProduct}/>} />
            </Routes>
         </Router>
  )
}

export default App
