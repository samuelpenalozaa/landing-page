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
