# Desafío técnico React para Boost Software Studio

## Deploy: [Proyecto react shop]("reactshop.tomassorgetti.com.ar")


## Como Iniciar

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
│   │   ├── cart/                           => Function Component
│   │   ├── cart_item/                      => Function Component
│   │   ├── footer/                         => Function Component
│   │   ├── navbar/                         => Function Component
│   │   ├── product_card/                   => Function Component
│   │   └── products_cards/                 => Function Component
│   │   
│   ├── context/                        # Providers useContext de user y cart
│   │   ├── cart/                           => Function Component
│   │   └── user/                           => Class Component
│   │   
│   ├── helpers/                 
│   │   └── contact.validate.js         # Funcion para validación del formulario
│   │   
│   ├── pages/                          # Carpeta que contiene todas las páginas
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
 

## Cosas a tener en cuenta sobre el proyecto:
- Se utilizaron mocks para simular la conección con el backend
- Los servicios tienen un pequeño retrazo para simular

## Por qué el uso de useContext
asdkasjl kdaslkd jalksdj alsdjlak sdlkad lkasdj lasjd las




landing-bss
Desafío técnico React para Boost Software Studio

Actividad de referencia.

Te invitamos a realizar una actividad práctica para demostrar tus habilidades en React.js. La actividad consiste en crear una landing page básica para un negocio gastronómico, debe contar con las siguientes características:  

Estructura de la Página:  
    1 Una barra de navegación (navbar) en la parte superior.
    2 Tres secciones:
        - Sección de bienvenida.
        - Sección de catálogo y productos.
        - Sección de contacto.
    3 Un pie de página (footer) en la parte inferior.
Requerimientos Específicos: 
    1 La landing page debe tener ruteo entre las secciones utilizando React Router.
    2 La sección del catálogo de productos debe mostrar una lista de productos. Puedes usar cualquier base de datos o datos simulados (mock data) para poblar el catálogo.
    3 La barra de navegación debe permitir navegar entre las secciones.
    4 La página debe ser responsive y tener un diseño atractivo.

Entrega del proyecto:

Sube tu proyecto a un repositorio público en GitHub.
Asegúrate de incluir un archivo README.md con instrucciones claras sobre cómo ejecutar el proyecto.
Una vez completado, envíanos el enlace a tu repositorio para que podamos revisar tu trabajo.
Queremos que esta prueba técnica sea una experiencia enriquecedora para ti. No solo nos ayudará a evaluar tus habilidades, sino que también te permitirá mostrar tu creatividad y dominio de React.js. ¡Buena suerte y esperamos ver tu talento reflejado en el proyecto!  
