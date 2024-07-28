import styles from "./ProductCard.module.css"
import { cartContext } from "../../context/cart/CartContext"
import { useContext } from "react"
const ProductCard = ({ id, name, price, description, isBestSeller, image }) => {

    const { addToCart, handleOpenCart } = useContext(cartContext)
    const handleClick = () => {
        addToCart(id)
        handleOpenCart()
    }

    return (
        <li className={styles.product_card}>
            <img
                src={image.url}
                alt={image.alt} />
            <div className={styles.product_info}>
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div className={styles.product_info_slide}>
                <p>{description}</p>
                <button onClick={handleClick} className={`${styles.buy_button} buy`}>Comprar</button>
            </div>
            {isBestSeller && <span className={styles.best_seller}>más vendido</span>}
        </li>
    )
}

export default ProductCard
