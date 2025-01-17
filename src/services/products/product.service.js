import { products } from "./product.mock";


export const getAllProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 600);
    })
}
export const getAllProductsByCategory = (category) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            if (category === "todos") resolve(products)
            else {
                const productList = products.filter((prod) => prod.category.includes(category))
                if (!productList.length) resolve(products)      
                else {
                    resolve(productList)
                }
            }
        },600)
    })
}

export const getProductById = (id) => { 
    return new Promise ((resolve)=> {
        setTimeout(() => {
            const product = products.filter((prod) => prod.id === id)[0]
            if (!product) {
                resolve({error: true, status: 404, message: "Product not found"})
            }
            resolve(product)
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

