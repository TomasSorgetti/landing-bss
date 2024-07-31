import { Link } from "react-router-dom"
import styles from "./Category.module.css"
const Category = ({ name, image, id }) => {
    return (
        <li className={styles.category} style={{ backgroundImage: `url(${image.url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Link to={`/categorias/${name}`} className={styles.link}>
                {name}
            </Link>
        </li>
    )
}

export default Category
