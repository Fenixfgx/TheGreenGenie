// Base de datos de testimonios para empresa exportadora de follajes
function getTestimonialsData() {
    return [
        {
            id: 1,
            name: window.getTranslation ? window.getTranslation('testimonial.1.name') : "María González",
            position: window.getTranslation ? window.getTranslation('testimonial.1.position') : "Gerente de Compras",
            company: window.getTranslation ? window.getTranslation('testimonial.1.company') : "Garden Center Premium - España",
            image: "img/testimonial-1.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.1.text') : "Las calidades de los follajes tropicales que importamos de The Green Genie es excepcional. Sus heliconias y follajes exóticos llegan siempre frescos y en perfectas condiciones. Nuestros clientes europeos están encantados con la durabilidad y belleza de estos productos."
        },
        {
            id: 2,
            name: window.getTranslation ? window.getTranslation('testimonial.2.name') : "James Mitchell",
            position: window.getTranslation ? window.getTranslation('testimonial.2.position') : "Director de Importaciones",
            company: window.getTranslation ? window.getTranslation('testimonial.2.company') : "Tropical Flowers USA - Miami",
            image: "img/testimonial-2.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.2.text') : "Hemos trabajado con The Green Genie durante más de 3 años y la consistencia en la calidad es impresionante. Sus follajes de palma y plantas tropicales son ideales para nuestro mercado norteamericano. La logística y tiempos de entrega son perfectos."
        },
        {
            id: 3,
            name: window.getTranslation ? window.getTranslation('testimonial.3.name') : "Sophie Laurent",
            position: window.getTranslation ? window.getTranslation('testimonial.3.position') : "Compradora Internacional",
            company: window.getTranslation ? window.getTranslation('testimonial.3.company') : "Fleurs Tropicales - París, Francia",
            image: "img/testimonial-3.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.3.text') : "Los follajes de The Green Genie han revolucionado nuestras composiciones florales. La variedad de especies tropicales y la frescura con la que llegan a Europa nos permite ofrecer arreglos únicos. Un proveedor confiable y profesional."
        },
        {
            id: 4,
            name: window.getTranslation ? window.getTranslation('testimonial.4.name') : "Roberto Silva",
            position: window.getTranslation ? window.getTranslation('testimonial.4.position') : "Gerente General",
            company: window.getTranslation ? window.getTranslation('testimonial.4.company') : "Flores & Follajes Brasil - São Paulo",
            image: "img/testimonial-1.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.4.text') : "Como distribuidores en Brasil, valoramos mucho la calidad premium de los follajes exportados por The Green Genie. Sus bromelias y follajes ornamentales tienen una presentación impecable que nuestros floristería aprecian enormemente."
        },
        {
            id: 5,
            name: window.getTranslation ? window.getTranslation('testimonial.5.name') : "Akira Tanaka",
            position: window.getTranslation ? window.getTranslation('testimonial.5.position') : "Import Manager",
            company: window.getTranslation ? window.getTranslation('testimonial.5.company') : "Tokyo Green Imports - Japón",
            image: "img/testimonial-2.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.5.text') : "La atención al detalle y el cuidado en el empaque de los follajes tropicales es extraordinaria. Los productos llegan a Japón en condiciones óptimas, lo que nos permite mantener la calidad que nuestros clientes japoneses esperan. Excelente servicio."
        },
        {
            id: 6,
            name: window.getTranslation ? window.getTranslation('testimonial.6.name') : "Emma Thompson",
            position: window.getTranslation ? window.getTranslation('testimonial.6.position') : "Directora de Compras",
            company: window.getTranslation ? window.getTranslation('testimonial.6.company') : "British Tropical Supply - Londres",
            image: "img/testimonial-3.jpg",
            rating: 5,
            testimonial: window.getTranslation ? window.getTranslation('testimonial.6.text') : "The Green Genie se ha convertido en nuestro proveedor principal de follajes exóticos. La diversidad de especies, desde anturios hasta follajes de jengibre, nos permite satisfacer todas las necesidades del mercado británico. Recomendados al 100%."
        }
    ];
}

// For backward compatibility
const testimonialsData = getTestimonialsData();

// Función para obtener todos los testimonios
function getAllTestimonials() {
    return getTestimonialsData();
}

// Función para obtener testimonios por rating
function getTestimonialsByRating(rating) {
    return getTestimonialsData().filter(testimonial => testimonial.rating >= rating);
}

// Función para obtener un testimonio aleatorio
function getRandomTestimonial() {
    const testimonials = getTestimonialsData();
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    return testimonials[randomIndex];
}

// Función para obtener testimonios por cantidad
function getTestimonialsLimit(limit) {
    return getTestimonialsData().slice(0, limit);
}

// Exportar para uso en módulos (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testimonialsData,
        getAllTestimonials,
        getTestimonialsByRating,
        getRandomTestimonial,
        getTestimonialsLimit
    };
}