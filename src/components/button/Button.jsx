import { Link } from "react-router-dom"
import styles from "./Button.module.css"



const Button = ({ label, url }) => {
    return (
        <Link to={url} className={styles.button}>
            {label}
        </Link>
    )
}

export default Button
