// Script para cargar testimonios dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
});

function loadTestimonials() {
    // Obtener el contenedor del carrusel de testimonios
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    
    if (!testimonialCarousel) {
        console.log('No se encontró el contenedor de testimonios');
        return;
    }

    // Limpiar contenido existente
    testimonialCarousel.innerHTML = '';

    // Obtener los testimonios de la base de datos
    const testimonials = getAllTestimonials();

    // Generar HTML para cada testimonio
    testimonials.forEach(testimonial => {
        const testimonialHTML = createTestimonialHTML(testimonial);
        testimonialCarousel.appendChild(testimonialHTML);
    });

    // Reinicializar el carrusel Owl Carousel si existe
    if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
        jQuery('.testimonial-carousel').owlCarousel('destroy');
        jQuery('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            dots: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }
}

function createTestimonialHTML(testimonial) {
    // Crear elemento div contenedor
    const testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'position-relative';

    // Crear las estrellas según el rating
    const starsHTML = createStarsHTML(testimonial.rating);

    // Crear HTML del testimonio
    testimonialDiv.innerHTML = `
        <i class="fa fa-3x fa-quote-right text-primary position-absolute" style="top: -6px; right: 0;"></i>
        <div class="d-flex align-items-center mb-3">
            <img class="img-fluid rounded-circle" src="${testimonial.image}" style="width: 60px; height: 60px;" alt="${testimonial.name}" onerror="this.src='img/testimonial-1.jpg'">
            <div class="ml-3">
                <h6 class="text-uppercase mb-1">${testimonial.name}</h6>
                <span class="text-muted small">${testimonial.position}</span>
                <div class="text-muted small">${testimonial.company}</div>
                <div class="mt-1">${starsHTML}</div>
            </div>
        </div>
        <p class="m-0">${testimonial.testimonial}</p>
    `;

    return testimonialDiv;
}

function createStarsHTML(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fa fa-star text-primary"></i>';
        } else {
            starsHTML += '<i class="fa fa-star text-muted"></i>';
        }
    }
    return starsHTML;
}

// Función para cargar testimonios limitados (útil para otras secciones)
function loadLimitedTestimonials(containerId, limit = 3) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.log(`No se encontró el contenedor con ID: ${containerId}`);
        return;
    }

    // Limpiar contenido existente
    container.innerHTML = '';

    // Obtener testimonios limitados
    const testimonials = getTestimonialsLimit(limit);

    // Generar HTML para cada testimonio
    testimonials.forEach(testimonial => {
        const testimonialHTML = createSimpleTestimonialHTML(testimonial);
        container.appendChild(testimonialHTML);
    });
}

function createSimpleTestimonialHTML(testimonial) {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.className = 'testimonial-item mb-4';

    testimonialDiv.innerHTML = `
        <div class="d-flex align-items-center mb-2">
            <img class="img-fluid rounded-circle mr-3" src="${testimonial.image}" style="width: 50px; height: 50px;" alt="${testimonial.name}" onerror="this.src='img/testimonial-1.jpg'">
            <div>
                <h6 class="mb-0">${testimonial.name}</h6>
                <small class="text-muted">${testimonial.company}</small>
            </div>
        </div>
        <p class="small">${testimonial.testimonial.substring(0, 120)}...</p>
        ${createStarsHTML(testimonial.rating)}
    `;

    return testimonialDiv;
}

// Función para obtener testimonios por AJAX (si fuera necesario en el futuro)
async function loadTestimonialsFromServer(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error cargando testimonios:', error);
        return [];
    }
}