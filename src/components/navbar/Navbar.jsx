import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useContext, useState } from "react"
import { cartContext } from "../../hooks/cart/CartContext"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { userContext } from "../../hooks/user/UserContext";
import Button from "../button/Button";

const Navbar = () => {
    const { handleOpenCart, handleChangeCart, getItemCount } = useContext(cartContext)
    const { LogoutUser, isLogin } = useContext(userContext)
    const [openNav, setOpenNav] = useState(false)

    const handleChangeNav = () => {
        setOpenNav(!openNav)
    }

    return (
        <nav className={`${styles.navbar} ${openNav ? (styles.active_nav) : ""}`}>
            <Link className={styles.logo} to="/">Moka <span>Coffee</span></Link>
            <div className={styles.mobile_nav_cont}>
                {
                    !openNav &&
                    <button className={`${styles.cart_button} nav_cart`} onClick={handleChangeCart}>
                        <HiOutlineShoppingCart className={styles.cart_icon} />
                        <div>
                            <span>{getItemCount()}</span>
                        </div>
                    </button>
                }
                <div onClick={handleChangeNav} className={`${styles.hamburger_button} ${openNav ? (styles.active) : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.nav_links_container}>
                <NavLink onClick={handleChangeNav} to="/" className={({ isActive }) => isActive ? styles.active_option : ""}>Inicio</NavLink>
                <NavLink onClick={handleChangeNav} to="/categorias" className={({ isActive }) => isActive ? styles.active_option : ""}>Productos</NavLink>
                <NavLink onClick={handleChangeNav} to="/contacto" className={({ isActive }) => isActive ? styles.active_option : ""}>Contacto</NavLink>

                {
                    isLogin && <button onClick={() => {
                        LogoutUser()
                        handleChangeNav()
                    }} className={styles.logout_button}>Logout</button>
                }
                {
                    !openNav &&

                    <button className={styles.cart_button} onClick={handleOpenCart}>
                        <HiOutlineShoppingCart className={styles.cart_icon} />
                        <div>
                            <span>{getItemCount()}</span>
                        </div>
                    </button>
                }

                {
                    !isLogin &&
                    <Button label="login" url="/login" handleClick={handleChangeNav} />
                }
            </div>
        </nav>
    )

}

export default Navbar
