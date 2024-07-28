import { useParams } from "react-router-dom"
import styles from "./Product.module.css"
import { useContext, useEffect, useState } from "react"
import { getProductById } from "../../services/products/product.service"
import { cartContext } from "../../context/cart/CartContext"



const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  const { addToCart, handleOpenCart } = useContext(cartContext)

  useEffect(() => {
    try {
      const getData = async () => {
        setLoading(true)
        const response = await getProductById(Number(id))
        if (response) {
          setLoading(false)
          setProduct(response)
        }
      }
      getData()
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

    return () => {
      setProduct({})
    }
  }, [])

  const handleClick = () => {
    addToCart(product.id)
    handleOpenCart()
  }

  return (
    <main className={styles.product_detail}>
      <section className={styles.hero_banner}>
        <h1>Detalles del producto</h1>
      </section>

      {loading ?
        <h2>Cargando...</h2>
        :
        product.name && (
          <article className={styles.product_cont}>
            <img src={product.image.url} alt={product.image.alt} />
            <div className={styles.product_info}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span className={styles.price}>$ {product.price}</span>
              <button className="buy" onClick={handleClick}>Comprar</button>
            </div>

          </article>
        )
      }
    </main>
  )
}
export default ProductDetail

