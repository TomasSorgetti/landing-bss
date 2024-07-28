import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import CartContextProvider, { cartContext } from './context/cart/CartContext.jsx';
import UserContextProvider, { userContext } from './context/user/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider value={userContext}>
      <CartContextProvider value={cartContext}>
        <App />
      </CartContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
