import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_wrapper}>

                <Link className={styles.logo} to="/">Moka <span>Coffee</span></Link>
                <div className={styles.info_container}>
                    <div className={styles.nav_links}>
                        <Link to="/categorias">nuestros productos</Link>
                        <Link to="/">por qué nosotros</Link>
                        <Link to="/contacto">contactanos</Link>
                    </div>
                    <div className={styles.contact_info}>
                        <span>contacto@mokacoffee.com</span>
                        <span>(+54) 11 4564-4564</span>
                    </div>
                </div>
            </div>
            <span className={styles.copyright}>@Copyright 2024</span>
        </footer>
    )
}

export default Footer
