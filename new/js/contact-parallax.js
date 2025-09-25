// Script para el efecto parallax de la sección de contacto
document.addEventListener('DOMContentLoaded', function() {
    initContactParallax();
    initContactAnimations();
});

function initContactParallax() {
    const parallaxBg = document.querySelector('.contact-parallax-bg');
    
    if (!parallaxBg) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxSection = document.querySelector('.contact-parallax-section');
        
        if (!parallaxSection) return;
        
        const rect = parallaxSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Solo aplicar efecto cuando la sección está visible
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Usar throttling para mejor rendimiento
    window.addEventListener('scroll', requestTick);
    
    // Para dispositivos móviles, usar scroll en lugar de fixed
    if (window.innerWidth <= 768) {
        parallaxBg.style.backgroundAttachment = 'scroll';
    }
}

function initContactAnimations() {
    const contactMembers = document.querySelectorAll('.contact-member');
    const qrItems = document.querySelectorAll('.contact-qr-item');
    
    // Intersection Observer para animaciones de entrada
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 150);
            }
        });
    }, observerOptions);
    
    // Animar miembros del equipo
    contactMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = 'all 0.6s ease';
        observer.observe(member);
    });

    // Animar códigos QR
    qrItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        setTimeout(() => observer.observe(item), index * 100);
    });
    
    // Agregar efectos hover mejorados para miembros
    contactMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efectos hover para códigos QR
    qrItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efectos para los botones sociales
    const socialButtons = document.querySelectorAll('.contact-social-btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Efecto de click
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.1)';
            }, 150);
        });
    });
}

// Función para manejar el resize de ventana
window.addEventListener('resize', function() {
    const parallaxBg = document.querySelector('.contact-parallax-bg');
    if (parallaxBg) {
        if (window.innerWidth <= 768) {
            parallaxBg.style.backgroundAttachment = 'scroll';
        } else {
            parallaxBg.style.backgroundAttachment = 'fixed';
        }
    }
});

// Agregar estilos dinámicos para las animaciones
const style = document.createElement('style');
style.textContent = `
    .contact-member.animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .contact-social-btn {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    .contact-member {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    @media (prefers-reduced-motion: reduce) {
        .contact-parallax-bg {
            background-attachment: scroll !important;
        }
        
        .contact-member,
        .contact-social-btn {
            transition: none !important;
        }
    }
`;
document.head.appendChild(style);
