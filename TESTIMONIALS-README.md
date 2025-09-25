# Sistema de Testimonios - The Green Genie

## Descripción General

Sistema dinámico de testimonios para la empresa exportadora de follajes tropicales "The Green Genie". Los testimonios se cargan automáticamente desde una base de datos JavaScript y se muestran en un carrusel interactivo.

## Archivos del Sistema

### 📁 Base de Datos
- **`data/testimonials.js`** - Contiene la base de datos con 6 testimonios de clientes internacionales

### 📁 Script Principal
- **`js/testimonials-loader.js`** - Script que carga y muestra los testimonios dinámicamente

### 📁 Páginas Implementadas
- **`index.html`** - Página principal con testimonios
- **`testimonial.html`** - Página dedicada a testimonios
- **`service.html`** - Página de servicios con testimonios
- **`demo-testimonials.html`** - Página de demostración del sistema

## Características de los Testimonios

### 👥 Clientes Internacionales Incluidos:
1. **María González** - Garden Center Premium (España)
2. **James Mitchell** - Tropical Flowers USA (Miami)
3. **Sophie Laurent** - Fleurs Tropicales (París, Francia)
4. **Roberto Silva** - Flores & Follajes Brasil (São Paulo)
5. **Akira Tanaka** - Tokyo Green Imports (Japón)
6. **Emma Thompson** - British Tropical Supply (Londres)

### ⭐ Información por Testimonio:
- Nombre completo del cliente
- Posición/cargo en la empresa
- Nombre y ubicación de la empresa
- Imagen del cliente
- Calificación de 1-5 estrellas
- Testimonio detallado enfocado en exportación de follajes

## Funciones Disponibles

### 📋 Funciones Principales:
```javascript
getAllTestimonials()              // Obtiene todos los testimonios
getTestimonialsByRating(rating)   // Filtra por calificación mínima
getRandomTestimonial()            // Obtiene un testimonio aleatorio
getTestimonialsLimit(limit)       // Obtiene cantidad limitada
```

### 🎯 Funciones de Carga:
```javascript
loadTestimonials()                           // Carga testimonios en carrusel principal
loadLimitedTestimonials(containerId, limit)  // Carga testimonios limitados en contenedor específico
```

## Integración en Páginas

### 1. Incluir Scripts
```html
<!-- Antes del cierre de </body> -->
<script src="data/testimonials.js"></script>
<script src="js/testimonials-loader.js"></script>
```

### 2. HTML del Carrusel
```html
<div class="owl-carousel testimonial-carousel">
    <!-- Los testimonios se cargan automáticamente aquí -->
</div>
```

### 3. Contenedor para Testimonios Limitados
```html
<div id="mi-contenedor-testimonios">
    <!-- Para carga específica -->
</div>
<script>
    loadLimitedTestimonials('mi-contenedor-testimonios', 3);
</script>
```

## Personalización

### Agregar Nuevos Testimonios
Editar el archivo `data/testimonials.js` y agregar un nuevo objeto al array `testimonialsData`:

```javascript
{
    id: 7,
    name: "Nombre del Cliente",
    position: "Cargo",
    company: "Empresa - Ciudad, País",
    image: "img/nueva-imagen.jpg",
    rating: 5,
    testimonial: "Testimonio detallado aquí..."
}
```

### Modificar Estilos
Los estilos del carrusel están en `css/style.css` bajo la clase `.testimonial-carousel`.

### Cambiar Comportamiento del Carrusel
Modificar las opciones en `js/testimonials-loader.js` en la función `loadTestimonials()`:

```javascript
jQuery('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    // Agregar más opciones aquí
});
```

## Compatibilidad

### 📋 Dependencias Requeridas:
- jQuery 3.4.1+
- Bootstrap 4.4.1+
- Owl Carousel 2.x
- Font Awesome 5.10.0+

### 🌐 Navegadores Compatibles:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Internet Explorer 11+ (con polyfills)

## Uso Ejemplo

### Página de Demostración
Visitar `demo-testimonials.html` para ver:
- Carrusel principal en funcionamiento
- Testimonios limitados
- Funciones de filtrado
- Información técnica del sistema

### Implementación Básica
1. Copiar los archivos `data/testimonials.js` y `js/testimonials-loader.js`
2. Incluir scripts en la página HTML
3. Agregar contenedor con clase `testimonial-carousel`
4. El sistema se inicializa automáticamente al cargar la página

## Ventajas del Sistema

### ✅ Beneficios:
- **Dinámico**: Los testimonios se cargan automáticamente
- **Escalable**: Fácil agregar nuevos testimonios
- **Responsive**: Compatible con todos los dispositivos
- **Profesional**: Diseño elegante con sistema de estrellas
- **Internacional**: Testimonios de clientes globales
- **SEO Friendly**: Contenido indexable por buscadores
- **Mantenible**: Código organizado y documentado

### 🎯 Enfoque Empresarial:
- Testimonios específicos para exportación de follajes
- Clientes de mercados internacionales relevantes
- Enfoque en calidad, logística y servicio profesional
- Credibilidad con empresas reales del sector

## Soporte y Mantenimiento

Para agregar más testimonios o modificar el sistema, editar los archivos correspondientes y seguir la estructura existente. El sistema es autocontenido y no requiere base de datos externa.

---

**The Green Genie** - Sistema de Testimonios v1.0  
*Implementado para empresa exportadora de follajes tropicales*
