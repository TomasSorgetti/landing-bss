import { Link } from "react-router-dom"
import styles from "./Button.module.css"



const Button = ({ label, url, handleClick }) => {
    return (
        <Link onClick={handleClick} to={url} className={styles.button}>
            {label}
        </Link>
    )
}

export default Button
