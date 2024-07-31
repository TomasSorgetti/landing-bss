import { useParams } from "react-router-dom"
import styles from "./Product.module.css"
import { useContext, useEffect, useState } from "react"
import { getProductById } from "../../services/products/product.service"
import { cartContext } from "../../hooks/cart/CartContext"
import { MdKeyboardBackspace } from "react-icons/md";


const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(1)

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
    addToCart(product.id, count)
    setCount(1)
    handleOpenCart()
  }

  return (
    <main className={styles.product_detail}>
      <section className={styles.hero_banner}>
        <h1>{product.name}</h1>
      </section>
      <div className={styles.goBack_wrapper}>
        <div onClick={() => window.history.back()} className={styles.back_button}>
          <MdKeyboardBackspace className={styles.icon} />
          <span>Volver</span>
        </div>
      </div>


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
              <div className={styles.cart_item_count}>
                <button className="cancelClose" onClick={() => { count > 1 && setCount(count - 1) }}>-</button>
                <input value={count} onChange={e => setCount(Number(e.target.value))} />
                <button className="cancelClose" onClick={() => setCount(count + 1)}>+</button>
              </div>
              <button className={`cancelClose ${styles.buy_button}`} onClick={handleClick}>Comprar</button>
            </div>

          </article>
        )
      }
      {
        !loading && !product.name && <h2>No se encontro el producto</h2>
      }
    </main>
  )
}
export default ProductDetail

