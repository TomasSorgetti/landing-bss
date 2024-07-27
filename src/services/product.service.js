import { products, bestSellersProducts } from "./product.mock";


export const getAllProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 400);
    })
}
export const getBestSellersProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(bestSellersProducts)
        }, 400);
    })
}

export const getProductsByCategory= (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === productCategory))
        }, 500);
    })
}