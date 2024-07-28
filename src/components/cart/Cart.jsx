import styles from "./Cart.module.css"
import { useContext, useEffect, useRef, useState } from "react"
import { products } from "../../services/products/product.mock"
import { cartContext } from "../../context/cart/CartContext"
import CartItem from "../cart_item/CartItem"


const Cart = () => {
    const cartRef = useRef(null);
    const { items, getTotalCartAmount, isVisible, handleCloseCart, emptyCart } = useContext(cartContext)
    const totalAmount = getTotalCartAmount()


    //* Esta funcion y useEffect es para poder cerrar el carrito clickeando fuera
    const handleClickOutside = (event) => {
        const condition = cartRef.current && !cartRef.current.contains(event.target) && !event.target.classList.contains('buy')
        if (condition) {
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
            <span className={styles.cart_title}>Carrito de compras</span>
            <ul>
                {products?.map((product) => {
                    if (items[product.id] !== 0) {
                        return (
                            <CartItem data={product} key={product.id} />
                        )
                    }
                }
                )}
            </ul>
            <div className={styles.cart_footer}>
                {totalAmount > 0 ?
                    <div className={styles.cart_footer_text}>
                        <span>Total: ${totalAmount}</span>
                        <div>
                            <button onClick={emptyCart} className={styles.clear_button}>Vaciar</button>
                            <button className={styles.buy_button}>Comprar</button>
                        </div>
                    </div>
                    : <span>Carrito vacío</span>}
            </div>
        </div>
    )
}

export default Cart
