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
                        <p><b>${prod.precio}</b></p>
                        <p>${prod.descripcion}</p>
                    </div>
                    <a class="card__boton" href="#">COMPRAR</a>
                </div>
            </article>
        </div>`
    })
    
    console.log(html) /* Voy a tener varios div.card * 9 -> */

    contenedorProductos.innerHTML = html

}

window.addEventListener('DOMContentLoaded', start)

