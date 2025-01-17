import { useContext } from "react"
import { cartContext } from "../../hooks/cart/CartContext"
import styles from "./CartItem.module.css"


const CartItem = ({ data }) => {
    const { addToCart, removeFromCart, deleteFromCart, items, updateCartItemCount } = useContext(cartContext)
    const { name, price, image } = data
    return (
        <li className={styles.cart_item}>
            <img src={image.url} alt={image.alt} />
            <div className={styles.cart_item_info}>
                <h4>{name}</h4>
                <p>${price}</p>
                <div className={styles.cart_item_count}>
                    <button onClick={() => removeFromCart(data.id)}>-</button>
                    <input value={items[data.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)} />
                    <button onClick={() => addToCart(data.id)}>+</button>
                </div>

                <button className={styles.remove_button} onClick={() => deleteFromCart(data.id)}>X</button>
            </div>

        </li>
    )
}

export default CartItem
