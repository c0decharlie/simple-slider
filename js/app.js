// Slider class
function Slider(element) {
  // get slider container
  this.element = document.getElementById(element);
}

// store slider elements
Slider.prototype.slides = [];

// active slide
Slider.prototype.current = 0;

// find all slider elements and save them in array
Slider.prototype.findSlides = function () {
  var slides = this.element.getElementsByClassName('slide');
  for (var i = 0; i < slides.length; i++) {
    this.slides.push(slides[i]);
  }
}

// change slide method
Slider.prototype.changeSlide = function() {
  // take current class
  var currentSlide = this.slides[this.current];

  if (this.current == 0) {
    // previous slide is equal to last element of array
    var prevSlide = this.slides[this.slides.length - 1];
  } else {
    var prevSlide = this.slides[this.current - 1];
  }

  // add 'active' class to current slide
  currentSlide.classList.add('active');

  // remove 'active' class form previous slide
  if (prevSlide.classList.contains('active')) {
    prevSlide.classList.remove('active');
  }

  if (this.current == (this.slides.length - 1)) {
    this.current = 0;
  } else {
    this.current++;
  }
}

Slider.prototype.changer = function(duration) {
  var $this = this;
  setInterval(function(){
    $this.changeSlide();
  }, duration);
}

Slider.prototype.start = function(duration) {
  this.findSlides();
  this.changer(duration);
}

var slider = new Slider('slider');
slider.start(1000);
