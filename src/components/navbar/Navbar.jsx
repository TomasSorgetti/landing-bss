import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useContext } from "react"
import { cartContext } from "../../context/cart/CartContext"
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
    const { handleOpenCart, getItemCount } = useContext(cartContext)


    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to="/">Moka <span>Coffee</span></Link>
            <div className={styles.nav_links_container}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active_option : ""}>Inicio</NavLink>
                <NavLink to="/productos" className={({ isActive }) => isActive ? styles.active_option : ""}>Productos</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => isActive ? styles.active_option : ""}>Contacto</NavLink>
                <button className={styles.cart_button} onClick={handleOpenCart}>
                    <HiOutlineShoppingCart className={styles.cart_icon} />
                    <div>
                        <span>{getItemCount()}</span>
                    </div>
                </button>
                <NavLink to="/login" className={styles.contact_button}>Login</NavLink>
            </div>
        </nav>
    )

}

export default Navbar
