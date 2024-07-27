import styles from "./ProductCard.module.css"

const ProductCard = ({ name, price, description, isBestSeller, image }) => {

    const handleClick = () => {
        alert(`Comprando ${name}`)
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
                <button onClick={handleClick} className={styles.buy_button}>Comprar</button>
            </div>
            {isBestSeller && <span className={styles.best_seller}>más vendido</span>}
        </li>
    )
}

export default ProductCard
