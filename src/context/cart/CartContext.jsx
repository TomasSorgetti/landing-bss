import { createContext, useState } from "react"
import { products } from "../../services/products/product.mock"

export const cartContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}
const CartContextProvider = (props) => {
    const [items, setItems] = useState(getDefaultCart())
    const [isVisible, setIsVisible] = useState(false)

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in items) {
            if (items[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                totalAmount += items[item] * itemInfo.price
            }
        }
        return totalAmount
    }
    const getItemCount = () => {
        let count = 0
        for (const item in items) {
            count += items[item]
        }
        return count
    }
    const addToCart = (itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const updateCartItemCount = (value, itemId) => {
        setItems((prev) => ({ ...prev, [itemId]: value }))
    }
    const handleOpenCart = () => {
        setIsVisible(prev => !prev);
    };
    const handleCloseCart = () => {
        setIsVisible(false);
    };
    const emptyCart = () => {
        setItems(getDefaultCart())
    };



    const contextValue = { items, getItemCount, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, handleOpenCart, handleCloseCart, isVisible, emptyCart }

    return (
        <cartContext.Provider value={contextValue}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider
