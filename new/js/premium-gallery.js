/**
 * Premium Gallery Modal for The Green Genie
 * Displays product gallery with luxury design
 */

// Gallery data - products with images and descriptions (dynamically translated)
function getGalleryProducts() {
    return [
        {
            id: 1,
            name: window.getTranslation ? window.getTranslation('gallery.product.1.name') : "Monstera Deliciosa",
            image: "img/gallery/BOUQUETTE1.png",
            description: window.getTranslation ? window.getTranslation('gallery.product.1.description') : "Planta tropical de interior con hojas perforadas características. Perfecta para decoración moderna."
        },
        {
            id: 2,
            name: window.getTranslation ? window.getTranslation('gallery.product.2.name') : "Bouquet Premium",
            image: "img/gallery/BOUQUETTE2.png", 
            description: window.getTranslation ? window.getTranslation('gallery.product.2.description') : "Arreglo floral exclusivo con follajes seleccionados. Ideal para eventos especiales."
        },
        {
            id: 3,
            name: window.getTranslation ? window.getTranslation('gallery.product.3.name') : "Colección Tropical",
            image: "img/gallery/BOUQUETTE3.png",
            description: window.getTranslation ? window.getTranslation('gallery.product.3.description') : "Conjunto de plantas tropicales de alta calidad para espacios exteriores e interiores."
        },
        {
            id: 4,
            name: window.getTranslation ? window.getTranslation('gallery.product.4.name') : "Producto Premium I",
            image: "img/gallery/PRODUCT1.png",
            description: window.getTranslation ? window.getTranslation('gallery.product.4.description') : "Selección premium de follajes exóticos. Cultivados con los más altos estándares de calidad."
        },
        {
            id: 5,
            name: window.getTranslation ? window.getTranslation('gallery.product.5.name') : "Producto Premium II", 
            image: "img/gallery/PRODUCT2.png",
            description: window.getTranslation ? window.getTranslation('gallery.product.5.description') : "Variedad especializada para proyectos comerciales y residenciales de lujo."
        },
        {
            id: 6,
            name: window.getTranslation ? window.getTranslation('gallery.product.6.name') : "Producto Premium III",
            image: "img/gallery/PRODUCT3.png",
            description: window.getTranslation ? window.getTranslation('gallery.product.6.description') : "Plantas ornamentales únicas, perfectas para crear ambientes sofisticados."
        },
        {
            id: 7,
            name: window.getTranslation ? window.getTranslation('gallery.product.7.name') : "Cultivo Especializado",
            image: "img/products/DSC00598.JPG",
            description: window.getTranslation ? window.getTranslation('gallery.product.7.description') : "Proceso de cultivo controlado que garantiza la máxima calidad y frescura."
        },
        {
            id: 8,
            name: window.getTranslation ? window.getTranslation('gallery.product.8.name') : "Selección Exportación",
            image: "img/products/DSC00632.JPG", 
            description: window.getTranslation ? window.getTranslation('gallery.product.8.description') : "Productos preparados especialmente para exportación internacional."
        },
        {
            id: 9,
            name: window.getTranslation ? window.getTranslation('gallery.product.9.name') : "Calidad Premium",
            image: "img/products/DSC01301.JPG",
            description: window.getTranslation ? window.getTranslation('gallery.product.9.description') : "Estándares internacionales de calidad en cada uno de nuestros productos."
        }
    ];
}

// Fallback images in case gallery images are not found
const fallbackImages = [
    "img/service-1.jpg",
    "img/service-2.jpg", 
    "img/service-3.jpg",
    "img/service-4.jpg",
    "img/service-5.jpg",
    "img/service-6.jpg"
];

/**
 * Opens the premium gallery modal
 * @param {Event} event - The click event
 */
function openProductGallery(event) {
    event.preventDefault();
    
    const modal = document.getElementById('productGalleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!modal || !galleryGrid) {
        console.error('[Gallery] Modal elements not found');
        return;
    }
    
    // Show loading state
    showGalleryLoading(galleryGrid);
    
    // Open modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    
    // Load gallery items after a brief delay for smooth animation
    setTimeout(() => {
        loadGalleryItems(galleryGrid);
    }, 300);
    
    // Add escape key listener
    document.addEventListener('keydown', handleGalleryEscape);
}

/**
 * Closes the premium gallery modal
 */
function closeProductGallery() {
    const modal = document.getElementById('productGalleryModal');
    
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleGalleryEscape);
    
    // Clear gallery content after animation
    setTimeout(() => {
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid) {
            galleryGrid.innerHTML = '';
        }
    }, 400);
}

/**
 * Handles escape key press to close gallery
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleGalleryEscape(event) {
    if (event.key === 'Escape') {
        closeProductGallery();
    }
}

/**
 * Shows loading state in gallery
 * @param {HTMLElement} container - The gallery container
 */
function showGalleryLoading(container) {
    container.innerHTML = `
        <div class="gallery-loading">
            <i class="fas fa-spinner"></i>
            Cargando galería premium...
        </div>
    `;
}

/**
 * Loads gallery items into the grid
 * @param {HTMLElement} container - The gallery grid container
 */
function loadGalleryItems(container) {
    try {
        container.innerHTML = '';
        
        const galleryProducts = getGalleryProducts(); // Get current translations
        
        galleryProducts.forEach((product, index) => {
            const galleryItem = createGalleryItem(product, index);
            container.appendChild(galleryItem);
        });
        
        console.log(`[Gallery] Loaded ${galleryProducts.length} gallery items successfully`);
        
    } catch (error) {
        console.error('[Gallery] Error loading gallery items:', error);
        showGalleryError(container);
    }
}

/**
 * Creates a single gallery item element
 * @param {Object} product - The product data
 * @param {number} index - The product index
 * @returns {HTMLElement} The gallery item element
 */
function createGalleryItem(product, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${0.1 + (index * 0.1)}s`;
    
    // Create image with error handling
    const imageUrl = product.image;
    const fallbackUrl = fallbackImages[index % fallbackImages.length];
    
    item.innerHTML = `
        <img 
            class="gallery-item-image" 
            src="${imageUrl}" 
            alt="${product.name}"
            onerror="this.src='${fallbackUrl}'"
            loading="lazy"
        >
        <div class="gallery-item-content">
            <h3 class="gallery-item-title">${product.name}</h3>
            <p class="gallery-item-description">${product.description}</p>
        </div>
    `;
    
    // Add click handler for potential future expansion (product details)
    item.addEventListener('click', () => {
        console.log(`[Gallery] Clicked on product: ${product.name}`);
        // Future: Open product detail modal
    });
    
    return item;
}

/**
 * Shows error state in gallery
 * @param {HTMLElement} container - The gallery container
 */
function showGalleryError(container) {
    container.innerHTML = `
        <div class="gallery-loading" style="color: #e74c3c;">
            <i class="fas fa-exclamation-triangle"></i>
            Error al cargar la galería. Por favor, intenta nuevamente.
        </div>
    `;
}

/**
 * Initializes gallery functionality
 */
function initializeGallery() {
    console.log('[Gallery] Premium gallery system initialized');
    
    // Preload some images for better performance
    preloadGalleryImages();
}

/**
 * Preloads gallery images for better performance
 */
function preloadGalleryImages() {
    const galleryProducts = getGalleryProducts(); // Get current translations
    const imagesToPreload = galleryProducts.slice(0, 3); // Preload first 3 images
    
    imagesToPreload.forEach(product => {
        const img = new Image();
        img.src = product.image;
    });
    
    console.log('[Gallery] Preloaded initial gallery images');
}

// Initialize gallery when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGallery);
} else {
    initializeGallery();
}

// Export functions for global access
window.openProductGallery = openProductGallery;
window.closeProductGallery = closeProductGallery;
