import styles from "./ProductCard.module.css"
import coffee from "../../assets/images/products/coffee.png"
import { Link } from "react-router-dom"


const ProductCard = ({ name, price, isBestSeller, image }) => {
    return (
        <li className={styles.product_card}>
                <img
                    src={coffee}
                    alt={image.alt} />
                <div className={styles.product_info}>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
                {isBestSeller && <span className={styles.best_seller}>más vendido</span>}
        </li>
    )
}

export default ProductCard
