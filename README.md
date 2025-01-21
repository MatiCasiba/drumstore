* Nombre: Matias Casiba
* Link Repo GitHub:
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
        <div class="search-bar__logo-container">Logo</div>
      </div>
      <form action="#" class="search-bar__form-container">
        <label for="busqueda" class="search-bar__form-label">Buscar</label>
        <input type="search" id="busqueda" class="search-bar__form-search">
        <button type="submit" class="search-bar__form-submit">Buscar</button>
      </form> <!-- search-bar__form-continer -->

      <div class="search-bar__carrito-container">C</div>
      <div class="menu-toogle">
        <label for="" class="menu-toogle__label">
          <span class="menu-toogle__top-bread"></span>
          <span class="menu-toogle__meat"></span>
          <span class="menu-toogle__bottom-bread"></span>
        </label>
      </div> <!-- menu-toogle -->

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