import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ListProduct from './Pages/ListProduct'
import ProductRegistration from './Pages/ProductRegistration'
import { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';

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
    <Router>
      <div className='flex'>
        <div className='flex-1 p-6'>
          <Sidebar />
        </div>
        <div className='flex-3 p-6'>
          <Routes>
            <Route path="/" element={<ProductRegistration product={product} setProduct={setProduct} />} />
            <Route path="/register" element={<ProductRegistration product={product} setProduct={setProduct} />} />
            <Route path="/products" element={<ListProduct product={product} setProduct={setProduct} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App