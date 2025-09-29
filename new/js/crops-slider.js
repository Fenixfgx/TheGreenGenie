/**
 * Crops Slider Manager for The Green Genie
 * Handles dynamic loading and language switching for the crops section slider
 */

(function() {
    'use strict';

    // Helper function to get current language
    function getCurrentLanguage() {
        return window.isEnglish ? 'en' : 'es';
    }

    // Crops slider functionality
    function initializeCropsSlider() {
        console.log('[Crops Slider] Starting initialization...');
        const slider = document.getElementById('slider');
        if (!slider) {
            console.warn('[Crops Slider] Slider element not found');
            return;
        }

        // Load crops data
        loadCropsData();
    }

    // Load crops data and render slider
    function loadCropsData() {
        try {
            // Check if data is available
            if (!window.CROPS_DATA || !Array.isArray(window.CROPS_DATA)) {
                console.warn('[Crops Slider] Crops data not available, using fallback');
                loadFallbackCrops();
                return;
            }

            renderCropsSlider(window.CROPS_DATA);
            console.log('[Crops Slider] Successfully loaded crops data');

        } catch (error) {
            console.error('[Crops Slider] Error loading crops data:', error);
            loadFallbackCrops();
        }
    }

    // Render crops slider with data
    function renderCropsSlider(cropsData) {
        const sliderContent = document.getElementById('slider-content');
        if (!sliderContent) return;

        // Clear existing content
        sliderContent.innerHTML = '';

        // Create images container
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'slider__images';

        // Create text container
        const textContainer = document.createElement('div');
        textContainer.className = 'slider__text';

        // Render each crop
        cropsData.forEach((crop, index) => {
            // Create image item
            const imageItem = document.createElement('div');
            imageItem.className = `slider__images-item ${index === 0 ? 'slider__images-item--active' : ''}`;
            imageItem.setAttribute('data-id', crop.id);
            imageItem.innerHTML = `<img src="${crop.image}" alt="${getCurrentLanguage() === 'es' ? crop.title.es : crop.title.en}">`;
            imagesContainer.appendChild(imageItem);

            // Create text item
            const textItem = document.createElement('div');
            textItem.className = `slider__text-item ${index === 0 ? 'slider__text-item--active' : ''}`;
            textItem.setAttribute('data-id', crop.id);
            textItem.innerHTML = `
                <div class="slider__text-item-head">
                    <h3 data-i18n="crops.slider.${crop.id}.title">${getCurrentLanguage() === 'es' ? crop.title.es : crop.title.en}</h3>
                </div>
                <div class="slider__text-item-info">
                    <p data-i18n="crops.slider.${crop.id}.description">"${getCurrentLanguage() === 'es' ? crop.description.es : crop.description.en}"</p>
                </div>
            `;
            textContainer.appendChild(textItem);
        });

        // Add containers to slider content
        sliderContent.appendChild(imagesContainer);
        sliderContent.appendChild(textContainer);

        // Update navigation dots
        updateNavigationDots(cropsData.length);

        // Initialize NC Slider after content is loaded
        initializeNCSlider();

        console.log('[Crops Slider] Rendered', cropsData.length, 'crops with infinite loop enabled');
    }

    // Update navigation dots based on number of crops
    function updateNavigationDots(count) {
        const dotsContainer = document.getElementById('slider-dots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';

        for (let i = 1; i <= count; i++) {
            const dot = document.createElement('div');
            dot.className = `slider__nav-dot ${i === 1 ? 'slider__nav-dot--active' : ''}`;
            dot.setAttribute('data-id', i);
            dotsContainer.appendChild(dot);
        }
    }

    // Fallback crops data in case of loading error
    function loadFallbackCrops() {
        const fallbackCrops = [
            {
                id: 1,
                image: "https://www.theGreenGenie.com.co/images/sl.jpeg",
                title: { en: "Arboreal Serenity", es: "Serenidad Arbórea" },
                description: { en: "The majesty of fully-grown eucalyptus.", es: "La majestuosidad de los eucaliptos completamente crecidos." }
            },
            {
                id: 2,
                image: "https://www.theGreenGenie.com.co/images/DSC01420.jpg",
                title: { en: "Immersed in Nature", es: "Inmerso en la Naturaleza" },
                description: { en: "Immersed in a sea of leaves.", es: "Inmerso en un mar de hojas." }
            },
            {
                id: 3,
                image: "https://www.theGreenGenie.com.co/images/DSC01441.jpg",
                title: { en: "Cultivating Abundance", es: "Cultivando Abundancia" },
                description: { en: "Dedication and care in the greenhouse.", es: "Dedicación y cuidado en el invernadero." }
            }
        ];

        renderCropsSlider(fallbackCrops);
        console.log('[Crops Slider] Using fallback crops data');
    }

    // Update crops slider when language changes
    function updateCropsLanguage() {
        if (!window.CROPS_DATA) return;

        const currentLang = getCurrentLanguage();

        // Update all crop titles and descriptions
        window.CROPS_DATA.forEach(crop => {
            const titleElement = document.querySelector(`[data-i18n="crops.slider.${crop.id}.title"]`);
            const descElement = document.querySelector(`[data-i18n="crops.slider.${crop.id}.description"]`);

            if (titleElement) {
                titleElement.textContent = crop.title[currentLang];
            }
            if (descElement) {
                descElement.textContent = `"${crop.description[currentLang]}"`;
            }
        });

        // Update image alt attributes
        const images = document.querySelectorAll('.slider__images-item img');
        images.forEach((img, index) => {
            if (window.CROPS_DATA[index]) {
                img.alt = window.CROPS_DATA[index].title[currentLang];
            }
        });

        console.log('[Crops Slider] Language updated to:', currentLang);
    }

    // Initialize NC Slider after dynamic content loading
    function initializeNCSlider() {
        try {
            console.log('[Crops Slider] Initializing NC Slider...');

            // Check if Slider class is available
            if (typeof Slider === 'undefined') {
                console.error('[Crops Slider] Slider class not found. Make sure NC/script.js is loaded.');
                return;
            }

            // Destroy existing slider instance if it exists
            if (window.ncSliderInstance) {
                console.log('[Crops Slider] Destroying existing slider instance');
                // Stop any running timers
                if (window.ncSliderTimer) {
                    clearTimeout(window.ncSliderTimer);
                    window.ncSliderTimer = null;
                }
                // Remove event listeners if possible
                const sliderEl = document.getElementById('slider');
                if (sliderEl) {
                    sliderEl.removeEventListener('mousemove', window.stopAutoSlide);
                    sliderEl.removeEventListener('touchstart', window.stopAutoSlide);
                }
                window.ncSliderInstance = null;
            }

            // Small delay to ensure DOM is updated
            setTimeout(() => {
                const sliderEl = document.getElementById('slider');
                if (!sliderEl) {
                    console.warn('[Crops Slider] Slider element not found for initialization');
                    return;
                }

                console.log('[Crops Slider] Creating new slider instance');
                // Create new slider instance
                window.ncSliderInstance = new Slider(sliderEl);

                console.log('[Crops Slider] NC Slider initialized successfully');
                // Set up auto-slide with infinite loop
                setupInfiniteLoop();

            }, 100);

        } catch (error) {
            console.error('[Crops Slider] Error initializing NC Slider:', error);
        }
    }

    // Set up infinite loop auto-slide functionality
    function setupInfiniteLoop() {
        // Clear any existing timer
        if (window.ncSliderTimer) {
            clearTimeout(window.ncSliderTimer);
        }

        function autoSlide() {
            if (window.ncSliderInstance && !window.ncSliderInstance.inTransit) {
                window.ncSliderInstance.next();
            }

            // Continue the loop every 5 seconds
            window.ncSliderTimer = setTimeout(autoSlide, 5000);
        }

        // Start auto-slide after initial delay
        window.ncSliderTimer = setTimeout(autoSlide, 2000);

        // Stop auto-slide on user interaction
        const sliderEl = document.getElementById('slider');
        if (sliderEl) {
            const stopAutoSlide = function() {
                if (window.ncSliderTimer) {
                    clearTimeout(window.ncSliderTimer);
                    window.ncSliderTimer = null;
                }
                // Remove listeners after first interaction
                sliderEl.removeEventListener('touchstart', stopAutoSlide);
                sliderEl.removeEventListener('mousemove', stopAutoSlide);
            };

            sliderEl.addEventListener('mousemove', stopAutoSlide);
            sliderEl.addEventListener('touchstart', stopAutoSlide);
        }
    }

    // Listen for language change events
    document.addEventListener('languageChanged', function() {
        updateCropsLanguage();
    });

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeCropsSlider();
    });

    // Expose functions to global scope for debugging
    window.initializeCropsSlider = initializeCropsSlider;
    window.updateCropsLanguage = updateCropsLanguage;

    console.log('[Crops Slider] Module loaded');

})();