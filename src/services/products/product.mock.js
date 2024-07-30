import coffee from "../../assets/images/products/coffee.png"
import medialunas from "../../assets/images/products/medialunas.png"
import medialunas_rellenas from "../../assets/images/products/medialunas_rellenas.png"
import alfajor from "../../assets/images/products/alfajor.png"


export const products = [
        {
            id: 1,
            name: "Café con leche",
            price: 100,
            description:"descripcion de prueba",
            category: [2],
            isBestSeller: true,
            image:{
                url: coffee,
                alt:"café con leche"
            }
        },
        {
            id: 2,
            name: "Café con crema",
            price: 150,
            description:"descripcion de prueba",
            category: [2],
            image:{
                url: coffee,
                alt:"café con crema"
            }
        },
        {
            id: 3,
            name: "Café con leche y crema",
            price: 200,
            description:"descripcion de prueba",
            category: [2],            
            image:{
                url: coffee,
                alt:"café con leche y crema"
            }
        },
        {
            id: 4,
            name: "Medialunas",
            price: 250,
            description:"descripcion de prueba",
            category: [4],
            isBestSeller: true,
            image:{
                url: medialunas,
                alt:"Medialunas"
            }
        },
        {
            id: 5,
            name: "Medialunas rellenas",
            price: 250,
            description:"descripcion de prueba",
            category: [4],
            isBestSeller: true,
            image:{
                url: medialunas_rellenas,
                alt:"Medialunas rellenas"
            }
        },
        {
            id: 6,
            name: "Alfajores de maicena",
            price: 250,
            description:"descripcion de prueba",
            category: [3],            
            image:{
                url: alfajor,
                alt:"Alfajores de maicena"
            }
        },
]
