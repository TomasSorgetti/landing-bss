// App.js
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
import "./App.css";




function App() {
  const { isVisible, handleOpenCart, getItemCount } = useContext(cartContext);

  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
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
//* Animaciones para las rutas
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <div className="content">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/categorias/:categoryId" element={<Products />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};
export default App;
