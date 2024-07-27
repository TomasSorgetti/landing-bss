import styles from "./ProductCard.module.css"

const ProductCard = ({ name, price, isBestSeller, image }) => {
    return (
        <li className={styles.product_card}>
            <img
                src={image.url}
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
