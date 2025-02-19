import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ListProduct from './Pages/ListProduct'
import ProductRegistration from './Pages/ProductRegistration'


function App() {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<ProductRegistration/>} />
            <Route path="/products" element={<ListProduct/>} />
         </Routes>
      </Router>
  )
}

export default App
