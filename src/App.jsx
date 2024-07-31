// App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import ProductDetail from "./pages/product_detail/ProductDetail";
import Cart from "./components/cart/Cart";
import { cartContext } from "./hooks/cart/CartContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Login from "./pages/login/Login";
import React, { useContext } from "react";
import ScrollToTop from "./helpers/scrollToTop";




function App() {
  const { isVisible, handleOpenCart, getItemCount } = useContext(cartContext);

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/categorias/:category" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
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
  );
}

export default App;
