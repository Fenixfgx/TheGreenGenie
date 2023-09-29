class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}


new StickyNavigation();


// Obtener referencias a los elementos del DOM
const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

// Función para cerrar el menú con retraso de 1 segundo
function closeMenuWithDelay() {
    setTimeout(function() {
        menuButton.classList.remove('active');
        menuList.style.maxHeight = '0';
    }, 1000); // 1000 milisegundos = 1 segundo
}

// Agregar un evento clic al botón MENU
menuButton.addEventListener('click', function() {
    // Alternar la clase "active" en el botón MENU para cambiar su estilo
    menuButton.classList.toggle('active');
    
    // Obtener la altura máxima de la lista
    const maxHeight = menuList.scrollHeight + 'px';
    
    // Aplicar la altura máxima según si el botón está activo o no
    menuList.style.maxHeight = menuButton.classList.contains('active') ? maxHeight : '0';
});

// Agregar un evento clic al documento para cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    // Verificar si el clic se realizó dentro de la lista o el botón MENU
    if (!menuList.contains(event.target) && event.target !== menuButton) {
        // Cerrar el menú con retraso de 1 segundo
        if (menuButton.classList.contains('active')) {
            closeMenuWithDelay();
        }
    }
});

// Evitar que los clics en el botón MENU cierren el menú inmediatamente después de abrirlo
menuButton.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Agregar un evento clic a los elementos dentro del menú para cerrar el menú con retraso de 1 segundo
const menuItems = document.querySelectorAll('.LIST a');

menuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el redireccionamiento inmediato
        closeMenuWithDelay(); // Cerrar el menú con retraso de 1 segundo
        // Realizar el redireccionamiento inmediato
        const href = this.getAttribute('href');
        if (href) {
            window.location.href = href;
        }
    });
});

// Función que inicia la animación cuando el elemento es visible en el viewport
function startCounterAnimation(entry) {
  const counter = entry.target;
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 170; // Ajusta la velocidad según sea necesario

  const updateCount = () => {
    if (count < target) {
      count += increment;
      counter.innerText = Math.round(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

// Configuración del IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounterAnimation(entry);
      observer.unobserve(entry.target); // Deja de observar el elemento una vez que comienza la animación
    }
  });
});

// Observar todos los elementos con la clase '.counter'
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los elementos con la clase "et-hero-tab"
  var tabs = document.querySelectorAll('.et-hero-tab');

  // Agrega un evento de clic a cada botón
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(event) {
      // Evita el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene la URL del enlace clicado
      var url = tab.getAttribute('href');

      // Redirige a la URL correspondiente
      window.location.href = url;
    });
  });
});
