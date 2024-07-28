import { products } from "./product.mock";


export const getAllProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 600);
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
        }, 600);
    })
}



export const getProductsFiltered = (name, category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredProducts = products;

            if (category && category !== 0) {
                filteredProducts = filteredProducts.filter((prod) => prod.category.includes(category));
            }

            if (name) {
                filteredProducts = filteredProducts.filter((prod) =>
                    prod.name.toLowerCase().includes(name.toLowerCase())
                );
            }

            resolve(filteredProducts);
        }, 600);
    });
};

