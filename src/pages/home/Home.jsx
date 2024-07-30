import { Component } from 'react';
import styles from "./Home.module.css"
import BestSellers from "../../components/best_sellers/BestSellers"
import cafe_vendidos from "../../assets/images/cafes_mas_vendidos.png"
import cafe_galleta from "../../assets/images/cafe_galletita.png"
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import SuscribeForm from '../../components/suscribe_form/SuscribeForm';

class Home extends Component {
    render() {
        return (
            <main>
                <section className={styles.hero_banner_cont}>
                    <div>
                        <span className={styles.hero_text_span}>Café y repostería</span>
                        <h1>Moka <span className={styles.hero_title_span}>Coffe</span>, un rincón de <br /> tranquilidad y sabor en <br /> cada taza</h1>
                        <Button label="comprar" url="/productos" />
                    </div>
                </section>

                <BestSellers />

                <section className={styles.cafe_vendidos_cont}>
                    <div>
                        <span>Café y repostería</span>
                        <h2>Los cafés más vendidos</h2>
                        <p>Prueba nuestros cafés más populares,
                            elegidos por su sabor único y calidad.
                            ¡Descubre tu favorito!</p>
                        <Button label="comprar" url="/productos" />
                    </div>
                    <img src={cafe_vendidos} alt="vasos de café apilados" />
                </section>
                
                <section className={styles.categories}>
                    <h2>Categorías</h2>
                    <ul>
                        <li className={styles.category_bebidas}>
                            <Link to="/productos">
                                <h3>Bebidas</h3>
                            </Link>
                        </li>
                        <li className={styles.category_dulces}>
                            <Link to="/productos">
                                <h3>Dulces</h3>
                            </Link>
                        </li>
                        <li className={styles.category_postres}>
                            <Link to="/productos">
                                <h3>Postres</h3>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className={styles.cafe_vendidos_cont}>
                    <img src={cafe_galleta} alt="Café con una galleta" />
                    <div>
                        <span>Café y repostería</span>
                        <h2>Sabor y Dulzura</h2>
                        <p>Combina nuestro café con una tentadora
                            pastelería. La mezcla perfecta para un
                            momento de puro placer. ¡Disfrútalo!</p>
                        <Button label="ver más" url="/productos" />
                    </div>
                </section>

                <section className={styles.newsletter_cont}>
                    <div>
                        <h2>Suscribite al newsletter</h2>
                        <p>Recibe cada semana información sobre
                            los nuevos productos y descuentos de
                            Moka Coffee en tu email.</p>
                    </div>
                    <SuscribeForm />
                </section>
            </main>
        );
    }
}

export default Home;