import productos from './db/producto';
import './sass/main.scss';

console.log(productos);

const contenedorProductos = document.getElementById('container-productos');

const start = () => {
    console.warn('Se cargó todo el HTML');

    let html = '';

    productos.forEach(prod => {
        html += `
            <div class="card">
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
            </div>`;
    });

    contenedorProductos.innerHTML = html;
};

window.addEventListener('DOMContentLoaded', start);


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');

    if (themeToggle) {
        
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '⚪';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '⚪';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '⚫';
                localStorage.setItem('theme', 'light');
            }
        });
    }
});


