import { categories } from "./categories.mock";


export const getAllCategories = () => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(categories)
        }, 400);
    })
}