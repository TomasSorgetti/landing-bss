import Navbar from "./components/navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Contact from "./pages/contact/Contact"
import Footer from "./components/footer/Footer"
import Error from "./pages/error/Error"
import ProductDetail from "./pages/product_detail/ProductDetail"
import { cartContext } from "./context/cart/CartContext"
import Cart from "./components/cart/Cart"
import React, { useContext } from "react"
import { HiOutlineShoppingCart } from "react-icons/hi"
function App() {
  const { isVisible, handleOpenCart, getItemCount } = useContext(cartContext)

  let count = getItemCount()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/productos" element={<Products />} />
        < Route path="/productos/:id" element={<ProductDetail />} />
        < Route path="/contacto" element={<Contact />} />
        < Route path="/*" element={<Error />} />
      </Routes>
      {
        !isVisible &&
        <button className="cart_button" onClick={handleOpenCart}>
          <HiOutlineShoppingCart className="cart_icon" />
          <div>
            <span>{getItemCount()}</span>
          </div>
        </button>
      }
      <Cart />
      <Footer />
    </div>
  )
}

export default App
