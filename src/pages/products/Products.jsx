import styles from "./Products.module.css"
import { Component } from 'react';
import { getAllProducts, getProductsFiltered } from '../../services/products/product.service';
import ProductCard from '../../components/product_card/ProductCard';
import { getAllCategories } from "../../services/categories/categories.service";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            loading: false,
            search: '',
            category: 0,
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
    
    searchProducts = async () => {
        this.setState({ loading: true });
        try {
            const products = await getProductsFiltered(this.state.search, this.state.category);
            this.setState({
                products: products,
                loading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false });
        }
    }
    handleNameChange = (event) => {
        this.setState({ search: event.target.value }, this.searchProducts);
    };
    handleCategoryChange = (event) => {
        this.setState({ category: Number(event.target.value) }, this.searchProducts);
    };

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
                        <input type="text" name="search" onChange={this.handleNameChange} placeholder="Buscar" />
                        <div className={styles.category_cont}>
                            <label htmlFor="category">Categoría:</label>
                            <select id="category" name="category" onChange={this.handleCategoryChange}>
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