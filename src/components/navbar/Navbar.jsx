import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">Logo</Link>
            <div className="nav_links_container">
                <NavLink to="/" className={({ isActive }) => isActive && styles.active_option}>Inicio</NavLink>
                <NavLink to="/productos" className={({ isActive }) => isActive && styles.active_option}>Productos</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => isActive && styles.active_option}>Contacto</NavLink>
            </div>
        </nav>
    )

}

export default Navbar
