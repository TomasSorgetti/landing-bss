import { useParams } from "react-router-dom"
import styles from "./Product.module.css"
import { useEffect, useState } from "react"
import { getProductById } from "../../services/products/product.service"



const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

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

  return (
    <main>

      {loading && <h2>Cargando...</h2>}
      {!loading && product.name && (
        <section className={styles.product_cont}>
          <h2>{product.name}</h2>
          <img src={product.image.url} alt={product.image.alt} />
          <div>
            <h3>Precio</h3>
            <p>{product.price}</p>
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>

        </section>
      )}
    </main>
  )
}
export default ProductDetail

