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

