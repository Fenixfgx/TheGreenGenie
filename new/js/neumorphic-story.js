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
                // Images organized by paragraph for easy control
                paragraphImages: [
                    // Paragraph 1 images
                    [
                        "img/about/portada/1.jpg",
                        "img/about/portada/2.jpg",
                        "img/about/portada/3.jpg"
                    ],
                    // Paragraph 2 images
                    [
                        "img/about/portada/4.jpg",
                        "img/about/portada/5.jpg"
                    ],
                    // Add more arrays for additional paragraphs
                ]
            },
            acercaDe: {
                title: window.getTranslation ? window.getTranslation('story.acerca.title') : 'Acerca de Nosotros',
                content: window.getTranslation ? window.getTranslation('story.acerca.content') : "Somos THE GREEN GENIE, una empresa familiar...",
                // Images organized by paragraph for easy control
                paragraphImages: [
                    // Paragraph 1 images
                    [
                        "img/about/portada/6.jpg",
                        "img/about/portada/7.jpg",
                        "img/about/portada/9.jpg"
                    ],
                    // Paragraph 2 images
                    [
                        "img/about/portada/16.jpg"
                    ],
                    // Add more arrays for additional paragraphs
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

    // Fallback images from the portada folder only
    const fallbackImages = [
        "img/about/portada/1.jpg",
        "img/about/portada/2.jpg",
        "img/about/portada/3.jpg",
        "img/about/portada/4.jpg"
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
            const storyContent = getStoryContent();
            container.innerHTML = '';

            const slidersToInit = [];
            const getFallbackImage = createFallbackProvider();

            const historiaSection = buildStorySection(
                {
                    title: storyContent.historia.title,
                    content: storyContent.historia.content,
                    paragraphImages: storyContent.historia.paragraphImages
                },
                storyContent.historia.paragraphImages ? storyContent.historia.paragraphImages.flat() : [],
                'right',
                getFallbackImage,
                slidersToInit
            );

            if (historiaSection) {
                container.appendChild(historiaSection);
            }

            const acercaSection = buildStorySection(
                {
                    title: storyContent.acercaDe.title,
                    content: storyContent.acercaDe.content,
                    paragraphImages: storyContent.acercaDe.paragraphImages
                },
                storyContent.acercaDe.paragraphImages ? storyContent.acercaDe.paragraphImages.flat() : [],
                historiaSection ? 'left' : 'right',
                getFallbackImage,
                slidersToInit
            );

            if (acercaSection) {
                container.appendChild(acercaSection);
            }

            // Removed values section as requested

            initializeStorySliders(slidersToInit);

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

    function buildStorySection(sectionData, imageUrls, imagePosition, getFallbackImage, slidersToInit) {
        if (!sectionData || !sectionData.content) {
            return null;
        }

        const paragraphs = splitIntoParagraphs(sectionData.content);
        if (!paragraphs.length) {
            return null;
        }

        const section = document.createElement('div');
        section.className = `story-section with-paragraph-sliders ${imagePosition === 'left' ? 'image-left' : ''}`;

        if (sectionData.title) {
            const titleElement = document.createElement('h2');
            titleElement.textContent = sectionData.title;
            section.appendChild(titleElement);
        }

        // Use paragraphImages if available, otherwise fall back to old logic
        const paragraphImages = sectionData.paragraphImages || [];

        paragraphs.forEach((paragraph, index) => {
            const paragraphContainer = document.createElement('div');
            paragraphContainer.className = 'story-paragraph-container';

            // Alternate image position for each paragraph
            const isImageLeft = index % 2 === 1;

            const contentDiv = document.createElement('div');
            contentDiv.className = 'story-content';

            const p = document.createElement('p');
            p.textContent = paragraph;
            contentDiv.appendChild(p);

            const imageContainer = document.createElement('div');
            imageContainer.className = 'story-image-container';

            // Get images for this paragraph - use specified images or fall back to distribution
            let paragraphImagesForSlider = [];
            if (paragraphImages[index] && Array.isArray(paragraphImages[index])) {
                paragraphImagesForSlider = paragraphImages[index];
            } else {
                // Fallback to old distribution logic if paragraphImages not specified
                const sanitizedImages = Array.isArray(imageUrls) ? imageUrls.filter(Boolean) : [];
                const imagesPerParagraph = Math.max(1, Math.ceil(sanitizedImages.length / paragraphs.length));
                const startIndex = index * imagesPerParagraph;
                const endIndex = Math.min(startIndex + imagesPerParagraph, sanitizedImages.length);
                paragraphImagesForSlider = sanitizedImages.slice(startIndex, endIndex);
            }

            // Ensure at least 3 unique images per slider
            const usedImages = new Set(paragraphImagesForSlider);
            while (paragraphImagesForSlider.length < 3) {
                const fallbackImage = getFallbackImage();
                if (!usedImages.has(fallbackImage)) {
                    paragraphImagesForSlider.push(fallbackImage);
                    usedImages.add(fallbackImage);
                } else {
                    // If all fallback images are used, repeat the last image
                    paragraphImagesForSlider.push(paragraphImagesForSlider[paragraphImagesForSlider.length - 1]);
                    break;
                }
            }

            const { sliderElement, sliderId } = createImageSlider(paragraphImagesForSlider, sectionData.title, getFallbackImage);
            imageContainer.appendChild(sliderElement);
            slidersToInit.push({ sliderId, sliderElement });

            if (isImageLeft) {
                paragraphContainer.appendChild(imageContainer);
                paragraphContainer.appendChild(contentDiv);
                paragraphContainer.classList.add('image-left');
            } else {
                paragraphContainer.appendChild(contentDiv);
                paragraphContainer.appendChild(imageContainer);
            }

            section.appendChild(paragraphContainer);
        });

        return section;
    }

    function splitIntoParagraphs(content) {
        return content
            .split('\n\n')
            .map(paragraph => paragraph.trim())
            .filter(Boolean);
    }

    function createFallbackProvider() {
        const availableImages = [...fallbackImages]; // Copy the array
        let currentIndex = 0;
        
        return () => {
            if (availableImages.length === 0) {
                // If all images have been used, reset the pool
                availableImages.push(...fallbackImages);
                currentIndex = 0;
            }
            
            // Return the next available image and remove it from the pool
            const image = availableImages.splice(currentIndex % availableImages.length, 1)[0];
            return image;
        };
    }

    function createImageSlider(imageUrls = [], title, getFallbackImage) {
        const sliderId = `story-slider-${Math.random().toString(36).slice(2, 11)}`;
        const sliderElement = document.createElement('div');
        sliderElement.className = 'story-image-slider swiper';
        sliderElement.dataset.sliderId = sliderId;

        const wrapper = document.createElement('div');
        wrapper.className = 'swiper-wrapper';
        sliderElement.appendChild(wrapper);

        const sanitizedImages = Array.isArray(imageUrls) ? imageUrls.filter(Boolean) : [];
        const finalImages = [...sanitizedImages];
        const usedImages = new Set(finalImages); // Track used images to avoid duplicates

        // Add unique fallback images if needed
        while (finalImages.length < 3) {
            const fallbackImage = getFallbackImage();
            if (!usedImages.has(fallbackImage)) {
                finalImages.push(fallbackImage);
                usedImages.add(fallbackImage);
            }
            // If we've exhausted all fallback images and still need more, break to avoid infinite loop
            if (usedImages.size >= fallbackImages.length && finalImages.length < 3) {
                break;
            }
        }

        // If still not enough unique images, use what's available (will have duplicates as last resort)
        while (finalImages.length < 3) {
            finalImages.push(finalImages[finalImages.length - 1]);
        }

        finalImages.forEach(imageUrl => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            const frame = createImageFrame(imageUrl, title, getFallbackImage);
            slide.appendChild(frame);

            wrapper.appendChild(slide);
        });

        const pagination = document.createElement('div');
        pagination.className = 'story-slider-pagination';
        pagination.dataset.sliderId = sliderId;
        sliderElement.appendChild(pagination);

        const prevButton = document.createElement('button');
        prevButton.className = 'story-slider-nav story-slider-prev';
        prevButton.type = 'button';
        prevButton.dataset.sliderId = sliderId;
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';

        const nextButton = document.createElement('button');
        nextButton.className = 'story-slider-nav story-slider-next';
        nextButton.type = 'button';
        nextButton.dataset.sliderId = sliderId;
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';

        sliderElement.appendChild(prevButton);
        sliderElement.appendChild(nextButton);

        return { sliderElement, sliderId };
    }

    function createImageFrame(imageUrl, title, getFallbackImage) {
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
        image.alt = title || 'The Green Genie';
        image.loading = 'lazy';

        image.onerror = function handleImageError() {
            const fallbackUrl = getFallbackImage();
            if (this.src !== fallbackUrl) {
                this.src = fallbackUrl;
            }
        };

        frame.appendChild(image);
        return frame;
    }

    function initializeStorySliders(slidersToInit) {
        if (!Array.isArray(slidersToInit) || !slidersToInit.length) {
            return;
        }

        if (typeof Swiper === 'undefined') {
            console.warn('[Story Modal] Swiper library not found, skipping slider initialization');
            return;
        }

        slidersToInit.forEach(({ sliderElement, sliderId }) => {
            if (!sliderElement) {
                return;
            }

            const prevButton = sliderElement.querySelector(`.story-slider-prev[data-slider-id="${sliderId}"]`);
            const nextButton = sliderElement.querySelector(`.story-slider-next[data-slider-id="${sliderId}"]`);
            const pagination = sliderElement.querySelector(`.story-slider-pagination[data-slider-id="${sliderId}"]`);
            const slideCount = sliderElement.querySelectorAll('.swiper-slide').length;

            new Swiper(sliderElement, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: slideCount > 1,
                autoHeight: true,
                navigation: {
                    prevEl: prevButton,
                    nextEl: nextButton
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                    bulletClass: 'story-slider-bullet',
                    bulletActiveClass: 'story-slider-bullet-active'
                },
                speed: 600
            });
        });
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
