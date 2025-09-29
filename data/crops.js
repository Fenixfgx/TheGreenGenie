/**
 * Crops Slider Data for The Green Genie
 * Contains images and bilingual text data for the crops section slider
 */

(function() {
    'use strict';

    // Crops slider data with bilingual support
    const CROPS_DATA = [
        {
            id: 1,
            image: "https://www.theGreenGenie.com.co/images/sl.jpeg",
            title: {
                en: "Arboreal Serenity",
                es: "Serenidad Arbórea"
            },
            description: {
                en: "The majesty of fully-grown eucalyptus.",
                es: "La majestuosidad de los eucaliptos completamente crecidos."
            }
        },
        {
            id: 2,
            image: "img/cultivo.jpg",
            title: {
                en: "Immersed in Nature",
                es: "Inmerso en la Naturaleza"
            },
            description: {
                en: "Immersed in a sea of leaves, connect with the essence of nature.",
                es: "Inmerso en un mar de hojas, conecta con la esencia de la naturaleza."
            }
        },
        {
            id: 3,
            image: "https://www.theGreenGenie.com.co/images/DSC01441.jpg",
            title: {
                en: "Cultivating Abundance",
                es: "Cultivando Abundancia"
            },
            description: {
                en: "Dedication and care in the growth of ruscus in the greenhouse, where life flourishes.",
                es: "Dedicación y cuidado en el crecimiento del rusco en el invernadero, donde la vida florece."
            }
        },
        {
            id: 4,
            image: "https://www.theGreenGenie.com.co/images/DSC01468.jpg",
            title: {
                en: "Vital Connection",
                es: "Conexión Vital"
            },
            description: {
                en: "A hand that tenderly holds the growing life of ruscus.",
                es: "Una mano que tiernamente sostiene la vida creciente del rusco."
            }
        },
        {
            id: 5,
            image: "https://www.theGreenGenie.com.co/images/fondo1.jpeg",
            title: {
                en: "Rejuvenating Essence",
                es: "Esencia Rejuvenecedora"
            },
            description: {
                en: "The green expanse of foliage, a refuge of peace and tranquility amidst nature.",
                es: "La extensión verde del follaje, un refugio de paz y tranquilidad en medio de la naturaleza."
            }
        },
        {
            id: 6,
            image: "https://www.theGreenGenie.com.co/images/fondo2.jpeg",
            title: {
                en: "Amidst Sparkles",
                es: "En Medio de Destellos"
            },
            description: {
                en: "In the midst of glittering plants, a magical universe unfolds, where imagination comes to life.",
                es: "En medio de plantas centelleantes, se despliega un universo mágico, donde la imaginación cobra vida."
            }
        }
    ];

    // Expose data to global scope
    window.CROPS_DATA = CROPS_DATA;

    console.log('[Crops] Data loaded:', CROPS_DATA.length, 'crops');

})();