import expresso from "../../assets/images/products/expresso.png"
import cappuccino from "../../assets/images/products/cappuccino.png"
import latte from "../../assets/images/products/latte.png"
import chocolate_negro from "../../assets/images/products/black_chocolate.png"
import chocolate_leche from "../../assets/images/products/chocolate_leche.png"
import chocolate_blanco from "../../assets/images/products/chocolate_blanco.png"
import tiramisu from "../../assets/images/products/tiramisu.png"
import cheescake from "../../assets/images/products/cheescake.png"
import brownies from "../../assets/images/products/brownies.png"


export const products = [
        {
            id: 1,
            name: "Café Expresso",
            price: 100,
            description:"Es un café concentrado que se prepara forzando agua caliente a alta presión a través de granos de café finamente molidos",
            category: [2],
            isBestSeller: false,
            image:{
                url: expresso,
                alt:"café expresso"
            }
        },
        {
            id: 2,
            name: "Café Cappuccino",
            price: 150,
            description:"Se caracteriza por su textura cremosa y el equilibrio entre el café fuerte y la leche suave.",
            category: [2],
            isBestSeller: true,
            image:{
                url: cappuccino,
                alt:"café cappuccino"
            }
        },
        {
            id: 3,
            name: "Café Latte",
            price: 200,
            description:"Similar al cappuccino, pero con una mayor proporción de leche vaporizada y menos espuma. El latte tiene un sabor más suave y lechoso en comparación con el cappuccino.",
            category: [2],   
            isBestSeller: false,
            image:{
                url: latte,
                alt:"café latte"
            }
        },
        {
            id: 4,
            name: "Chocolate Negro",
            price: 250,
            description:"Contiene cacao sólido, manteca de cacao y azúcar, pero no tiene leche. Su sabor es intenso y amargo, con un alto porcentaje de cacao.",
            category: [3],
            isBestSeller: true,
            image:{
                url: chocolate_negro,
                alt:"chocolate negro"
            }
        },
        {
            id: 5,
            name: "Chocolate con Leche",
            price: 250,
            description:"Incluye cacao sólido, manteca de cacao, leche en polvo o leche condensada, y azúcar. Tiene un sabor más dulce y suave que el chocolate negro.",
            category: [3],
            isBestSeller: false,
            image:{
                url: chocolate_leche,
                alt:"Chocolate con Leche"
            }
        },
        {
            id: 6,
            name: "Chocolate Blanco",
            price: 250,
            description:"Incluye cacao sólido, manteca de cacao, leche en polvo o leche condensada, y azúcar. Tiene un sabor más dulce y suave que el chocolate negro.",
            category: [3],  
            isBestSeller: false,
            image:{
                url: chocolate_blanco,
                alt:"Chocolate Blanco"
            }
        },
        {
            id: 7,
            name: "Tiramisu",
            price: 250,
            description:"Un postre italiano que combina capas de bizcochos empapados en café con una mezcla cremosa de mascarpone, huevos y azúcar, todo espolvoreado con cacao en polvo.",
            category: [4],    
            isBestSeller: true,
            image:{
                url: tiramisu,
                alt:"Tiramisu"
            }
        },
        {
            id: 8,
            name: "Cheesecake",
            price: 250,
            description:"Un pastel hecho a base de queso crema, azúcar y huevos, sobre una base de galletas trituradas. Puede llevar diversos sabores y coberturas, como frutas, chocolate o caramelo.",
            category: [4], 
            isBestSeller: false,
            image:{
                url: cheescake,
                alt:"Cheesecake"
            }
        },
        {
            id: 9,
            name: "Brownies",
            price: 250,
            description:"Pequeños cuadraditos de pastel de chocolate que son densos y fudgy por dentro, con una capa crujiente en la superficie. Se pueden añadir nueces, chips de chocolate o otros ingredientes.",
            category: [4],
            isBestSeller: false,
            image:{
                url: brownies,
                alt:"Brownies"
            }
        },
]
