import bebidas from "../../assets/images/categories/bebidas.png"
import dulces from "../../assets/images/categories/dulces.png"
import postres from "../../assets/images/categories/postres.png"
import all from "../../assets/images/categories/todos_category.png"

export const categories = [
    {
        id: 1,
        name: "todos",
        image:{
            url:all,
            alt:"categoría de prueba",
        }
    },
    {
        id: 2,
        name: "bebidas",
        image:{
            url:bebidas,
            alt:"categoría de prueba",
        }
    },
    {
        id: 3,
        name: "dulces",
        image:{
            url:dulces,
            alt:"categoría de prueba",
        }
    },
    {
        id: 4,
        name: "postres",
        image:{
            url:postres,
            alt:"categoría de prueba",
        }
    },
]