import styles from "./Products.module.css"
import { Component } from 'react';
import { getAllProducts, getProductsFiltered } from '../../services/products/product.service';
import { getAllCategories } from "../../services/categories/categories.service";
import ProductCards from "../../components/product_cards/ProductCards";

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
                        <h1>Descubre lo mejor de Moka
                            <span>Coffee</span></h1>
                        <p>Una experiencia única con nuestra selección exclusiva de café y bocadillos.</p>
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

export default Products;