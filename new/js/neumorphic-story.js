/**
 * Neumorphic About Story Modal for The Green Genie
 * Beautiful presentation alternating between images and text
 */

(function() {
    'use strict';
    
    // Story data with images from the portada folder - dynamically translated
    function getStoryContent() {
        return {
            historia: {
                title: window.getTranslation ? window.getTranslation('story.historia.title') : 'Historia',
                content: window.getTranslation ? window.getTranslation('story.historia.content') : "The Green Genie nació en el municipio de Cachipay, Cundinamarca...",
                images: [
                    "img/about/portada/1.jpg",
                    "img/about/portada/17.jpg",
                    "img/about/portada/3.jpg",
                    "img/about/portada/4.jpg",
                    "img/about/portada/5.jpg"
                ]
            },
            acercaDe: {
                title: window.getTranslation ? window.getTranslation('story.acerca.title') : 'Acerca de Nosotros',
                content: window.getTranslation ? window.getTranslation('story.acerca.content') : "Somos THE GREEN GENIE, una empresa familiar...",
                images: [
                    "img/about/portada/6.jpg",
                    "img/about/portada/7.jpg",
                    "img/about/portada/9.jpg",
                    "img/about/portada/16.jpg"
                ]
            },
            valores: {
                title: window.getTranslation ? window.getTranslation('story.valores.title') : 'Nuestros Valores',
                values: [
                    {
                        icon: "fas fa-users",
                        title: window.getTranslation ? window.getTranslation('story.valores.unidad.title') : 'Unidad',
                        description: window.getTranslation ? window.getTranslation('story.valores.unidad.description') : 'Crecemos gracias a nuestro vínculo familiar...'
                    },
                    {
                        icon: "fas fa-handshake",
                        title: window.getTranslation ? window.getTranslation('story.valores.compromiso.title') : 'Compromiso',
                        description: window.getTranslation ? window.getTranslation('story.valores.compromiso.description') : 'Con la calidad, el cumplimiento...'
                    },
                    {
                        icon: "fas fa-dumbbell",
                        title: window.getTranslation ? window.getTranslation('story.valores.perseverancia.title') : 'Perseverancia',
                        description: window.getTranslation ? window.getTranslation('story.valores.perseverancia.description') : 'Más de 20 años de esfuerzo continuo...'
                    },
                    {
                        icon: "fas fa-heart",
                        title: window.getTranslation ? window.getTranslation('story.valores.pasion.title') : 'Pasión',
                        description: window.getTranslation ? window.getTranslation('story.valores.pasion.description') : 'Más que un negocio, GREEN GENIE es un proyecto...'
                    },
                    {
                        icon: "fas fa-lightbulb",
                        title: window.getTranslation ? window.getTranslation('story.valores.creatividad.title') : 'Creatividad',
                        description: window.getTranslation ? window.getTranslation('story.valores.creatividad.description') : 'La innovación es nuestra esencia...'
                    }
                ]
            }
        };
    }

    // Fallback images in case portada images are not found
    const fallbackImages = [
        "img/service-1.jpg",
        "img/service-2.jpg",
        "img/service-3.jpg",
        "img/service-4.jpg"
    ];

    /**
     * Opens the about story modal
     */
    function openAboutStoryModal(event) {
        if (event) event.preventDefault();
        
        console.log('[Story Modal] Opening about story modal...');
        
        const modal = document.getElementById('aboutStoryModal');
        const content = document.getElementById('storyContent');
        
        if (!modal || !content) {
            console.error('[Story Modal] Modal elements not found');
            return;
        }
        
        // Show loading state
        showStoryLoading(content);
        
        // Open modal with animation
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load story content after a brief delay
        setTimeout(() => {
            loadStoryContent(content);
        }, 300);
        
        // Add escape key listener
        document.addEventListener('keydown', handleStoryEscape);
    }

    /**
     * Closes the about story modal
     */
    function closeAboutStoryModal() {
        console.log('[Story Modal] Closing about story modal...');
        
        const modal = document.getElementById('aboutStoryModal');
        
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleStoryEscape);
        
        // Clear content after animation
        setTimeout(() => {
            const content = document.getElementById('storyContent');
            if (content) {
                content.innerHTML = '';
            }
        }, 400);
    }

    /**
     * Handles escape key press to close modal
     */
    function handleStoryEscape(event) {
        if (event.key === 'Escape') {
            closeAboutStoryModal();
        }
    }

    /**
     * Shows loading state in story modal
     */
    function showStoryLoading(container) {
        container.innerHTML = `
            <div class="story-loading" style="display: flex; justify-content: center; align-items: center; height: 200px; color: #16a34a; font-size: 1.2rem;">
                <i class="fas fa-spinner" style="animation: spin 1s linear infinite; margin-right: 10px;"></i>
                Cargando nuestra historia...
            </div>
        `;
    }

    /**
     * Loads all story content into the modal
     */
    function loadStoryContent(container) {
        try {
            const storyContent = getStoryContent(); // Get current translations
            container.innerHTML = '';
            
            let imageIndex = 0;
            
            // Create Historia sections - one for each paragraph
            const historiaParagraphs = storyContent.historia.content.split('\n\n');
            historiaParagraphs.forEach((paragraph, index) => {
                if (paragraph.trim()) {
                    const isImageLeft = index % 2 === 1; // Alterna: 1er párrafo imagen derecha, 2do izquierda, etc.
                    const imageUrl = storyContent.historia.images[index] || fallbackImages[imageIndex % fallbackImages.length];
                    
                    const section = createParagraphSection(
                        index === 0 ? storyContent.historia.title : '', // Solo título en el primer párrafo
                        paragraph,
                        imageUrl,
                        isImageLeft ? 'left' : 'right'
                    );
                    container.appendChild(section);
                    imageIndex++;
                }
            });
            
            // Create Acerca de sections - continúa la alternancia
            const acercaParagraphs = storyContent.acercaDe.content.split('\n\n');
            acercaParagraphs.forEach((paragraph, index) => {
                if (paragraph.trim()) {
                    const totalPreviousParagraphs = historiaParagraphs.length;
                    const currentIndex = totalPreviousParagraphs + index;
                    const isImageLeft = currentIndex % 2 === 1;
                    const imageUrl = storyContent.acercaDe.images[index] || fallbackImages[imageIndex % fallbackImages.length];
                    
                    const section = createParagraphSection(
                        index === 0 ? storyContent.acercaDe.title : '', // Solo título en el primer párrafo
                        paragraph,
                        imageUrl,
                        isImageLeft ? 'left' : 'right'
                    );
                    container.appendChild(section);
                    imageIndex++;
                }
            });
            
            // Create Values section
            const valuesSection = createValuesSection();
            container.appendChild(valuesSection);
            
            // Initialize VanillaTilt if available
            if (window.VanillaTilt) {
                const frames = container.querySelectorAll('.story-image-frame');
                VanillaTilt.init(frames);
            }
            
            console.log('[Story Modal] Story content loaded successfully');
            
        } catch (error) {
            console.error('[Story Modal] Error loading story content:', error);
            showStoryError(container);
        }
    }

    /**
     * Creates a story section with a single paragraph and image
     */
    function createParagraphSection(title, content, imageUrl, imagePosition) {
        const section = document.createElement('div');
        section.className = `story-section with-image ${imagePosition === 'left' ? 'image-left' : ''}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'story-content';
        
        // Add title only if provided
        if (title) {
            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            contentDiv.appendChild(titleElement);
        }
        
        // Add single paragraph
        const p = document.createElement('p');
        p.textContent = content.trim();
        contentDiv.appendChild(p);
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'story-image-container';
        
        // Frame wrapper
        const frame = document.createElement('div');
        frame.className = 'story-image-frame';
        frame.setAttribute('data-tilt', '');
        frame.setAttribute('data-tilt-max', '8');
        frame.setAttribute('data-tilt-speed', '600');
        frame.setAttribute('data-tilt-glare', 'true');
        frame.setAttribute('data-tilt-max-glare', '0.25');
        
        const image = document.createElement('img');
        image.className = 'story-image';
        image.src = imageUrl;
        image.alt = title || 'Green Genie';
        image.loading = 'lazy';
        
        // Add error handling with fallback
        const fallbackUrl = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
        image.onerror = function() {
            this.src = fallbackUrl;
        };
        
        frame.appendChild(image);
        imageContainer.appendChild(frame);
        
        // Append in correct order based on position
        if (imagePosition === 'left') {
            section.appendChild(imageContainer);
            section.appendChild(contentDiv);
        } else {
            section.appendChild(contentDiv);
            section.appendChild(imageContainer);
        }
        
        // Initialize tilt later on loadStoryContent
        return section;
    }

    /**
     * Creates a story section with text and image (legacy function kept for compatibility)
     */
    function createStorySection(title, content, imageUrl, imagePosition) {
        const section = document.createElement('div');
        section.className = `story-section with-image ${imagePosition === 'left' ? 'image-left' : ''}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'story-content';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        contentDiv.appendChild(titleElement);
        
        // Split content into paragraphs
        const paragraphs = content.split('\n\n');
        paragraphs.forEach(paragraph => {
            if (paragraph.trim()) {
                const p = document.createElement('p');
                p.textContent = paragraph.trim();
                contentDiv.appendChild(p);
            }
        });
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'story-image-container';
        
        const image = document.createElement('img');
        image.className = 'story-image';
        image.src = imageUrl;
        image.alt = title;
        image.loading = 'lazy';
        
        // Add error handling with fallback
        const fallbackUrl = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
        image.onerror = function() {
            this.src = fallbackUrl;
        };
        
        imageContainer.appendChild(image);
        
        // Append in correct order based on position
        if (imagePosition === 'left') {
            section.appendChild(imageContainer);
            section.appendChild(contentDiv);
        } else {
            section.appendChild(contentDiv);
            section.appendChild(imageContainer);
        }
        
        return section;
    }

    /**
     * Creates the values section with cards
     */
    function createValuesSection() {
        const storyContent = getStoryContent(); // Get current translations
        const section = document.createElement('div');
        section.className = 'story-section';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'story-content';
        
        const title = document.createElement('h2');
        title.textContent = storyContent.valores.title;
        contentDiv.appendChild(title);
        
        const valuesGrid = document.createElement('div');
        valuesGrid.className = 'values-grid';
        
        storyContent.valores.values.forEach((value, index) => {
            const valueCard = createValueCard(value, index);
            valuesGrid.appendChild(valueCard);
        });
        
        contentDiv.appendChild(valuesGrid);
        section.appendChild(contentDiv);
        
        return section;
    }

    /**
     * Creates a single value card
     */
    function createValueCard(value, index) {
        const card = document.createElement('div');
        card.className = 'value-card';
        card.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        
        card.innerHTML = `
            <div class="value-icon">
                <i class="${value.icon}"></i>
            </div>
            <h3 class="value-title">${value.title}</h3>
            <p class="value-description">${value.description}</p>
        `;
        
        return card;
    }

    /**
     * Shows error state in story modal
     */
    function showStoryError(container) {
        container.innerHTML = `
            <div class="story-loading" style="display: flex; justify-content: center; align-items: center; height: 200px; color: #ef4444; font-size: 1.2rem;">
                <i class="fas fa-exclamation-triangle" style="margin-right: 10px;"></i>
                Error al cargar la historia. Por favor, intenta nuevamente.
            </div>
        `;
    }

    // Export functions to global scope immediately
    window.openAboutStoryModal = openAboutStoryModal;
    window.closeAboutStoryModal = closeAboutStoryModal;
    
    console.log('[Story Modal] Functions exported to window object');
    console.log('[Story Modal] openAboutStoryModal available:', typeof window.openAboutStoryModal);

})();
