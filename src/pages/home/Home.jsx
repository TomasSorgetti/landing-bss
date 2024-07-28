import { Component } from 'react';
import styles from "./Home.module.css"
import BestSellers from "../../components/best_sellers/BestSellers"
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <main>
                <section className={styles.hero_banner_cont}>
                    <div>
                        <span className={styles.hero_text_span}>Café y repostería</span>
                        <h1>Moka <span className={styles.hero_title_span}>Coffe</span>, un rincón de <br /> tranquilidad y sabor en <br /> cada taza</h1>
                        <Link className={styles.hero_button} to="/productos">comprar</Link>
                    </div>
                </section>
                <BestSellers />
            </main>
        );
    }
}

export default Home;