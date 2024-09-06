
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './page/Product'
import ProductDetail from './page/ProductDetail'
import Header from './Components/Header'
import './App.css'

function App() {
  

  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='Product/: id' element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
