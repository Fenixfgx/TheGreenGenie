const gallery = document.querySelector('.gallery');
  let scrollPos = 0;
  let direction = 1;

  function autoScroll() {
    if (scrollPos >= gallery.scrollWidth - gallery.clientWidth || scrollPos <= 0) {
      direction *= -1;
    }
    scrollPos += 5 * direction;
    gallery.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
  }

  setInterval(autoScroll, 20);