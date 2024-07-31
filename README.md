# Desafío técnico React para Boost Software Studio

## Deploy: [Proyecto React Coffe Shop](https://landing-bss.vercel.app)


## Como Iniciar
**aclaración:** debes de tener instalado node.js y un manejador de paquetes, como npm.

```bash
cd ./tu-carpeta
```

Para clonar el proyecto:
```bash
git clone https://github.com/TomasSorgetti/landing-bss.git
```

Para instalar todas las dependencias:
```bash
npm install
```

Para abrir en el ide el proyecto:
```bash
code .              
```

Para levantar el proyecto en localhost:
```bash
npm run dev
```


## Estructura del proyecto:

```bash
app/
├── public/                    
├── src/                       
│   ├── assets/                
│   │   ├── design/                     # Imágenes del diseño
│   │   ├── fonts/                      # Carpeta con las fonts
│   │   └── images/                     # Carpeta que contiene todas las imágenes
│   │   
│   ├── components/                     # Carpeta que contiene todos los componentes
│   │   ├── best_sellers/                   => Class Component
│   │   ├── button/                         => Function Component
│   │   ├── cart/                           => Function Component
│   │   ├── cart_item/                      => Function Component
│   │   ├── category/                       => Function Component
│   │   ├── footer/                         => Function Component
│   │   ├── navbar/                         => Function Component
│   │   ├── product_card/                   => Function Component
│   │   ├── products_cards/                 => Function Component
│   │   └── suscribe_form/                  => Function Component
│   │   
│   ├── helpers/  
│   │   ├── contact.validate.js         # Funcion para validación del formulario
│   │   └── scrollToTop.jsx             
│   │   
│   ├── hooks/                          # Providers useContext y useParams para componente de clase
│   │   ├── params/                         => Function Component
│   │   ├── cart/                           => Function Component
│   │   └── user/                           => Function Component
│   │   
│   ├── pages/                          # Carpeta que contiene todas las páginas
│   │   ├── categories/                     => Class Component
│   │   ├── contact/                        => Class Component
│   │   ├── error/                          => Function Component
│   │   ├── home/                           => Function Component
│   │   ├── login/                          => Function Component
│   │   ├── product_detail/                 => Function Component
│   │   └── products/                       => Class Component
│   │   
│   ├── services/                       # Carpeta para simular los llamados a la api
│   │   └── categories/                 # Mock y servicios de categorías
│   │   └── contact/                    # Mock y servicios del from de contacto
│   │   └── newsletter/                 # servicios del from de suscripción
│   │   └── products/                   # Mock y servicios de productos
│   │   └── users/                      # Mock y servicios de usuarios y simulacro de auth
│   │   
│   ├── App.jsx                             => Function Component                        
│   └── main.jsx                            => Function Component
│                               
├── index.html                          # Archivos de configuración
├── config files                
└── README.md  
```


## Detalles a tener en cuenta sobre la app:
### Formularios
- El formulario de Login utiliza un user mock para simular la conección con la db, y muestra un msg si el usuario no existe o la contraseña es incorrecta
- Para loguearte puedes utilizar un usuario dentro de los mocks en: src/services/users/user.mock.js
- El login se mantiene con un useContext, por lo que al recargar la página se pierde el logueo
- El formulario de contacto cuenta validaciones simples, muestra un mensaje si hay un campo incorrecto y al modificarlo, desaparece ese mensaje. Al simularse el envio de mail muestra un Toast con un mensaje exitoso.
- Los tres formularios en el sitio, cuando esta simulando el envio, el contenido del botón cambia a un estado de carga

### Carrito de compra
- Si clickeas fuera del carrito, en cualquier parte del sitio, menos en los botones de compra o de aumentar la cantidad, se minimiza.
- Luego de agregar un producto al carrito se habilita la compra, una vez clickeado el
botón de comprar, te dirije al login si es que no estás logueado, en caso contrario, muestra
una alerta que debería de dirigirte al checkout.
- Una vez agregado un producto al carrito, se puede aumentar o disminuir la cantidad de ese mismo producto, o eliminar

## Cosas a tener en cuenta sobre el proyecto:
- Se utilizaron mocks para simular la conección con el backend
- Se utilizó useContext para crear el carrito de compras y el login, pero 
para un mejor manejo, lo ideal es utilizar redux.
- La imágen del producto esta importada de las assets para poder ser utilizada, pero debería
ser una url de la localización del archivo en el servidor.



## Product Mock

```bash
{
    id: 1,
    name: "Café con leche",
    price: 100,
    description:"descripcion de prueba",
    category: [1],
    isBestSeller: true,
    image:{
        url: coffee,
        alt:"café con leche",
    },
}

```

## User Mock

```bash
{
    id: 1,
    name: "admin",
    email: "admin@mail.com",
    password: "admin123",
    isAdmin: true
},  
```


## Diseño

### Home Page
![home_page](https://github.com/user-attachments/assets/74d26d92-365d-4684-9f89-0032a7657000)

### Categories Page
![categorias_page](https://github.com/user-attachments/assets/b30f34fd-ccc1-4ecd-abed-868247e31fd3)

### Products Page
![products_page](https://github.com/user-attachments/assets/0aba8f2d-fa90-4cd6-bf99-2d03296d6712)

### Contact Page
![contact_page](https://github.com/user-attachments/assets/d4511fd1-069c-4d30-ac67-67c78acbe345)

### Login Page
![login_page](https://github.com/user-attachments/assets/ed9aa706-afec-450f-a6d7-e1d72930ec37)

### Product Detail Page
![product_detail_page](https://github.com/user-attachments/assets/e14f9c88-163f-4db5-ad87-7006eaf0ee02)

### Error Page
![error_page](https://github.com/user-attachments/assets/188c6406-6ad8-42e9-8944-17130da7958c)

