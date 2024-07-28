import styles from "./Cart.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { products } from "../../services/products/product.mock"
import { cartContext } from "../../context/cart/CartContext"
import CartItem from "../cart_item/CartItem"


const Cart = () => {
    const cartRef = useRef(null);
    const { items, getTotalCartAmount, isVisible, handleCloseCart } = useContext(cartContext)
    const totalAmount = getTotalCartAmount()


    //* Esta funcion y useEffect es para poder cerrar el carrito clickeando fuera
    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            handleCloseCart();
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    //*

    return (

        <div ref={cartRef} className={`${styles.cart} ${isVisible ? styles.show : styles.hide}`}>
            <span>Carrito de compras</span>
            <div>
                {products?.map((product) => {
                    if (items[product.id] !== 0) {
                        return (
                            <CartItem data={product} key={product.id} />
                        )
                    }
                }
                )}
            </div>
            <div>
                {totalAmount > 0 ?
                    <div>
                        <span>Total: ${totalAmount}</span>
                        <button>Vaciar</button>
                        <button>Comprar</button>
                    </div>
                    : <span>Carrito vacío</span>}
            </div>
        </div>
    )
}

export default Cart
