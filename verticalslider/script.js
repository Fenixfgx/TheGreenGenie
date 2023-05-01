var slider = {
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },
  
  timing: 800,
  slideWidth: 400,
  
  // Add a new function to move the slider to the right
  moveSliderRight: function() {
    var $slider = this.el.slider;
    var currentScrollLeft = $slider.scrollLeft();
    var maxScrollLeft = this.slideWidth * (this.el.allSlides.length - 1);
    
    if (currentScrollLeft >= maxScrollLeft) {
      // If we've reached the end, scroll back to the beginning
      $slider.animate({ scrollLeft: 0 }, this.timing);
      this.changeActiveNav(this.el.allNavButtons[0]);
    } else {
      // Otherwise, move the slider to the right
      $slider.animate({ scrollLeft: currentScrollLeft + this.slideWidth }, this.timing);
      this.changeActiveNav(this.el.allNavButtons[currentScrollLeft/this.slideWidth + 1]);
    }
  },
  
  init: function() {
    this.bindUIEvents();
    
    // Add interval to move slider to the right every 15 seconds
    setInterval(function() {
      slider.moveSliderRight();
    }, 7000);
  },
  
  bindUIEvents: function() {
    this.el.slider.on("scroll", function(event) {
      slider.moveSlidePosition(event);
    });
    
    this.el.sliderNav.on("click", "a", function(event) {
      slider.handleNavClick(event, this);
    });
  },
  
  moveSlidePosition: function(event) {
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
    });  
  },
  
  handleNavClick: function(event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();
    
    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);
    
    this.changeActiveNav(el);
  },
  
  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }
};

slider.init();