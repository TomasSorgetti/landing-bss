import styles from "./Products.module.css"
import { Component } from 'react';
import { getAllProducts, getAllProductsByCategory, getProductsFiltered } from '../../services/products/product.service';
import { getAllCategories } from "../../services/categories/categories.service";
import ProductCards from "../../components/product_cards/ProductCards";
import RouteParamsProvider from "../../hooks/params/Params";
import { Link } from "react-router-dom";

class ProductsWithoutParams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            loading: false,
        };
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        try {
            if (this.props.params.category) {
                const getData = async () => {
                    const productsList = await getAllProductsByCategory(this.props.params.category)
                    const categoriesList = await getAllCategories()
                    this.setState({
                        products: productsList,
                        categories: categoriesList,
                        loading: false,
                    })
                }
                getData()
            }
        } catch (error) {
            console.log(error);
            this.setState({
                loading: false,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.category !== this.props.params.category) {
            this.setState({
                loading: true
            })
            try {
                if (this.props.params.category) {
                    const getData = async () => {
                        const productsList = await getAllProductsByCategory(this.props.params.category)
                        this.setState({
                            products: productsList,
                            loading: false,
                        })
                    }
                    getData()
                }
            } catch (error) {
                console.log(error);
                this.setState({
                    loading: false,
                });
            }
        }
    }

    render() {

        return (
            <main className={styles.products_cont}>
                <section className={styles.hero_banner}>
                    <div className={styles.wrapper}>
                        <h1>Descubrí lo Mejor de los productos Moka <span>Coffee</span></h1>
                        <p>Explorá nuestra selección de bebidas y postres, pensados para ofrecerte una experiencia de sabor única.</p>
                    </div>
                </section>
                <section className={styles.products}>
                    <h2>Nuestros productos</h2>
                    <section className={styles.categories_cont}>
                        <h3>Categorías</h3>
                        <ul>
                            {this.state.categories?.map(({ name, id }) => (
                                <li key={id}>
                                    <Link className={(name == this.props.params.category) ? styles.active_option : ""} to={`/categorias/${name}`}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                    {this.state.loading
                        ?
                        <div className={styles.loading_cont}><span>Cargando...</span></div>
                        :
                        <ProductCards products={this.state.products} />
                    }
                </section>
            </main >
        );
    }
}
const Products = () => (
    <RouteParamsProvider>
        <ProductsWithoutParams />
    </RouteParamsProvider>
);
export default Products