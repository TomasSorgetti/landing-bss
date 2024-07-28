import styles from "./Products.module.css"
import { Component } from 'react';
import { getAllProducts } from '../../services/product.service';
import ProductCard from '../../components/product_card/ProductCard';
import { getAllCategories } from "../../services/categories.service";
import { getProductsByCategory } from "../../services/product.service";

class Products extends Component {
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
            const getData = async () => {
                const categoryList = await getAllCategories()
                const productsList = await getAllProducts()
                this.setState({
                    products: productsList,
                    categories: categoryList,
                    loading: false,
                })
            }
            getData()
        } catch (error) {
            console.log(error);
            this.setState({
                loading: false,
            });
        }
    }

    searchProductsByCategory = (category) => {
        this.setState({
            loading: true
        })
        try {
            const getData = async () => {
                await getProductsByCategory(category)
                    .then((products) => {
                        this.setState({
                            products: products,
                            loading: false,
                        });
                    })
            }
            getData()
        } catch (error) {
            console.log(error);
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        return (
            <main>
                <section className={styles.hero_banner}>
                    <div>
                        <h1>Products</h1>
                        <p>Conoce nuestros productos</p>
                    </div>
                </section>
                <aside className={styles.sidebar}>
                    <h2>Categorías</h2>
                    <ul className={styles.categories_cont}>
                        <li onClick={() => this.searchProductsByCategory(0)}>Todos</li>
                        {this.state.categories?.map(({ id, name }) => (
                            <li onClick={() => this.searchProductsByCategory(id)} key={id}>{name}</li>
                        ))}
                    </ul>
                </aside>
                {this.state.loading && <h2>Cargando...</h2>}
                <ul className={styles.products_cont}>
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
            </main >
        );
    }
}

export default Products;