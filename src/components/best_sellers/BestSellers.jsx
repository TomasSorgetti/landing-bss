import { Component } from 'react';
import styles from "./BestSellers.module.css"
import { getBestSellersProducts } from '../../services/product.service';
import ProductCard from '../product_card/ProductCard';

class BestSellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true,
        };
    }
    componentDidMount() {
        try {
            getBestSellersProducts(3)
                .then((products) => {
                    this.setState({
                        products: products,
                        loading: false,
                    });
                })
        } catch (error) {
            console.log(error);
            this.setState({
                loading: false,
            });
        }

    }

    render() {
        return (
            <section className={styles.best_sellers_cont}>
                <h2>Más vendidos</h2>
                <ul>
                    {this.state.loading && <li>Cargando...</li>}
                    {this.state.products?.map(({ id, name, price, description, isBestSeller, image }) => (
                        <ProductCard
                            key={id}
                            name={name}
                            price={price}
                            isBestSeller={isBestSeller}
                            image={image}
                            description={description}
                        />
                    ))}
                </ul>
            </section>
        );
    }
}

export default BestSellers;