# Sección Contáctanos con Efecto Parallax - The Green Genie

## Descripción General

Sección de contacto de lujo con efecto parallax implementada para la empresa exportadora de follajes tropicales "The Green Genie". La sección presenta al equipo de contacto con un diseño elegante y moderno que incluye efectos visuales avanzados.

## Archivos del Sistema

### 📁 Estilos
- **`css/contact-parallax.css`** - Estilos específicos para la sección parallax
- **`img/contactanos-bg.jpg`** - Imagen de fondo con follajes tropicales

### 📁 Scripts
- **`js/contact-parallax.js`** - JavaScript para efectos interactivos y parallax

### 📁 Páginas Implementadas
- **`index.html`** - Página principal con la nueva sección integrada
- **`demo-contact-parallax.html`** - Página de demostración standalone

## Características de Diseño

### 🎨 Efectos Visuales
- **Efecto Parallax**: Imagen de fondo fija que permanece inmóvil durante el scroll
- **Glassmorphism**: Cards translúcidos con efecto blur
- **Gradiente de Overlay**: Superposición verde elegante con transparencia
- **Animaciones de Entrada**: Los elementos aparecen suavemente al scroll
- **Efectos Hover**: Transformaciones y brillos al pasar el mouse
- **Título Animado**: Efecto glow pulsante en el título principal

### 👥 Equipo de Contacto
1. **Efraín Rodriguez** - CEO
   - WhatsApp: +57 3209769753
   - Skype: EFRA-TGG
   - Email: greengenieceo@hotmail.com

2. **Cristian Rodriguez** - Sales Manager  
   - WhatsApp: +57 3222180626
   - Skype: CristianR-TGG
   - Email: Salesmanagerthegreengenie@hotmail.com

3. **Jazmin Guevara** - Seller
   - WhatsApp: +57 3228829871
   - Skype: SalesTGG-Jazz
   - Email: SalesTGG@hotmail.com

4. **Liliana Montoya** - Seller
   - WhatsApp: +57 3154842948
   - Skype: Liliana M-Comercial TGG
   - Email: comercialthegreengenie@hotmail.com

## Características Técnicas

### 🎯 Efecto Parallax
```css
.contact-parallax-bg {
    position: fixed;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    will-change: transform;
}
```

### 🪟 Glassmorphism
```css
.contact-member {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.2);
}
```

### ✨ Animaciones
- **Intersection Observer** para animaciones al scroll
- **CSS Transitions** suaves en hover
- **Transform animations** para movimientos
- **Keyframe animations** para efectos continuos

## Integración en Páginas

### 1. Incluir Archivos CSS
```html
<link href="css/contact-parallax.css" rel="stylesheet">
```

### 2. Incluir JavaScript
```html
<script src="js/contact-parallax.js"></script>
```

### 3. HTML de la Sección
```html
<section class="contact-parallax-section">
    <div class="contact-parallax-bg"></div>
    <div class="contact-parallax-overlay"></div>
    <div class="container contact-content">
        <!-- Contenido de la sección -->
    </div>
</section>
```

## Personalización

### Cambiar Imagen de Fondo
1. Reemplazar `img/contactanos-bg.jpg` con nueva imagen
2. Asegurar que la imagen sea de alta resolución (mínimo 1920x1080)
3. Optimizar el archivo para web (formato JPG, calidad 80-85%)

### Modificar Colores del Overlay
```css
.contact-parallax-overlay {
    background: linear-gradient(135deg, 
        rgba(TU_COLOR_1, 0.90) 0%, 
        rgba(TU_COLOR_2, 0.85) 50%, 
        rgba(TU_COLOR_3, 0.90) 100%);
}
```

### Agregar/Editar Miembros del Equipo
```html
<div class="contact-member">
    <div class="contact-member-photo">
        <img src="img/team/nuevo-miembro.jpg" alt="Nombre">
    </div>
    <h3 class="contact-member-name">Nombre Completo</h3>
    <p class="contact-member-role">CARGO</p>
    <p class="contact-member-company">THE GREEN GENIE</p>
    <div class="contact-social-buttons">
        <!-- Botones de contacto -->
    </div>
</div>
```

## Responsive Design

### 📱 Adaptación Móvil
- **Parallax desactivado** en dispositivos móviles para mejor rendimiento
- **Grid adaptativo** que cambia de 4 columnas a 1 columna
- **Tipografía escalable** según tamaño de pantalla
- **Espaciados optimizados** para touch interfaces

### 📏 Breakpoints
- **1200px+**: 4 columnas en grid
- **768px-1199px**: 2 columnas en grid  
- **767px-**: 1 columna en grid
- **480px-**: Ajustes adicionales de tamaño

## Compatibilidad

### 🌐 Navegadores Soportados
- **Chrome 60+** ✅
- **Firefox 60+** ✅  
- **Safari 12+** ✅
- **Edge 79+** ✅
- **Internet Explorer 11** ⚠️ (con limitaciones en parallax)

### 📋 Dependencias
- **Font Awesome 5.10.0+** - Para iconos sociales
- **Google Fonts (Poppins)** - Tipografía principal
- **CSS Grid** - Layout responsivo
- **Intersection Observer API** - Animaciones al scroll

## Rendimiento y Optimización

### ⚡ Optimizaciones Implementadas
- **Transform3d** para aceleración por hardware
- **will-change** en elementos animados
- **Throttling** en eventos scroll
- **Lazy loading** de animaciones
- **Reducción de reflows** con transform en lugar de top/left

### 📊 Métricas de Rendimiento
- **First Paint**: Optimizado con CSS crítico inline
- **Largest Contentful Paint**: Imagen de fondo optimizada
- **Cumulative Layout Shift**: Dimensiones fijas en elementos

## Accesibilidad

### ♿ Características de Accesibilidad
- **Prefers-reduced-motion** - Respeta preferencias del usuario
- **Alt text** en todas las imágenes
- **Contraste** adecuado en textos
- **Focus indicators** visibles en elementos interactivos
- **Semantic HTML** para screen readers

## Uso y Demostración

### 🎯 Ver en Acción
1. **Página principal**: `index.html` - Integrada en el sitio completo
2. **Demo standalone**: `demo-contact-parallax.html` - Solo la sección

### 🔧 Configuración Requerida
1. Colocar las imágenes del equipo en `img/team/`
2. Verificar que la imagen de fondo esté en `img/contactanos-bg.jpg`
3. Incluir Font Awesome para los iconos sociales
4. Probar en diferentes dispositivos y navegadores

## Ventajas de la Implementación

### ✅ Beneficios de UX/UI
- **Impacto Visual**: Diseño de lujo que transmite profesionalismo
- **Interactividad**: Efectos hover que mejoran engagement
- **Accesibilidad Directa**: Contacto inmediato via WhatsApp, Skype y Email
- **Responsive**: Funciona perfectamente en todos los dispositivos
- **Performance**: Optimizado para carga rápida

### 🎯 Beneficios de Negocio
- **Credibilidad**: Presenta al equipo de forma profesional
- **Conversión**: Facilita el contacto directo con prospects
- **Branding**: Refuerza la identidad visual de The Green Genie
- **Diferenciación**: Se destaca de la competencia con diseño único

## Mantenimiento

### 🔄 Actualizaciones Regulares
- **Imágenes del equipo**: Mantener fotos actualizadas
- **Información de contacto**: Verificar números y emails
- **Imagen de fondo**: Cambiar estacionalmente si es necesario
- **Compatibilidad**: Probar en nuevas versiones de navegadores

---

**The Green Genie** - Sección Contáctanos Parallax v1.0  
*Diseño de lujo para empresa exportadora de follajes tropicales*
