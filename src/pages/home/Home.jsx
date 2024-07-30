import { Component } from 'react';
import styles from "./Home.module.css"
import BestSellers from "../../components/best_sellers/BestSellers"
import cafe_vendidos from "../../assets/images/cafes_mas_vendidos.png"
import cafe_galleta from "../../assets/images/cafe_galletita.png"
import Button from '../../components/button/Button';
import SuscribeForm from '../../components/suscribe_form/SuscribeForm';
import Category from '../../components/category/Category';

import bebidas from "../../assets/images/categories/bebidas.png"
import dulces from "../../assets/images/categories/dulces.png"
import postres from "../../assets/images/categories/postres.png"

class Home extends Component {
    render() {
        const categoriesList = [
            {
                id: 2,
                name: "bebidas",
                image: {
                    url: bebidas,
                    alt: "categoría de prueba",
                }
            },
            {
                id: 3,
                name: "dulces",
                image: {
                    url: dulces,
                    alt: "categoría de prueba",
                }
            },
            {
                id: 4,
                name: "postres",
                image: {
                    url: postres,
                    alt: "categoría de prueba",
                }
            },
        ]

        return (
            <main>
                <section className={styles.hero_banner_cont}>
                    <div>
                        <span className={styles.hero_text_span}>Café y repostería</span>
                        <h1>Moka <span className={styles.hero_title_span}>Coffe</span>, un rincón de <br /> tranquilidad y sabor en <br /> cada taza</h1>
                        <Button label="comprar" url="/categorias" />
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
                        <Button label="comprar" url="/categorias" />
                    </div>
                    <img src={cafe_vendidos} alt="vasos de café apilados" />
                </section>

                <section className={styles.categories}>
                    <h2>Categorías</h2>
                    <ul>
                        {categoriesList?.map(({ name, id, image }) => (
                            <Category key={id} name={name} image={image} id={id} />
                        ))}
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
                        <Button label="ver más" url="/categorias" />
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