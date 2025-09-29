/**
 * Language Toggle System for The Green Genie
 * Handles English/Spanish translations
 */

(function() {
    'use strict';

    // Translation dictionary
    const translations = {
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.products": "Products",
            "nav.clients": "Our Clients",
            "nav.about": "About Us",
            "nav.essence": "Our Essence",
            "nav.team": "Our Team",
            "nav.crops": "Our Crops",
            "nav.contact": "Contact Us",

            // Essence Section
            "essence.title": "Our Essence",
            "essence.subtitle": "Mission, Vision and Values",
            "essence.mission.title": "Mission",
            "essence.mission.content": "We are a family business dedicated to the production and export of foliage, committed to high quality standards and the development of a technified, responsible and environmentally sustainable cultivation. Our work is based on innovation, respect for nature and agricultural tradition, to offer differentiated products to the national and international market that exceed our clients' expectations and contribute to the well-being of the communities we work with.",
            "essence.vision.title": "Vision",
            "essence.vision.content": "The Green Genie will be recognized as a global reference in the international foliage market, distinguished by its leadership in innovation, excellence in quality and a firm commitment to sustainability, contributing to positively transform the sector, strengthen communities and protect the environment.",
            "essence.values.title": "Our Values",
            "essence.values.family.title": "Family Unity",
            "essence.values.family.description": "We grow thanks to our family bond and the strength of the values that unite us.",
            "essence.values.commitment.title": "Commitment",
            "essence.values.commitment.description": "To quality, compliance and trust of each client.",
            "essence.values.perseverance.title": "Perseverance",
            "essence.values.perseverance.description": "More than 20 years of continuous effort have taught us to overcome every challenge.",
            "essence.values.passion.title": "Passion",
            "essence.values.passion.description": "More than a business, GREEN GENIE is a life project that reflects dedication and love for foliage.",
            "essence.values.creativity.title": "Creativity",
            "essence.values.creativity.description": "Innovation is our essence, always looking for new ways to offer the best to the world.",
            "essence.values.sustainability.title": "Sustainability",
            "essence.values.sustainability.description": "We care for the environment with responsible agricultural practices and commitment to nature.",

            // Hero Section
            "hero.title": "Green that Conquer the World",
            "hero.subtitle": "Discover the natural beauty with our highest quality foliage and plants",
            "hero.button": "Contact Us",

            // Products Section
            "products.title": "Our Products",
            "products.subtitle": "Foliage and Plants of High Quality",
            "products.description": "Discover our wide selection of carefully selected plants and foliage to transform any space",
            "products.view_more": "View More",
            "products.download_catalog": "Download PDF Catalog",

            // About Section
            "about.title": "About Us",
            "about.description": "A family business dedicated to the production and export of premium foliage. Our greatest commitment is to quality, reliability and sustainability. That's why our more than 35 hectares in production are cultivated under responsible agricultural practices that guarantee freshness and excellence in every stem.",
            "about.stats.hectares": "Hectares",
            "about.stats.years": "Years",

            // Team Section
            "team.title": "Our Team",
            "team.subtitle": "Green Genie Specialists",

            // Crops Section
            "crops.title": "Our Crops",
            "crops.subtitle": "Discover our exuberant foliage",
            "crops.slider.1.title": "Arboreal Serenity",
            "crops.slider.1.description": "The majesty of fully-grown eucalyptus.",
            "crops.slider.2.title": "Immersed in Nature",
            "crops.slider.2.description": "Immersed in a sea of leaves.",
            "crops.slider.3.title": "Cultivating Abundance",
            "crops.slider.3.description": "Dedication and care in the greenhouse.",
            "crops.slider.4.title": "Vital Connection",
            "crops.slider.4.description": "A hand that tenderly holds the growing life of ruscus.",
            "crops.slider.5.title": "Rejuvenating Essence",
            "crops.slider.5.description": "The green expanse of foliage, a refuge of peace and tranquility amidst nature.",
            "crops.slider.6.title": "Amidst Sparkles",
            "crops.slider.6.description": "In the midst of glittering plants, a magical universe unfolds, where imagination comes to life.",

            // Clients Section
            "clients.title": "Our Clients",
            "clients.subtitle": "Global Presence",
            "clients.description": "We are taking the green to different corners of the planet. These indicators reflect our sustainable trajectory and reach in specialized crops and projects.",
            "clients.active_clients": "Active Clients",
            "clients.sustainable_relationships": "Sustainable business relationships",
            "clients.experience_years": "Years of Experience",
            "clients.consolidated_trajectory": "Consolidated trajectory",
            "clients.production_hectares": "Production Hectares",
            "clients.capacity_scale": "Capacity and scale green",

            // Contact Section
            "contact.title": "Contact Us",
            "contact.role.ceo": "CEO",
            "contact.role.sales_manager": "SALES MANAGER",
            "contact.company": "THE GREEN GENIE",

            // Footer
            "footer.brand_name": "The Green Genie",
            "footer.brand_tagline": "Premium Foliage Export Solutions",
            "footer.stay_connected": "Stay Connected",
            "footer.global_distribution": "Global Foliage Distribution",
            "footer.copyright": "&copy; 2024 The Green Genie. All rights reserved.",

            // Gallery Modal
            "gallery.title": "Our Premium Collection",
            "gallery.subtitle": "Plants and foliage of the highest quality for exceptional spaces",
            "gallery.filter.products": "Products",
            "gallery.filter.bouquets": "Bouquets",

            // Story Modal
            "story.title": "The Green Genie",
            "story.subtitle": "Our Growth Story",
            "story.button": "Know Our Story",
            "story.historia.title": "History",
            "story.historia.content": "Green Genie was born in the municipality of Cachipay, Cundinamarca, when in 2002 some visionary and entrepreneurial parents began cultivating Tree Fern and Eucalipto Baby Blue on a small scale. Each plant was the seed of a dream: to reach international markets one day.\n\nThe family, blessed with 5 children, grew up among foliage, learning from a young age to cut, classify and pack, but also to value effort, discipline and pride in working the land as a family.\n\nAfter more than 20 years of experience, in 2020 GREEN GENIE was officially constituted, a company producing and exporting quality foliage.\n\nOur participation in international fairs in countries such as Holland, Japan, South Korea and Ecuador, along with permanent closeness with our clients, has consolidated us as a reference in the production and export of foliage.\n\nToday we continue in expansion, with the same passion from our beginnings, bringing the freshness and quality of GREEN GENIE to every corner of the world.",
            "story.acerca.title": "About Us",
            "story.acerca.content": "We are GREEN GENIE, a family company dedicated to the production and export of premium foliage. Our greatest commitment is to quality, reliability and sustainability. For this reason, our more than 35 hectares in production are cultivated under responsible agricultural practices that guarantee freshness and excellence in every stem.\n\nThanks to our passion and dedication, we have consolidated ourselves as a leading exporter of foliage from Colombia, bringing the best of our land to international markets.\n\nIn Green Genie we transcend borders to deliver freshness, innovation and quality to the world. We are the genies: a highly trained, creative and persevering team, with a broad vision of the market, capable of offering effective solutions to every challenge.\n\n✨ Choose GREEN GENIE — a family that will always provide you with personalized attention, trust and results that exceed expectations.",
            "story.valores.title": "Our Values",
            "story.valores.unidad.title": "Unity",
            "story.valores.unidad.description": "We grow thanks to our family bond and the strength of the values that unite us.",
            "story.valores.compromiso.title": "Commitment",
            "story.valores.compromiso.description": "To quality, compliance and trust of each client.",
            "story.valores.perseverancia.title": "Perseverance",
            "story.valores.perseverancia.description": "More than 20 years of continuous effort have taught us to overcome every challenge.",
            "story.valores.pasion.title": "Passion",
            "story.valores.pasion.description": "More than a business, GREEN GENIE is a life project that reflects dedication and love for foliage.",
            "story.valores.creatividad.title": "Creativity",
            "story.valores.creatividad.description": "Innovation is our essence, always looking for new ways to offer the best to the world.",

            // Testimonials
            "testimonials.title": "Testimonial",
            "testimonials.subtitle": "What Our Clients Say!",

            // Loading states
            "loading.story": "Loading our story...",
            "loading.gallery": "Loading gallery...",
            "error.story": "Error loading story. Please try again.",
            "error.gallery": "Error loading gallery. Please try again.",

            // Gallery Products
            "gallery.product.1.name": "Monstera Deliciosa",
            "gallery.product.1.description": "Tropical indoor plant with characteristic perforated leaves. Perfect for modern decoration.",
            "gallery.product.2.name": "Premium Bouquet",
            "gallery.product.2.description": "Exclusive floral arrangement with selected foliage. Ideal for special events.",
            "gallery.product.3.name": "Tropical Collection",
            "gallery.product.3.description": "Set of high-quality tropical plants for outdoor and indoor spaces.",
            "gallery.product.4.name": "Premium Product I",
            "gallery.product.4.description": "Premium selection of exotic foliage. Grown to the highest quality standards.",
            "gallery.product.5.name": "Premium Product II",
            "gallery.product.5.description": "Specialized variety for luxury commercial and residential projects.",
            "gallery.product.6.name": "Premium Product III",
            "gallery.product.6.description": "Unique ornamental plants, perfect for creating sophisticated environments.",
            "gallery.product.7.name": "Specialized Cultivation",
            "gallery.product.7.description": "Controlled cultivation process that guarantees maximum quality and freshness.",
            "gallery.product.8.name": "Export Selection",
            "gallery.product.8.description": "Products specially prepared for international export.",
            "gallery.product.9.name": "Premium Quality",
            "gallery.product.9.description": "International quality standards in each of our products.",

            // Team Members
            "team.member.1.name": "Efrain Rodriguez",
            "team.member.1.position": "CEO",
            "team.member.1.description": "Expert in tropical foliage with more than 15 years of experience.",
            "team.member.2.name": "Cristián Rodríguez",
            "team.member.2.position": "Production Manager",
            "team.member.2.description": "Leader in sustainable cultivation techniques and process optimization.",
            "team.member.3.name": "Jazmín Guevara",
            "team.member.3.position": "Sales Coordinator",
            "team.member.3.description": "Specialist in international logistics and quality control.",
            "team.member.4.name": "Carlos Rodríguez",
            "team.member.4.position": "Quality and Production Supervisor",
            "team.member.4.description": "Expert in new varieties development and genetic improvement.",
            "team.member.5.name": "Dina Marcela Ortiz",
            "team.member.5.position": "Founder",
            "team.member.5.description": "Expert in new varieties development and genetic improvement.",
            "team.member.6.name": "Humberto Rodríguez",
            "team.member.6.position": "Founder",
            "team.member.6.description": "Expert in new varieties development and genetic improvement.",

            // Testimonials
            "testimonial.1.name": "María González",
            "testimonial.1.position": "Purchasing Manager",
            "testimonial.1.company": "Garden Center Premium - Spain",
            "testimonial.1.text": "The quality of the tropical foliage we import from The Green Genie is exceptional. Their heliconias and exotic foliage always arrive fresh and in perfect condition. Our European customers are delighted with the durability and beauty of these products.",
            "testimonial.2.name": "James Mitchell",
            "testimonial.2.position": "Import Director",
            "testimonial.2.company": "Tropical Flowers USA - Miami",
            "testimonial.2.text": "We have worked with The Green Genie for more than 3 years and the consistency in quality is impressive. Their palm foliage and tropical plants are ideal for our North American market. The logistics and delivery times are perfect.",
            "testimonial.3.name": "Sophie Laurent",
            "testimonial.3.position": "International Buyer",
            "testimonial.3.company": "Fleurs Tropicales - Paris, France",
            "testimonial.3.text": "The Green Genie's foliage has revolutionized our floral compositions. The variety of tropical species and the freshness with which they arrive in Europe allows us to offer unique arrangements. A reliable and professional supplier.",
            "testimonial.4.name": "Roberto Silva",
            "testimonial.4.position": "General Manager",
            "testimonial.4.company": "Flores & Follajes Brasil - São Paulo",
            "testimonial.4.text": "As distributors in Brazil, we greatly value the premium quality of the foliage exported by The Green Genie. Their bromeliads and ornamental foliage have impeccable presentation that our florists greatly appreciate.",
            "testimonial.5.name": "Akira Tanaka",
            "testimonial.5.position": "Import Manager",
            "testimonial.5.company": "Tokyo Green Imports - Japan",
            "testimonial.5.text": "The attention to detail and care in packaging of tropical foliage is extraordinary. The products arrive in Japan in optimal conditions, allowing us to maintain the quality that our Japanese customers expect. Excellent service.",
            "testimonial.6.name": "Emma Thompson",
            "testimonial.6.position": "Directora de Compras",
            "testimonial.6.company": "British Tropical Supply - Londres",
            "testimonial.6.text": "The Green Genie se ha convertido en nuestro proveedor principal de follajes exóticos. La diversidad de especies, desde anturios hasta follajes de jengibre, nos permite satisfacer todas las necesidades del mercado británico. Recomendados al 100%."
        },
        es: {
            // Navigation
            "nav.home": "Inicio",
            "nav.products": "Productos",
            "nav.clients": "Nuestros Clientes",
            "nav.about": "Sobre Nosotros",
            "nav.essence": "Nuestra Esencia",
            "nav.team": "Nuestro Equipo",
            "nav.crops": "Nuestros Cultivos",
            "nav.contact": "Contáctanos",

            // Essence Section
            "essence.title": "Nuestra Esencia",
            "essence.subtitle": "Misión, Visión y Valores",
            "essence.mission.title": "Misión",
            "essence.mission.content": "Somos una empresa familiar dedicada a la producción y exportación de follajes, comprometida con altos estándares de calidad y el desarrollo de un cultivo tecnificado, responsable y ambientalmente sostenible. Nuestra labor se fundamenta en la innovación, el respeto por la naturaleza y la tradición agrícola, para ofrecer al mercado nacional e internacional productos diferenciados que superen las expectativas de nuestros clientes y contribuyan al bienestar de las comunidades con las que trabajamos.",
            "essence.vision.title": "Visión",
            "essence.vision.content": "The Green Genie será reconocida como un referente global en el mercado internacional de follajes, distinguida por su liderazgo en innovación, la excelencia de su calidad y un firme compromiso con la sostenibilidad, contribuyendo a transformar positivamente el sector, fortalecer a las comunidades y proteger el medio ambiente.",
            "essence.values.title": "Nuestros Valores",
            "essence.values.family.title": "Unidad Familiar",
            "essence.values.family.description": "Nos une la fuerza de nuestros valores familiares y el amor por la tierra.",
            "essence.values.commitment.title": "Compromiso",
            "essence.values.commitment.description": "Con la calidad, el cumplimiento y la confianza de cada cliente.",
            "essence.values.perseverance.title": "Perseverancia",
            "essence.values.perseverance.description": "Más de 20 años de esfuerzo continuo nos han enseñado a superar cada desafío.",
            "essence.values.passion.title": "Pasión",
            "essence.values.passion.description": "Más que un negocio, GREEN GENIE es un proyecto de vida que refleja dedicación y amor por los follajes.",
            "essence.values.creativity.title": "Creatividad",
            "essence.values.creativity.description": "La innovación es nuestra esencia, siempre buscando nuevas formas de ofrecer lo mejor al mundo.",
            "essence.values.sustainability.title": "Sostenibilidad",
            "essence.values.sustainability.description": "Cuidamos el medio ambiente con prácticas agrícolas responsables y compromiso con la naturaleza.",

            // Hero Section
            "hero.title": "Verdes que Conquistan el Mundo",
            "hero.subtitle": "Descubre la belleza natural con nuestros follajes y plantas de la más alta calidad",
            "hero.button": "Contáctanos",

            // Products Section
            "products.title": "Nuestros Productos",
            "products.subtitle": "Follajes y Plantas de Alta Calidad",
            "products.description": "Descubre nuestra amplia selección de plantas y follajes cuidadosamente seleccionados para transformar cualquier espacio",
            "products.view_more": "Ver Más",
            "products.download_catalog": "Descargar Catálogo PDF",

            // About Section
            "about.title": "Sobre Nosotros",
            "about.description": "Somos una empresa familiar dedicada a la producción y exportación de follajes premium. Nuestro mayor compromiso es con la calidad, la confiabilidad y la sostenibilidad. Por eso, nuestras más de 35 hectáreas en producción se cultivan bajo prácticas agrícolas responsables que garantizan frescura y excelencia en cada tallo.",
            "about.stats.hectares": "Hectáreas",
            "about.stats.years": "Años",

            // Team Section
            "team.title": "Nuestro Equipo",
            "team.subtitle": "Especialistas Green Genie",

            // Crops Section
            "crops.title": "Nuestros Cultivos",
            "crops.subtitle": "Descubre nuestros exuberante follajes",
            "crops.slider.1.title": "Serenidad Arbórea",
            "crops.slider.1.description": "La majestuosidad de los eucaliptos completamente crecidos.",
            "crops.slider.2.title": "Inmerso en la Naturaleza",
            "crops.slider.2.description": "Inmerso en un mar de hojas.",
            "crops.slider.3.title": "Cultivando Abundancia",
            "crops.slider.3.description": "Dedicación y cuidado en el invernadero.",
            "crops.slider.4.title": "Conexión Vital",
            "crops.slider.4.description": "Una mano que tiernamente sostiene la vida creciente del ruscus.",
            "crops.slider.5.title": "Esencia Rejuvenecedora",
            "crops.slider.5.description": "La extensión verde del follaje, un refugio de paz y tranquilidad en medio de la naturaleza.",
            "crops.slider.6.title": "En Medio de Destellos",
            "crops.slider.6.description": "En medio de plantas centelleantes, se despliega un universo mágico, donde la imaginación cobra vida.",

            // Clients Section
            "clients.title": "Nuestros Clientes",
            "clients.subtitle": "Presencia Global",
            "clients.description": "Estamos llevando el verde a distintos rincones del planeta. Estos indicadores reflejan nuestra trayectoria y alcance sostenible en cultivos y proyectos especializados.",
            "clients.active_clients": "Clientes Activos",
            "clients.sustainable_relationships": "Relaciones comerciales sostenibles",
            "clients.experience_years": "Años de Experiencia",
            "clients.consolidated_trajectory": "Trayectoria consolidada",
            "clients.production_hectares": "Hectáreas de Producción",
            "clients.capacity_scale": "Capacidad y escala verde",

            // Contact Section
            "contact.title": "Contáctanos",
            "contact.role.ceo": "CEO",
            "contact.role.sales_manager": "GERENTE DE VENTAS",
            "contact.company": "THE GREEN GENIE",

            // Footer
            "footer.brand_name": "The Green Genie",
            "footer.brand_tagline": "Soluciones Premium de Exportación de Follajes",
            "footer.stay_connected": "Mantente Conectado",
            "footer.global_distribution": "Distribución Global de Follajes",
            "footer.copyright": "&copy; 2024 The Green Genie. Todos los derechos reservados.",

            // Gallery Modal
            "gallery.title": "Nuestra Colección Premium",
            "gallery.subtitle": "Plantas y follajes de la más alta calidad para espacios excepcionales",
            "gallery.filter.products": "Productos",
            "gallery.filter.bouquets": "Bouquets",

            // Story Modal
            "story.title": "The Green Genie",
            "story.subtitle": "Nuestra Historia de Crecimiento",
            "story.button": "Conoce Nuestra Historia",
            "story.historia.title": "Historia",
            "story.historia.content": "Green Genie nació en el municipio de Cachipay, Cundinamarca, cuando en 2002 unos padres campesinos, visionarios y emprendedores, comenzaron a cultivar Tree Fern y Eucalipto Baby Blue a pequeña escala. Cada planta era la semilla de un sueño: llegar un día a los mercados internacionales.\n\nLa familia, bendecida con 5 hijos, creció entre follajes, aprendiendo desde niños a cortar, clasificar y empacar, pero también a valorar el esfuerzo, la disciplina y el orgullo de trabajar la tierra en unidad.\n\nTras más de 20 años de experiencia, en 2020 se constituyó oficialmente GREEN GENIE, empresa productora y exportadora de follajes de calidad.\n\nNuestra participación en ferias internacionales en países como Holanda, Japón, Corea del Sur y Ecuador, junto con la cercanía permanente con nuestros clientes, nos ha consolidado como un referente en la producción y exportación de follajes.\n\nHoy seguimos en expansión, con la misma pasión de nuestros inicios, llevando la frescura y calidad de GREEN GENIE a cada rincón del mundo.",
            "story.acerca.title": "Acerca de Nosotros",
            "story.acerca.content": "Somos GREEN GENIE, una empresa familiar dedicada a la producción y exportación de follajes premium. Nuestro mayor compromiso es con la calidad, la confiabilidad y la sostenibilidad. Por eso, nuestras más de 35 hectáreas en producción se cultivan bajo prácticas agrícolas responsables que garantizan frescura y excelencia en cada tallo.\n\nGracias a nuestra pasión y dedicación, nos hemos consolidado como un exportador líder de follajes desde Colombia, llevando lo mejor de nuestra tierra a los mercados internacionales.\n\nEn Green Genie trascendemos fronteras para entregar frescura, innovación y calidad al mundo. Somos los genios: un equipo altamente capacitado, creativo y perseverante, con una visión amplia del mercado, capaz de ofrecer soluciones efectivas a cada reto.\n\n✨ Elige GREEN GENIE — una familia que siempre te brindará atención personalizada, confianza y resultados que superan las expectativas.",
            "story.valores.title": "Nuestros Valores",
            "story.valores.unidad.title": "Unidad",
            "story.valores.unidad.description": "Crecemos gracias a nuestro vínculo familiar y a la fortaleza de los valores que nos unen.",
            "story.valores.compromiso.title": "Compromiso",
            "story.valores.compromiso.description": "Con la calidad, el cumplimiento y la confianza de cada cliente.",
            "story.valores.perseverancia.title": "Perseverancia",
            "story.valores.perseverancia.description": "Más de 20 años de esfuerzo continuo nos han enseñado a superar cada reto.",
            "story.valores.pasion.title": "Pasión",
            "story.valores.pasion.description": "Más que un negocio, GREEN GENIE es un proyecto de vida que refleja dedicación y amor por los follajes.",
            "story.valores.creatividad.title": "Creatividad",
            "story.valores.creatividad.description": "La innovación es nuestra esencia, siempre buscando nuevas formas de ofrecer lo mejor al mundo.",

            // Testimonials
            "testimonials.title": "Testimonios",
            "testimonials.subtitle": "¿Qué Dicen Nuestros Clientes?",

            // Loading states
            "loading.story": "Cargando nuestra historia...",
            "loading.gallery": "Cargando galería...",
            "error.story": "Error al cargar la historia. Por favor, intenta nuevamente.",
            "error.gallery": "Error al cargar la galería. Por favor, intenta nuevamente.",

            // Gallery Products
            "gallery.product.1.name": "Monstera Deliciosa",
            "gallery.product.1.description": "Planta tropical de interior con hojas perforadas características. Perfecta para decoración moderna.",
            "gallery.product.2.name": "Bouquet Premium",
            "gallery.product.2.description": "Arreglo floral exclusivo con follajes seleccionados. Ideal para eventos especiales.",
            "gallery.product.3.name": "Colección Tropical",
            "gallery.product.3.description": "Conjunto de plantas tropicales de alta calidad para espacios exteriores e interiores.",
            "gallery.product.4.name": "Producto Premium I",
            "gallery.product.4.description": "Selección premium de follajes exóticos. Cultivados con los más altos estándares de calidad.",
            "gallery.product.5.name": "Producto Premium II",
            "gallery.product.5.description": "Variedad especializada para proyectos comerciales y residenciales de lujo.",
            "gallery.product.6.name": "Producto Premium III",
            "gallery.product.6.description": "Plantas ornamentales únicas, perfectas para crear ambientes sofisticados.",
            "gallery.product.7.name": "Cultivo Especializado",
            "gallery.product.7.description": "Proceso de cultivo controlado que garantiza la máxima calidad y frescura.",
            "gallery.product.8.name": "Selección Exportación",
            "gallery.product.8.description": "Productos preparados especialmente para exportación internacional.",
            "gallery.product.9.name": "Calidad Premium",
            "gallery.product.9.description": "Estándares internacionales de calidad en cada uno de nuestros productos.",

            // Team Members
            "team.member.1.name": "Efrain Rodriguez",
            "team.member.1.position": "CEO",
            "team.member.1.description": "Experta en follajes tropicales con más de 15 años de experiencia.",
            "team.member.2.name": "Cristián Rodríguez",
            "team.member.2.position": "Jefe de Producción",
            "team.member.2.description": "Líder en técnicas de cultivo sostenible y optimización de procesos.",
            "team.member.3.name": "Jazmín Guevara",
            "team.member.3.position": "Coordinadora de Ventas",
            "team.member.3.description": "Especialista en logística internacional y control de calidad.",
            "team.member.4.name": "Carlos Rodríguez",
            "team.member.4.position": "Supervisor de Calidad y Producción",
            "team.member.4.description": "Experto en desarrollo de nuevas variedades y mejoramiento genético.",
            "team.member.5.name": "Dina Marcela Ortiz",
            "team.member.5.position": "Fundadora",
            "team.member.5.description": "Experto en desarrollo de nuevas variedades y mejoramiento genético.",
            "team.member.6.name": "Humberto Rodríguez",
            "team.member.6.position": "Fundador",
            "team.member.6.description": "Experto en desarrollo de nuevas variedades y mejoramiento genético.",

            // Testimonials
            "testimonial.1.name": "María González",
            "testimonial.1.position": "Gerente de Compras",
            "testimonial.1.company": "Garden Center Premium - España",
            "testimonial.1.text": "Las calidades de los follajes tropicales que importamos de The Green Genie es excepcional. Sus heliconias y follajes exóticos llegan siempre frescos y en perfectas condiciones. Nuestros clientes europeos están encantados con la durabilidad y belleza de estos productos.",
            "testimonial.2.name": "James Mitchell",
            "testimonial.2.position": "Director de Importaciones",
            "testimonial.2.company": "Tropical Flowers USA - Miami",
            "testimonial.2.text": "Hemos trabajado con The Green Genie durante más de 3 años y la consistencia en la calidad es impresionante. Sus follajes de palma y plantas tropicales son ideales para nuestro mercado norteamericano. La logística y tiempos de entrega son perfectos.",
            "testimonial.3.name": "Sophie Laurent",
            "testimonial.3.position": "Compradora Internacional",
            "testimonial.3.company": "Fleurs Tropicales - París, Francia",
            "testimonial.3.text": "Los follajes de The Green Genie han revolucionado nuestras composiciones florales. La variedad de especies tropicales y la frescura con la que llegan a Europa nos permite ofrecer arreglos únicos. Un proveedor confiable y profesional.",
            "testimonial.4.name": "Roberto Silva",
            "testimonial.4.position": "Gerente General",
            "testimonial.4.company": "Flores & Follajes Brasil - São Paulo",
            "testimonial.4.text": "Como distribuidores en Brasil, valoramos mucho la calidad premium de los follajes exportados por The Green Genie. Sus bromelias y follajes ornamentales tienen una presentación impecable que nuestros floristería aprecian enormemente.",
            "testimonial.5.name": "Akira Tanaka",
            "testimonial.5.position": "Import Manager",
            "testimonial.5.company": "Tokyo Green Imports - Japón",
            "testimonial.5.text": "La atención al detalle y el cuidado en el empaque de los follajes tropicales es extraordinaria. Los productos llegan a Japón en condiciones óptimas, lo que nos permite mantener la calidad que nuestros clientes japoneses esperan. Excelente servicio.",
            "testimonial.6.name": "Emma Thompson",
            "testimonial.6.position": "Directora de Compras",
            "testimonial.6.company": "British Tropical Supply - Londres",
            "testimonial.6.text": "The Green Genie se ha convertido en nuestro proveedor principal de follajes exóticos. La diversidad de especies, desde anturios hasta follajes de jengibre, nos permite satisfacer todas las necesidades del mercado británico. Recomendados al 100%."
        }
    };

    // Current language (default to English)
    let currentLanguage = 'en';

    /**
     * Initialize language system
     */
    function initLanguageSystem() {
        // Load saved language preference or default to English
        const savedLanguage = localStorage.getItem('greengenie-language') || 'en';
        setLanguage(savedLanguage);

        // Update toggle button state
        updateToggleButton(savedLanguage);

        console.log('[Language] System initialized with language:', savedLanguage);
    }

    /**
     * Toggle between English and Spanish
     */
    function toggleLanguage(source = 'desktop') {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        setLanguage(newLanguage);

        // Save preference
        localStorage.setItem('greengenie-language', newLanguage);

        // Update toggle button
        updateToggleButton(newLanguage);

        console.log('[Language] Toggled to:', newLanguage, 'from source:', source);
    }

    /**
     * Refresh dynamic content when language changes
     */
    function refreshDynamicContent() {
        // Refresh story modal if it's currently loaded
        const storyContent = document.getElementById('storyContent');
        if (storyContent && storyContent.children.length > 0) {
            // Re-load story content with new language
            if (typeof loadStoryContent === 'function') {
                loadStoryContent(storyContent);
            }
        }

        // Refresh gallery if it's currently loaded
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid && galleryGrid.children.length > 0) {
            // Re-load gallery items with new language
            if (typeof loadGalleryItems === 'function') {
                loadGalleryItems(galleryGrid);
            }
        }

        // Refresh team data if team carousel exists
        const teamCarousel = document.getElementById('teamCarousel');
        if (teamCarousel && window.getTeamData) {
            // Update TEAM_DATA with new translations
            window.TEAM_DATA = window.getTeamData();
            // Re-load team data if loadTeam function exists
            if (typeof loadTeam === 'function') {
                loadTeam();
            }
        }

        // Refresh testimonials if testimonial carousel exists
        const testimonialCarousel = document.querySelector('.testimonial-carousel');
        if (testimonialCarousel && typeof loadTestimonials === 'function') {
            // Re-load testimonials with new language
            loadTestimonials();
        }
    }

    /**
     * Set the current language and update all elements
     */
    function setLanguage(language) {
        if (!translations[language]) {
            console.error('[Language] Unsupported language:', language);
            return;
        }

        currentLanguage = language;

        // Update all elements with data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key);

            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG' && element.hasAttribute('data-i18n-alt')) {
                    element.alt = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update document language attribute
        document.documentElement.lang = language;

        // Update page title if needed
        updatePageTitle(language);

        // Refresh dynamic content (modals, galleries, team)
        refreshDynamicContent();

        console.log('[Language] Language set to:', language);
    }

    /**
     * Get translation for a key
     */
    function getTranslation(key) {
        return translations[currentLanguage][key] || translations['en'][key] || key;
    }

    /**
     * Update the toggle button visual state
     */
    function updateToggleButton(language) {
        const toggleButtons = document.querySelectorAll('.language-toggle');
        const spanishLabels = document.querySelectorAll('.language-label[id*="spanish"]');
        const englishLabels = document.querySelectorAll('.language-label[id*="english"]');

        toggleButtons.forEach(button => {
            if (language === 'es') {
                button.classList.add('active');
                spanishLabels.forEach(label => label.classList.add('active'));
                englishLabels.forEach(label => label.classList.remove('active'));
            } else {
                button.classList.remove('active');
                englishLabels.forEach(label => label.classList.add('active'));
                spanishLabels.forEach(label => label.classList.remove('active'));
            }
        });
    }

    /**
     * Update page title based on language
     */
    function updatePageTitle(language) {
        const baseTitle = "The Green Genie";
        const subtitle = language === 'es' ?
            "Follajes Verdes que Conquistan el Mundo" :
            "Green Foliage that Conquers the World";

        document.title = `${baseTitle} - ${subtitle}`;
    }

    /**
     * Get current language
     */
    function getCurrentLanguage() {
        return currentLanguage;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSystem);
    } else {
        initLanguageSystem();
    }

    // Export functions to global scope
    window.toggleLanguage = toggleLanguage;
    window.setLanguage = setLanguage;
    window.getCurrentLanguage = getCurrentLanguage;
    window.getTranslation = getTranslation;

    console.log('[Language] Functions exported to window object');

})();
