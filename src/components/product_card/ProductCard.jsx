import styles from "./ProductCard.module.css"
import { cartContext } from "../../hooks/cart/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
const ProductCard = ({ id, name, price, description, isBestSeller, image }) => {

    const { addToCart, handleOpenCart } = useContext(cartContext)
    const handleClick = () => {
        addToCart(id)
        handleOpenCart()
    }
    const newParagraf = description.slice(0, 30)
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
                <p>{newParagraf}...</p>
                <div>
                    <Link className={styles.ver_button} to={`/producto/${id}`}>Ver</Link>
                    <button onClick={handleClick} className={`${styles.buy_button} cancelClose`}>Comprar</button>
                </div>
            </div>
            {isBestSeller && <span className={styles.best_seller}>más vendido</span>}
        </li>
    )
}

export default ProductCard
