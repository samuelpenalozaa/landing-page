// ============================================
// SAMUEL PEÑALOZA — main.js
// ============================================

// --------------------------------------------
// Contador de Embarazo
// Fecha estimada de parto: 15 de Octubre de 2026
// Mes 9 = Octubre (en JS los meses van de 0 a 11)
// --------------------------------------------
const fechaParto = new Date(2026, 9, 15);

function calcularSemanasFaltantes() {
    const hoy = new Date();
    const diferenciaMs = fechaParto - hoy;

    const elementoContador = document.getElementById('semanas-embarazo');
    if (!elementoContador) return;

    // Si ya pasó la fecha de parto
    if (diferenciaMs < 0) {
        elementoContador.innerText = "00";
        return;
    }

    const msPorSemana = 1000 * 60 * 60 * 24 * 7;
    const semanas = Math.floor(diferenciaMs / msPorSemana);

    // Formatear a dos dígitos si es menor a 10
    elementoContador.innerText = semanas < 10 ? '0' + semanas : semanas;
}

// Ejecutar al cargar la página
calcularSemanasFaltantes();

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

