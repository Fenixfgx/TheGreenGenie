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

$('.acordeon').on('click','.acordeon__titulo',function() {
  var t = $(this);
  var p = t.parent().siblings().find('.acordeon__contenido');
  var tp = t.next();
  var temp = 200;
  p.slideUp(temp);
  tp.slideToggle(temp);
});

window.addEventListener("load", event => {

    var swiperWrapper = document.querySelector('.swiper-wrapper');

    /* The Team */
    var team = [
        {
            name: "Carlos Rodríguez",
            role: "Quality and Production Supervisor",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo: "http://www.thegreengenie.com.co/images/Carlos.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Dina Marcela Ortiz",
            role: "Founder",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo: "http://www.thegreengenie.com.co/images/perf.JPG",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Humberto Rodríguez",
            role: "Founder",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo: "http://www.thegreengenie.com.co/images/Humberto.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
        {
            name: "Angie Lizett",
            role: "Administrative Coordinator",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo: "http://www.thegreengenie.com.co/images/Angie.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
                        {
            name: "Jazmín Guevara",
            role: "Sales Coordinator",
            desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
            photo: "http://www.thegreengenie.com.co/images/Jazmin.jpg",
            website: "https://rafaelalucas.com",
            email: "mailto:rafaelavlucas@gmail.com",
            linkedin: "https://www.linkedin.com/in/rafaelalucas/",
            dribbble: "https://dribbble.com/rafaelalucas",
        },
    ];

    /* Social Icons */
    var icons = [{
        iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
        iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
        iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
        iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
    }];

    var iWebsite = icons[0].iWebsite,
        iEmail = icons[0].iEmail,
        iLinkedin = icons[0].iLinkedin,
        iDribbble = icons[0].iDribbble;


    /* Function to populate the team members */
    function addTeam() {
        for (let i = 0; i < team.length; i++) {

            /* Variables for the team */
            var name = team[i].name,
                role = team[i].role,
                desc = team[i].desc,
                photo = team[i].photo,
                website = team[i].website,
                email = team[i].email,
                linkedin = team[i].linkedin,
                dribbble = team[i].dribbble;

            /* Template for the Team Cards */
            var template = `
                <div class="swiper-slide">
                <div class="card">
                    <span class="bg"></span>
                    <span class="more"></span>
                    <figure class="photo"><img src="${photo}"></figure>
                        <article class="text">
                            <p class="name">${name}</p>
                            <p class="role">${role}</p> 
                            <p class="desc">${desc}</p> 
                        </article>
                        
                        <div class="social">
                        <span class="pointer"></span>
                        <div class="icons">
                            <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
                            <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                            <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
                            <a class="icon" href="${dribbble}" target="_blank" data-index="3"><img src="${iDribbble}"></a>
                            </div>
                            </div>
                    </div>
                </div>`;

            swiperWrapper.insertAdjacentHTML('beforeend', template);
        }
    };


    addTeam();



    /* Swiper Settings */

    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: false,
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 40,
        threshold: 5,


        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            1180: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            799: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
            },
        }
    });

    /* Show More */

    var btnShow = document.querySelectorAll('.more');



    btnShow.forEach(function (el) {
        el.addEventListener('click', showMore);
    });

    function showMore(event) {
        var card = event.target.closest(".swiper-slide");

        if (card.classList.contains('show-more')) {
            card.classList.remove('show-more');
        } else {
            card.classList.add('show-more')
        }

    }


    /* Social Hover */
    var icon = document.querySelectorAll('.icon');

    icon.forEach(function (el) {
        el.addEventListener("mouseenter", followCursor);

    });


    function followCursor(event) {
        var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
            index = event.currentTarget.dataset.index,
            sizeIcon = (60 * index) + 25;

        pointer.style.transform = `translateX(${sizeIcon}px)`;
    }


    /* end */
});


const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const productModal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModalButton = document.getElementById("close-modal");

// Simulación de datos de búsqueda (reemplaza esto con tus propios datos)
const searchData = [
    { name: "EUCALIPTO SILVER DOLLAR", description: " Eucalyptus Silver Dollar is an evergreen tree with rounded leaves of silver-green color. The leaves are fragrant and are frequently used in floral arrangements and decoration due to their distinctive appearance.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(1).jpg" },
    { name: "COCCULUS", description: "Cocculus laurifolius is an evergreen shrub with laurel-like and showy leaves. It is valued in gardening for its lush foliage and its ability to add beauty and color to outdoor spaces.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(2).jpg" },
    { name: "RUSCUS", description: "Ruscus is a perennial plant with dark green lance-shaped leaves. It is widely used in floral arrangements and decoration due to its elegant and long-lasting appearance.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(3).jpg" },
	{ name: "EUCALIPTO BABY BLUE", description: "Baby Blue Eucalyptus is an evergreen tree with rounded leaves of silvery-blue color. It is widely used in floral arrangements and decoration due to its delicate and charming appearance.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(4).jpg" },
	{ name: "LEATHER FERN", description: "Leather Fern is a perennial plant with bright green fronds and a leather-like texture. It is commonly used in floral arrangements and decoration due to its exotic appearance and resilience.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(5).jpg" },
	{ name: "MONSTERA", description: "Monstera is a climbing plant with large, perforated leaves. It is very popular in interior decoration and is used in floral arrangements due to its tropical and striking appearance.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(6).jpg" },
	{ name: "HONEYSUCKLE", description: "Lonicera pileata, commonly known as Honeysuckle, is an evergreen shrub with small, shiny dark green leaves that give it an attractive appearance. It is valued in gardening for its durability and easy maintenance.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(7).jpg" },
	{ name: "TREE FERN", description: "Tree Fern is a large perennial plant with delicate green fronds. It is commonly used in gardens and landscaping to add a tropical and lush touch.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(8).jpg" },
	{ name: "PINE", description: "  Pine is an evergreen tree with green, conical-shaped leaves. It is widely used in gardening and landscaping due to its classic appearance and ability to provide shade.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(9).jpg" },
	{ name: "RIVELINA PALM", description: "Rivelina Palm is an evergreen palm tree with fan-shaped leaves and a slender trunk. It is highly valued in gardening and landscaping for its elegance and resilience.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(10).jpg" },
	{ name: "LIRIOPE", description: "Liriope is a perennial plant with narrow leaves and purple flowers. It is commonly used in gardens and landscaping as a border or ground cover due to its durability and beauty.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(11).jpg" },
	{ name: "GREEN HYPERICUM", description: "Hypericum perforatum, commonly known as Green Hypericum, is a perennial herbaceous plant with bright green buds and dark green leaves. It is known for its medicinal properties and is used in natural remedies. Additionally, it is appreciated in gardening for its beauty and resilience.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(12).jpg" },
	{ name: "RED HYPERICUM", description: " Hypericum perforatum, commonly known as Red Hypericum, is a perennial herbaceous plant with bright red buds and dark green leaves. It is known for its medicinal properties and is used in natural remedies. Additionally, it is appreciated in gardening for its beauty and resilience.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(13).jpg" },
	{ name: "PINK HYPERICUM", description: "Hypericum perforatum, commonly known as Pink Hypericum, is a perennial herbaceous plant with bright pink buds and dark green leaves. It is known for its medicinal properties and is used in natural remedies. Additionally, it is appreciated in gardening for its beauty and resilience.", image: "https://fenixfgx.github.io/TheGreenGenie/images/a%20(14).jpg" },
];

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = searchData.filter(item =>
        item.name.toLowerCase().startsWith(searchTerm)
    );

    displayResults(filteredResults);
});

function displayResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0 || searchInput.value.trim() === "") {
        searchResults.style.display = "none";
        return;
    }

    searchResults.style.display = "block";

    results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("search-result-item");
        resultItem.innerHTML = `
            <img src="${result.image}" alt="${result.name}" width="38" height="38">
            <span>${result.name}</span>
        `;

        resultItem.addEventListener("click", () => {
            openModal(result);
        });

        searchResults.appendChild(resultItem);
    });
}

function openModal(product) {
    modalTitle.textContent = product.name;
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalDescription.textContent = product.description;
    productModal.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cierre
closeModalButton.addEventListener("click", () => {
    productModal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === productModal) {
        productModal.style.display = "none";
    }
});