// ============================================
// SAMUEL PEÑALOZA — main.js
// ============================================

// --------------------------------------------
// CONTADOR BEBÉ — Tabla de datos (40 semanas)
// Fecha estimada de parto: 24 de Octubre de 2026
// Hoy (28 feb 2026) = semana 6 del embarazo
// --------------------------------------------
const FECHA_PARTO = new Date(2026, 9, 24); // Mes 9 = Octubre (0-indexado)
const SEMANAS_EMBARAZO = 40;

const DATOS_BEBE = [
    // [semana, tamaño cm, emoji, comparación]
    { s: 1, cm: 0.1, e: '🔬', c: 'Apenas una célula. Todo empieza aquí.' },
    { s: 2, cm: 0.1, e: '🔬', c: 'Dos células. La vida en su forma más pequeña.' },
    { s: 3, cm: 0.15, e: '🌱', c: '0.15 cm — del tamaño de la cabeza de un alfiler.' },
    { s: 4, cm: 0.2, e: '🫘', c: '0.2 cm — como una semilla de amapola.' },
    { s: 5, cm: 0.4, e: '🌱', c: '0.4 cm — como una semilla de manzana.' },
    { s: 6, cm: 0.6, e: '🫛', c: '0.6 cm — del tamaño de una lenteja o guisante. ¡Hola, bebé!' },
    { s: 7, cm: 1.0, e: '🫐', c: '1.0 cm — como un arándano fresco.' },
    { s: 8, cm: 1.6, e: '🫐', c: '1.6 cm — del tamaño de una frambuesa madura.' },
    { s: 9, cm: 2.3, e: '🍇', c: '2.3 cm — como una uva pequeña.' },
    { s: 10, cm: 3.1, e: '🍓', c: '3.1 cm — del tamaño de una fresa silvestre.' },
    { s: 11, cm: 4.1, e: '🍋', c: '4.1 cm — como una ciruela pequeña.' },
    { s: 12, cm: 5.4, e: '🍋', c: '5.4 cm — del tamaño de un limón.' },
    { s: 13, cm: 7.4, e: '🍑', c: '7.4 cm — como una naranja pequeña.' },
    { s: 14, cm: 8.7, e: '🍑', c: '8.7 cm — del tamaño de un durazno.' },
    { s: 15, cm: 10.1, e: '🍎', c: '10.1 cm — como una manzana mediana.' },
    { s: 16, cm: 11.6, e: '🥑', c: '11.6 cm — del tamaño de un aguacate.' },
    { s: 17, cm: 13.0, e: '🍐', c: '13.0 cm — como una pera pequeña.' },
    { s: 18, cm: 14.2, e: '🍠', c: '14.2 cm — del tamaño de un camote dulce.' },
    { s: 19, cm: 15.3, e: '🥭', c: '15.3 cm — como un mango pequeño.' },
    { s: 20, cm: 25.6, e: '🍌', c: '25.6 cm — del tamaño de un banano. ¡Mitad del camino!' },
    { s: 21, cm: 26.7, e: '🥕', c: '26.7 cm — como una zanahoria grande.' },
    { s: 22, cm: 27.8, e: '🌽', c: '27.8 cm — del tamaño de una mazorca de maíz.' },
    { s: 23, cm: 28.9, e: '🍓', c: '28.9 cm — como un pomelo.' },
    { s: 24, cm: 30.0, e: '🌽', c: '30.0 cm — tan largo como una regla de 30 cm.' },
    { s: 25, cm: 34.6, e: '🥦', c: '34.6 cm — del tamaño de una coliflor entera.' },
    { s: 26, cm: 35.6, e: '🧅', c: '35.6 cm — como una espiga de trigo.' },
    { s: 27, cm: 36.6, e: '🥬', c: '36.6 cm — del tamaño de una lechuga grande.' },
    { s: 28, cm: 37.6, e: '🍆', c: '37.6 cm — como una berenjena.' },
    { s: 29, cm: 38.6, e: '🎃', c: '38.6 cm — del tamaño de una calabaza pequeña.' },
    { s: 30, cm: 39.9, e: '🥬', c: '39.9 cm — como un repollo completo.' },
    { s: 31, cm: 41.1, e: '🥥', c: '41.1 cm — del tamaño de un coco.' },
    { s: 32, cm: 42.4, e: '🎾', c: '42.4 cm — tan largo como dos raquetas de ping-pong.' },
    { s: 33, cm: 43.7, e: '🍍', c: '43.7 cm — del tamaño de una piña tropical.' },
    { s: 34, cm: 45.0, e: '🧃', c: '45.0 cm — como una botella de litro y cuarto.' },
    { s: 35, cm: 46.2, e: '🍈', c: '46.2 cm — del tamaño de un melón dulce.' },
    { s: 36, cm: 47.4, e: '🥬', c: '47.4 cm — como una romana entera.' },
    { s: 37, cm: 48.6, e: '🌿', c: '48.6 cm — tan largo como un paraguas cerrado.' },
    { s: 38, cm: 49.8, e: '🎸', c: '49.8 cm — del tamaño de una guitarra infantil.' },
    { s: 39, cm: 50.7, e: '🍉', c: '50.7 cm — como una sandía pequeña.' },
    { s: 40, cm: 51.2, e: '🍉', c: '51.2 cm — ¡Ya está listo! Del tamaño de una sandía.' },
];

function inicializarContadorBebe() {
    const hoy = new Date();
    const msPorSemana = 1000 * 60 * 60 * 24 * 7;
    const msRestantes = FECHA_PARTO - hoy;

    // Semanas restantes para el parto (mínimo 0)
    const semanasRestantes = Math.max(0, Math.floor(msRestantes / msPorSemana));

    // Semana de embarazo actual (semana 1 a 40)
    const semanaActual = Math.min(SEMANAS_EMBARAZO, Math.max(1, SEMANAS_EMBARAZO - semanasRestantes));

    // Buscar datos de la semana actual en la tabla
    const datos = DATOS_BEBE.find(d => d.s === semanaActual) || DATOS_BEBE[DATOS_BEBE.length - 1];

    // Porcentaje de progreso
    const porcentaje = Math.round((semanaActual / SEMANAS_EMBARAZO) * 100);

    // --- Actualizar DOM ---
    const elSemana = document.getElementById('bebe-semana-actual');
    const elRestantes = document.getElementById('bebe-semanas-restantes');
    const elFill = document.getElementById('bebe-progreso-fill');
    const elProgLabel = document.getElementById('bebe-progreso-label');
    const elProgressbar = document.getElementById('bebe-progressbar');
    const elEmoji = document.getElementById('bebe-emoji');
    const elTamanio = document.getElementById('bebe-tamanio');
    const elComparacion = document.getElementById('bebe-comparacion');

    if (elSemana) elSemana.textContent = semanaActual < 10 ? '0' + semanaActual : semanaActual;
    if (elRestantes) elRestantes.textContent = semanasRestantes < 10 ? '0' + semanasRestantes : semanasRestantes;
    if (elProgLabel) elProgLabel.textContent = porcentaje + '% del embarazo completado';
    if (elProgressbar) elProgressbar.setAttribute('aria-valuenow', semanaActual);
    if (elEmoji) elEmoji.textContent = datos.e;
    if (elTamanio) elTamanio.textContent = datos.cm + ' cm';
    if (elComparacion) elComparacion.textContent = datos.c;

    // Animar barra de progreso con un pequeño delay para que la transición CSS sea visible
    if (elFill) {
        setTimeout(() => {
            elFill.style.width = porcentaje + '%';
        }, 200);
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', inicializarContadorBebe);


// --------------------------------------------
// Blog — Expandir / Colapsar entradas
// Maneja todos los botones .btn-leer-mas
// --------------------------------------------
function inicializarBlog() {
    const botones = document.querySelectorAll('.btn-leer-mas');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const postId = boton.getAttribute('data-target');
            const post = document.getElementById(postId);
            if (!post) return;

            const fullText = post.querySelector('.blog-full-text');
            if (!fullText) return;

            const estaExpandido = boton.getAttribute('aria-expanded') === 'true';

            if (estaExpandido) {
                // Colapsar
                fullText.classList.remove('is-expanded');
                fullText.hidden = false; // mantener en DOM para transición
                boton.setAttribute('aria-expanded', 'false');
                boton.childNodes[0].textContent = 'Leer más ';
            } else {
                // Expandir
                fullText.hidden = false;
                // Forzar reflow para que la transición CSS funcione
                fullText.getBoundingClientRect();
                fullText.classList.add('is-expanded');
                boton.setAttribute('aria-expanded', 'true');
                boton.childNodes[0].textContent = 'Leer menos ';
            }
        });
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarBlog);

// --------------------------------------------
// Navbar — Hamburger (mobile)
// --------------------------------------------
function inicializarHamburger() {
    const hamburger = document.getElementById('navbar-hamburger');
    const menu = document.getElementById('navbar-links');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
        const estaAbierto = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!estaAbierto));
        menu.classList.toggle('is-open', !estaAbierto);
        hamburger.setAttribute('aria-label', estaAbierto ? 'Abrir menú' : 'Cerrar menú');
    });

    // Cerrar menú al hacer clic en cualquier enlace
    menu.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.setAttribute('aria-expanded', 'false');
            menu.classList.remove('is-open');
            hamburger.setAttribute('aria-label', 'Abrir menú');
        });
    });
}

// --------------------------------------------
// Navbar — Scroll Spy con Intersection Observer
// Añade .is-active al link de la sección visible
// --------------------------------------------
function inicializarNavScrollSpy() {
    // Secciones observables: el id en el HTML debe coincidir con el href del link
    const secciones = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.navbar-link');
    if (!secciones.length || !links.length) return;

    // Mapa href -> link element  (ej: "#sobre-titulo" -> <a>)
    const linkMap = {};
    links.forEach(link => {
        linkMap[link.getAttribute('href')] = link;
    });

    const activarLink = (id) => {
        links.forEach(l => l.classList.remove('is-active'));
        // Intentar hacer match por id de sección o por el id del h2 dentro de ella
        const bySection = linkMap[`#${id}`];
        if (bySection) {
            bySection.classList.add('is-active');
            return;
        }
        // Fallback: buscar el h2 con id dentro de la sección
        const seccion = document.getElementById(id);
        if (!seccion) return;
        const heading = seccion.querySelector('[id]');
        if (heading) {
            const byHeading = linkMap[`#${heading.id}`];
            if (byHeading) byHeading.classList.add('is-active');
        }
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activarLink(entry.target.id);
                }
            });
        },
        {
            rootMargin: '-20% 0px -70% 0px', // activa cuando el top 30% del viewport toca la sección
            threshold: 0
        }
    );

    secciones.forEach(sec => observer.observe(sec));
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarHamburger();
    inicializarNavScrollSpy();
});

