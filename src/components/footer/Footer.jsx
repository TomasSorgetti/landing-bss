import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_wrapper}>

                <Link className={styles.logo} to="/">Moka <span>Coffee</span></Link>
                <div className={styles.contact_info}>
                    <span>contacto@mokacoffee.com</span>
                    <span>(+54) 11 4564-4564</span>
                </div>
            </div>
            <span>@Copyright 2024</span>
        </footer>
    )
}

export default Footer
