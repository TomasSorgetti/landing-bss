import { Component } from 'react';
import styles from "./BestSellers.module.css"
import { getBestSellersProducts } from '../../services/products/product.service';
import ProductCards from '../product_cards/ProductCards';
import { Link } from 'react-router-dom';

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
                {this.state.loading && <li>Cargando...</li>}
                <ProductCards products={this.state.products} />
                <Link to="/categorias/1" className={styles.ver_button}>Ver todos</Link>
            </section>
        );
    }
}

export default BestSellers;