import coffee from "../assets/images/products/coffee.png"

export const products = [
        {
            id: 1,
            name: "Café",
            price: 100,
            description:"descripcion de prueba",
            category: [1],
            isBestSeller: true,
            image:{
                url: coffee,
                alt:"asdasd"
            }
        },
        {
            id: 2,
            name: "Café con leche",
            price: 150,
            description:"descripcion de prueba",
            category: [2],
            isBestSeller: true,
            image:{
                url: coffee,
                alt:"café con leche"
            }
        },
        {
            id: 3,
            name: "Café con crema",
            price: 200,
            description:"descripcion de prueba",
            category: [1],
            isBestSeller: true,
            image:{
                url: coffee,
                alt:"café con crema"
            }
        },
        {
            id: 4,
            name: "Cafe con leche y crema",
            price: 250,
            description:"descripcion de prueba",
            category: [3],
            image:{
                url: coffee,
                alt:"café con leche y crema"
            }
        },
        {
            id: 5,
            name: "Cafe descafeinado",
            price: 250,
            description:"descripcion de prueba",
            category: [2],
            image:{
                url: coffee,
                alt:"asdasd"
            }
        },
        {
            id: 6,
            name: "Cafe espresso",
            price: 250,
            description:"descripcion de prueba",
            category: [3],
            image:{
                url: coffee,
                alt:"asdasd"
            }
        },
]
