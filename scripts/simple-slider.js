(function(root){
    'use strict';

    function Slider(id) {
        this.element = document.querySelector('#' + id);
        if (this.element === null)
            throw new Error('There\'s no selector with such id!');
        this.slides = [];
        this.current = 0;
    }

    Slider.prototype.findSlides = function () {
        var $slides = this.element.querySelectorAll('li');
        Array.from($slides).forEach(i => this.slides.push(i));
    };

    Slider.prototype.setPreviousSlide = function () {
        var currentSlide = this.slides[this.current];
        var prevSlide = (this.current === 0) ? this.slides[this.slides.length - 1] : this.slides[this.current - 1];
        this.changeSlide(currentSlide, prevSlide);
    };

    Slider.prototype.changeSlide = function (current, prev) {
        current.classList.add('active');
        prev.classList.remove('active');
        this.setCurrentSlide();
    };

    Slider.prototype.setCurrentSlide = function () {
        this.current === (this.slides.length - 1) ? this.current = 0: this.current++;
    };

    Slider.prototype.changer = function (duration) {
        setInterval(() => this.setPreviousSlide(), duration);
    };

    Slider.prototype.setup = function (duration) {
        duration = duration || 3000;
        this.findSlides();
        this.changer(duration);
    };

    root.Slider = Slider;

}(this));
