import { Link } from "react-router-dom"
import styles from "./HeroBanner.module.css"
const HeroBanner = () => {
    return (
        <section className={styles.hero_banner_cont}>
            <div>
                <span className={styles.hero_text_span}>CAFÉ Y PASTELERÍA</span>
                <h1><span className={styles.hero_title_span}>Moka Coffe</span>, un rincón de <br /> tranquilidad y sabor en <br /> cada taza</h1>
                <Link className={styles.hero_button} to="/productos">comprar</Link>
            </div>
        </section>
    )
}

export default HeroBanner
