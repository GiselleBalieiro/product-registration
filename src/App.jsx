import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css'
import ProductRegistration from './pages/ProductRegistration';
import ListProduct from './pages/ListProduct';
import Sidebar from './component/Sidebar';

function App() {
  const [product, setProduct] = useState([]);
  const [productEdit, setProductEdit] = useState(null)

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

  const handleEdit = (productEdit) => {
    setProductEdit(productEdit);
  };

  return (
    <div className=''>
    <Router>
      <Sidebar />
          <Routes>
            <Route path="/" element={<ProductRegistration product={product} setProduct={setProduct} productEdit={productEdit} setProductEdit={setProductEdit}/>} />
            <Route path="/register" element={<ProductRegistration product={product} setProduct={setProduct} productEdit={productEdit} setProductEdit={setProductEdit}/>} />
            <Route path="/products" element={<ListProduct product={product} setProduct={setProduct} productEdit={handleEdit} setProductEdit={setProductEdit} />} />
          </Routes>
    </Router>
    </div>
  )
}

export default App