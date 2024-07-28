import { useMemo } from "react";
import styles from "./ProductCards.module.css"
import ProductCard from "../product_card/ProductCard"

const ProductCards = ({ products }) => {

    const MemoProducts = useMemo(() => {
        return products.map(product => ({
            ...product,
            displayPrice: `$${product.price.toFixed(2)}`,
        }));
    }, [products]);

    return (
        <ul className={styles.products_cont}>
            {MemoProducts?.map(({ id, name, price, description, isBestSeller, image }) => (
                <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    isBestSeller={isBestSeller}
                    image={image}
                    description={description}
                />
            ))}
        </ul>
    )
}

export default ProductCards
