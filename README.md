* Nombre: Matias Casiba
* Link Repo GitHub: https://github.com/MatiCasiba/drumstore
* Link Netlify:

# Proyecto Integrador - Etapa 1
En este proyecto crearé una página de productos con sus descripciones, trabajaré con html, scss y javaScript, todo esto estará hecho con vanilla:

## Base dada 

### Header
Ene el elemento header se encontrará la barra de navegación y un menú de opciones, las opciones la encontrarás en los elementos li, contendrá un menu toogle, este se verá cuando el dispositivo es chico:
```sh
    <header class="main-header">
      <input type="checkbox" id="menu">
      
      <nav class="nav-bar">
        <ul class="nav-bar__nav-list">
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Inicio</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Alta</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Nosotros</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Contacto</a>
          </li>
        </ul> <!-- nav-bar__nav-list -->
      </nav> <!-- nav-bar -->

      <div class="search-bar">
        <div class="search-bar__logo-container">
          <img class="search-bar__logo-img" src="/public/logo/ds-logo-sf.png" alt="logo ds">
        </div>
        <form action="#" class="search-bar__form-container">
          <label for="busqueda" class="search-bar__form-label">Buscar</label>
          <input type="search" id="busqueda" class="search-bar__form-search">
          <button type="submit" class="search-bar__form-submit">Buscar</button>
        </form> <!-- search-bar__logo-container -->
        <div class="search-bar__carrito-container">C</div>
        <div class="menu-toogle">
          <label for="menu" class="menu-toogle__label">
            <span class="menu-toogle__top-bread"></span>
            <span class="menu-toogle__meat"></span>
            <span class="menu-toogle__bottom-bread"></span>
          </label>
        </div> <!-- .menu-toogle -->
      </div> <!-- .search-bar -->

    </header>
```

### Main
Dentro del elemento main, contendrá las tarjetas de los productos, donde verás la imágen de ellos y su descripcion, te mostraré el ejemplo de como se armó con uno de ellos:
```sh
<main>
    <section class="section-cards">
        <header class="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Se encontraron X productos</p>
        </header>
    </section>

    <section class="cards-container">

        <div class="card">
          <article class="card__article">
            <div class="card__image-container">
              <img class="card__image" src="./public/image/guitarra-electrica-fender-player-Stratocaster-de-aliso-2010-black.webp" alt="guitarra electrica fender player">
            </div> <!-- card__image-container -->
            <div class="card__content">
              <h2 class="card__heading">Guitarra electrica fender player</h2>
              <div class="card__description">
                <p>Hablar de fender es entender la música en todo el mundoy en muchos géneros. Es una de las marcas líderes en definir los sonidos que escuchaamos. A su vez, satisface las necesidades de guitarristas al crear productos de calidad respaldarlos con un servicio y estabilidad...</p>
              </div>
            </div> <!-- card__content -->
          </article> <!-- card__image-container -->
        </div> <!-- card -->

    </section>
</main>
```
En el archivo scss le estarémos dando diseño a las tarjetas

### Carpeta SASS y sus archivos
Dentro de la carpeta sass (que se encuentra ubicada en la carpeta src) habrán carpetas que contendrán archivos dentro de las carpetas, aquí es donde estaré dando diseño a toda la página

#### Carpeta base 
En la carpeta base se encontrarán los archivos _resets y typography (extraeré una fuente de google fonts):
* _resets.scss
```sh
* {
    margin: 0; # quito los márgenes
    padding: 0; # quito los rellenos
    box-sizing: border-box; # orden de los elementos
}
```
* _typography.scss:
```sh
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
body {
    font-family: "Open Sans", sans-serif;
    font-size: 100%; // default navegadores 16px
}
```
* _variables.scss -> este archivo va a servir para crear variables que los voy a poder aplicar en otros archivos, en este caso la usaré para manejar colores:
```sh
$color-1: #403d39;
$color-2: #252422;
$color-3: #eb5e28;
$color-4: #F6F6F6;
```
Al momento de usarlos se deberá relizar de la siguiente forma:
```sh
# en _header.scss:
@use '../base/variables';

# un ejemplo
background-color: variables.$color-3;
```

#### Carpeta components
En esta carpeta, se encontrará el diseño de las tarjetas, se han construido de la siguiente manera:

```sh
.card {
    min-width: 400px;
    max-width: 500px;
    height: 200px;

    background-color: ... ;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.3);

    transition: transform .2s;

    &:hover,
    &:focus {
        /* radianes 2pi, gradianes 400, decimales 360 grdos, vueltas 1trun */
        transform: scale(1.03) skew(0deg) rotate(2deg);
        transform-origin: bottom;
        box-shadow: 0 7px 8px 0 rgba(0,0,0,0.5);
    }

    &__article {
        display: flex;
    }
    &__image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &:nth-child(5n+1){
        background-image: linear-gradient(to top, #aaafad 0%, #f8accf 100%);
    }

    &:nth-child(5n + 2) {
        background-image: linear-gradient(to top, #696eff 0%, #f8accf 100%);
    }

    &:nth-child(5n + 3) {
        background-image: linear-gradient(to top, #ff1b6b 0%, #34caff 100%);
    }

    &:nth-child(5n + 4) {
        background-image: linear-gradient(to top, #ff930f 0%, #fff95b 100%);
    }

    &:nth-child(5n + 5) {
        background-image: linear-gradient(to top, #ff0f7b 0%, #f89b29 100%);
    }

    &__image-container {
        height: 200px;
        background-color: blue;
        overflow: hidden;
        clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); /* estado inicial */
    }

    &:hover &__image-container,
    &:focus &__image-container {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); /* estado final */
    }

    /*  responsive -> 992px */

    @media screen and (min-width: 992px) {
        & {
            width: 220px;
            max-width: 300px;
            height: 400px;
        }

        &__article {
            flex-direction: column;
        }

        & &__image-container { /* .card .card__image-container */
            clip-path: polygon(0 0, 100% 0, 100% 200px, 0 180px); /* Estado inicial */
        }

        &:hover &__image-container,
        &:focus &__image-container {
            clip-path: polygon(0 0, 100% 0, 100% 190px, 0 200px); /* Estado final */;
        }
    }
    
}
```

#### Carpeta layout
En esta carpeta se encontrará todo el diseño del elemento header del html, la barra de navegación, el menu toogle, el buscador, un carrito, entre otras cosas:
* header:
```sh
.main-header{
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 992px){
        &{
            flex-direction: column;
        }
    }
}

#menu{
    display: none;

    # para que funcione el menu toogle
    &:checked + .nav-bar{
        display: block;
    }
    &:checked ~ .search-bar .menu-toogle .menu-toogle__label{
        background-color: ... ;
    }
}
```

* navbar:
```sh
.nav-bar{
    background-color: ... ;
    display: none;

    &__nav-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;

        @media screen and (min-width: 992px){
            &{
                flex-direction: row;
            }
        }
    }

    &__nav-item{
        text-align: center;
        background-color: ... ;
    }

    &__nav-link{
        display: block;
        background-color: ... ;
        padding: 1rem 2rem; # quiere decir que su valor es -> 16px y 32px
        color: white;
    }

    @media screen and (min-width: 992px){
        &{
            display: block;
        }
    }
}
```

* search bar:
```sh
.search-bar{
    display: flex;
    background-color: ... ;
    justify-content: space-around;

    &__logo-container{
        width: 18.75rem;
        height: 3.5rem;
    }

    &__logo-img{
        max-width: 100%; # hace que la imagen nunca supere el tamaño del contenedor
        max-height: 100%; # evita que la imagen se salga del contenedor
        object-fit: contain; # Asegura que la imagen se ajuste sin recortarse
    }

    &__form-container{ # fondo del contenedor del buscador 
        padding: 1rem;
        background-color: ... ;
        display: flex;
        flex-basis: 100%;
        justify-content: center;
    }

    &__form-label{ # buscar 
        background-color: ... ;
    }

    &__logo-search{ # logo del buscador
        max-width: 20px;
        margin-right: 20px;
        
    }

    &__form-search{ #en esta clase se encuentra el input del buscador
        background-color: ... ;
    }

    &__form-submit{ # el boton de buscar 
        background-color: ... ;
    }

    &__carrito-container{
        flex: 0 0 3rem;
        background-color: ... ;
    }
}
```
Agregué 2 logos para el buscador y para el carrito de compra, le configuré su tamaño:
```sh
#index.html
<div class="search-bar">
    <div class="search-bar__logo-container">
      <img class="search-bar__logo-img" src="/logo/ds-logo-sf.png" alt="logo ds"> # el logo de la página
    </div>
    <form action="#" class="search-bar__form-container">
      <label for="busqueda" class="search-bar__form-label">
        <img class="search-bar__logo-search" src="/logo/logo-search.png" alt="logo del bucador"> # logo del buscador
      </label>
    </form>
    <div class="search-bar__carrito-container">
      <img class="search-bar__cart-logo" src="/logo/cart-logo.png" alt="logo de carro"> #logo del carro
    </div>
</div>

# _header.scss
.search-bar{
    &__logo-search{
        max-width: 20px;
        margin-right: 20px;
        
    }

    &__cart-logo{
        width: 40px;
        margin: 5px 0 5px 0;
    }
}
```
También eh cambiado sus colores de fondo, lo encontrarás como: variables.$color-3 y variables.$color-4, también estarán las dos juntas para crear un degradado (background: linear-gradient(900deg, variables.$color-3, variables.$color-4);) 


* menu-toogle:
```sh
.menu-toogle{
    display: block;
    background-color: ... ;
    flex: 0 0 3rem;
    position: relative;
    cursor: pointer;

    &__label {
        display: block;
        background-color: ... ;
        height: 100%;
    }

    &__top-bread,
    &__meat,
    &__bottom-bread{
        display: block;
        background-color: ... ;
        height: .2rem;
        position: absolute;
        left: .5rem;
        right: .5rem;
    }

    &__top-bread{
        top: .8rem;
    }

    &__meat{
        top: 50%;
        margin-top: -.1rem;
    }

    &__bottom-bread{
        bottom: .8rem;
    }

    @media screen and (min-width: 992px) {
        & { # menu-toogle
            display: none;
        }
    }

}
```

#### Carpeta src/sass/pages
Dentro de la carpeta pages que se encuentra ubicada dentro de la carpeta sass, se estará dando diseño a lo que contiene inicio, contacto y nosotros.
* _inicio.scss -> acá se dará diseño a la seccion de las tarjetas y el contenedor de las tarjetas:
```sh
.section-cards{
    background-color: #f1f2f3;
    padding: 1rem;
}

.cards-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
}
```

### Carpeta db
Dentro de la carpeta db se encontrará el archivo producto.js, donde contendrá todos los productos de la página con sus descripciones, a este se usará con el main.js.
```sh
# producto.js

const productos = [
    {
        id: 1,
        nombre: "Armory",
        foto: "image/armory.webp",
        descripcion: "Armory Shell Pack - Mapex AR628SFU",
        precio: 1819000.00
    },
    {
        id: 2,
        nombre: "Equinox",
        foto: "image/equinox.webp",
        descripcion: "Equinox - Mapex BPDLE628XFB",
        precio: 4899.00
    },
    {
        id: 3,
        nombre: "Mars Birch",
        foto: "image/mars-birch.webp",
        descripcion: "Mapex Mars Birch Shell Pack 529SF 5-Pc Rock Shell Pack",
        precio: 699.00
    },
    {
        id: 4,
        nombre: "Mars Maple",
        foto: "image/mars-maple.webp",
        descripcion: "Mars Maple Shell Pack - MAPEX MM529SFOG",
        precio: 1242140.00
    },
    {
        id: 5,
        nombre: "Saturn Evolution",
        foto: "image/saturn-evolution.webp",
        descripcion: "Saturn Evo Shell Pack - Mapex SE529XMPQ",
        precio: 2249990.00
    },
    {
        id: 6,
        nombre: "Venus",
        foto: "image/venus.webp",
        descripcion: "Venus - Mapex VE5294FTVC",
        precio: 1098535.00
    },
    {
        id: 7,
        nombre: "DW 50th anniversary",
        foto: "image/dw-50th-anniversary.webp",
        descripcion: "DW 50th Anniversary - Construidos con una combinación de caqui (persimmon) y abeto (spruce), maderas seleccionadas a mano para este modelo conmemorativo.",
        precio: 11999.00
    },
    {
        id: 8,
        nombre: "Parches Uno by Evans",
        foto: "image/set-parches-evans-uno.webp",
        descripcion: "Set Parches Uno By Evans UPG2CLS22 12'',13'',16'' doble capa,14'' ARENADO ,22'' EQ4 Capa simple con anillo",
        precio: "104061.50",
    },
    {
        id: 9,
        nombre: "Zildjian - Planet Z",
        foto: "image/platillos-zildjian-planet-z.webp",
        descripcion: "Set De Platillos Zildjian Planet Z Zp4pk 14-16-20",
        precio: 639981.30
    }
]

export default productos
```
Este archivo que contendrá la data de los productos, se unirá al main.js donde se creará dinamicamente, la estructura de las tarjetas que deberían de estar en el archivo html. Entonces lo que se crea el main.js, tomará la información del producto.js y se lo dará a la estructura html creada con js:
```sh
# main.js

import productos from './db/producto'
import './sass/main.scss'

console.log(productos) // array Productos

const contenedorProductos = document.getElementById('container-productos')
console.log(contenedorProductos)

const start = () => {
    console.warn('Se cargó todo el HTML')

    let html = ''
    
    productos.forEach(prod => {
        console.log(prod)
    
        html += `<div class="card">
            <article class="card__article">
                <div class="card__image-container">
                    <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                </div>
                <div class="card__content">
                    <h2 class="card__heading">${prod.nombre}</h2>
                    <div class="card__description">
                        <p>${prod.descripcion}</p>
                    </div>
                </div>
            </article>
        </div>`
    })
    
    console.log(html) /* Voy a tener varios div.card * 9 -> */

    contenedorProductos.innerHTML = html

}

window.addEventListener('DOMContentLoaded', start)
```
* Nota: a casua de esta configuración, al momento de agregar otros porductos, no se necesitará armar todo en html, ya que lo tendremos armado en el main.js, por lo tanto, el contenido de tarjetas que se encontraba dentro del html, fue eliminado:
```sh
    <main>
      <section class="section-cards">
        <header class="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Se encontraron X productos</p>
        </header>
      </section> <!-- section-cards -->

      <section class="cards-container" id="container-productos">
        # dentro de este section se encontraba el anterior contenido de tarjetas que fue reemplzado por el main.js
      </section>
    </main>
```

#### Modificación de los precios en producto.js
Se modifico la data de los precios, ahora se encuentran en comillas y con signos del dinero:
```sh
#ejemplos: 

precio: "$ 1.819.000,00"

precio: "US$ 4.899,00"
```


