import styles from "./Categories.module.css"
import { Component } from 'react';
import { getAllCategories } from "../../services/categories/categories.service";
import Category from "../../components/category/Category";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                this.setState({
                    categories: categoryList,
                    loading: false,
                })
            }
            getData()
        } catch (error) {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        return (
            <main className={styles.categories_cont}>
                <section className={styles.hero_banner}>
                    <div className={styles.wrapper}>
                        <h1>Categorías de <span>Productos</span></h1>
                        <p>Encontrá rápidamente lo que buscas entre nuestras categorías, desde cafés frescos hasta deliciosos pasteles.</p>
                    </div>
                </section>
                <ul>
                    {this.state.loading
                        ?
                        <li>Cargando...</li>
                        :
                        this.state.categories?.map(({ name, id, image }) => (
                            <Category key={id} name={name} image={image} id={id} />
                        ))
                    }
                </ul>
            </main>
        );
    }
}

export default Categories;