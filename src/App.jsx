import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css'
import ProductRegistration from './pages/ProductRegistration';
import ListProduct from './pages/ListProduct';
import Sidebar from './component/Sidebar';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const savedProduct = localStorage.getItem("product");
    if (savedProduct) {
      setProduct(JSON.parse(savedProduct));
    }
  }, []);

  useEffect(() => {
    if (product.length > 0)
      localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return (
    <div className=''>
    <Router>
      <Sidebar />
          <Routes>
            <Route path="/" element={<ProductRegistration product={product} setProduct={setProduct} />} />
            <Route path="/register" element={<ProductRegistration product={product} setProduct={setProduct} />} />
            <Route path="/products" element={<ListProduct product={product} setProduct={setProduct} />} />
          </Routes>
    </Router>
    </div>
  )
}

export default App