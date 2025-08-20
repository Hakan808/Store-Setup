import {  Routes, Route } from 'react-router-dom'
import StoreFront from './pages/StoreFront'
import ProductDetails from './pages/ProductDetails'
import ProductDelivery from './pages/ProductDelivery'
import Nav from './pages/Nav'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<StoreFront />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="delivery" element={<ProductDelivery />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  )
}
