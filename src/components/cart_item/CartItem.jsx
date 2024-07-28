import { useContext } from "react"
import { cartContext } from "../../context/cart/CartContext"



const CartItem = ({ data }) => {
    const { addToCart, removeFromCart, items, updateCartItemCount } = useContext(cartContext)
    const { name, price, image } = data
    return (
        <div>
            <img src={image.url} alt={image.alt} />
            <div>
                <h4>{name}</h4>
                <p>${price}</p>
                <div>
                    <button onClick={() => removeFromCart(data.id)}>-</button>
                    <input value={items[data.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)} />
                    <button onClick={() => addToCart(data.id)}>+</button>
                </div>
            </div>

        </div>
    )
}

export default CartItem
