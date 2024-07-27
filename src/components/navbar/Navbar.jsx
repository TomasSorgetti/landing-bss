import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">Moka Coffee</Link>
            <div className={styles.nav_links_container}>
                <NavLink to="/" className={({ isActive }) => isActive && styles.active_option}>Inicio</NavLink>
                <NavLink to="/productos" className={({ isActive }) => isActive && styles.active_option}>Productos</NavLink>
                <NavLink to="/contacto" className={styles.contact_button}>Contacto</NavLink>
            </div>
        </nav>
    )

}

export default Navbar
