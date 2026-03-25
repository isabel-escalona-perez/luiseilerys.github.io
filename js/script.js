// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Contador de días juntos
function calcularDias() {
    const fechaBoda = new Date('2025-01-24');
    const hoy = new Date();
    const diferencia = Math.floor((hoy - fechaBoda) / (1000 * 60 * 60 * 24));
    document.getElementById('contador').innerHTML = 
        `❤️ ${diferencia} días de amor juntos`;
}
calcularDias();

// Galería con Swiper (agrega aquí los nombres de tus fotos reales)
const fotos = [
    'jpg/foto1.jpg', 'jpg/foto2.jpg', 'jpg/foto3.jpg', 
    'jpg/foto4.jpg', 'jpg/foto5.jpg', 'jpg/foto6.jpg'
    // Agrega más fotos aquí
];

const galeriaWrapper = document.getElementById('galeria-wrapper');
fotos.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${src}" alt="Luis y Eilerys">`;
    galeriaWrapper.appendChild(slide);
});

new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// Mensajes de ejemplo (puedes cargar desde JSON o Formspree responses)
const mensajesEjemplo = [
    { nombre: "Claudia", mensaje: "Deseo que siempre compartan esa complicidad. ¡Salud y amor!", fecha: "23 mar 2026" },
    { nombre: "Amigos de Manzanillo", mensaje: "¡Qué bonita historia! Un abrazo enorme.", fecha: "22 mar 2026" }
];

const listaMensajes = document.getElementById('mensajes-lista');
mensajesEjemplo.forEach(m => {
    const div = document.createElement('div');
    div.className = 'bg-white p-6 rounded-2xl shadow';
    div.innerHTML = `
        <p class="font-medium">${m.nombre}</p>
        <p class="text-sm text-gray-500">${m.fecha}</p>
        <p class="mt-3 italic">"${m.mensaje}"</p>
    `;
    listaMensajes.appendChild(div);
});

// Formulario (ya conectado a Formspree en el HTML)
document.getElementById('guestbook-form').addEventListener('submit', () => {
    alert('¡Mensaje enviado con éxito! Gracias por tu cariño ❤️');
    // Opcional: recargar mensajes si implementas webhook
});
