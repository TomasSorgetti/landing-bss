import { products } from "./product.mock";


export const getAllProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 400);
    })
}
export const getBestSellersProducts = (limit) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            if (!limit) {
                resolve(                
                    products.filter((prod) => prod.isBestSeller)
                )
            }
            else {                
                resolve(                
                    products.filter((prod) => prod.isBestSeller).slice(0, limit)
                )
            }
        }, 400);
    })
}

export const getProductsByCategory= (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === productCategory))
        }, 400);
    })
}