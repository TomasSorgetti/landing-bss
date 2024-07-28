import styles from "./Products.module.css"
import { Component } from 'react';
import { getAllProducts, getProductsByName, getProductsByCategory } from '../../services/products/product.service';
import ProductCard from '../../components/product_card/ProductCard';
import { getAllCategories } from "../../services/categories/categories.service";

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
                await getProductsByCategory(Number(category))
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
    searchProductsByName = (name) => {

        this.setState({
            loading: true
        })
        try {
            const getData = async () => {
                await getProductsByName(name)
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
                    <div className={styles.wrapper}>
                        <h1>Los productos Moka
                            <span>Coffe</span> asdasdj asdkjalsd</h1>
                        <p>Los productos sdfsd  asdasdj asdkjalsd asdnaskd jhasd asjdaskd aksjd askd  asdsa.</p>
                    </div>
                </section>
                <section className={styles.products}>
                    <h2>Nuestros productos</h2>
                    <div className={styles.filter_cont}>
                        <input type="text" name="search" onChange={(event) => this.searchProductsByName(event.target.value)} placeholder="Buscar" />
                        <div className={styles.category_cont}>
                            <label htmlFor="category">Categoría:</label>
                            <select id="category" name="category" onChange={(event) => this.searchProductsByCategory(event.target.value)}>
                                <option value={0}>Todos</option>
                                {this.state.categories?.map(({ name, id }) => (
                                    <option key={id} value={id}>{name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {this.state.loading && <h2>Cargando...</h2>}
                    <ul className={styles.products_cont}>
                        {this.state.products?.map(({ id, name, price, description, isBestSeller, image }) => (
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
                </section>
            </main >
        );
    }
}

export default Products;