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
        this.showFirstSlide();
    };

    Slider.prototype.showFirstSlide = function () {
        this.slides[0].classList.add('active');
        this.current = 1;
    };

    Slider.prototype.setPreviousSlide = function () {
        var currentSlide = this.slides[this.current];
        var prevSlide = (this.current === 0) ? this.slides[this.slides.length - 1] : this.slides[this.current - 1];
        this.changeSlide(currentSlide, prevSlide);
    };

    Slider.prototype.changeSlide = function (current, prev) {
        this.slideInterim(prev);
        current.classList.add('active');
        prev.classList.remove('active');
        this.setCurrentSlide();
    };

    Slider.prototype.slideInterim = function (prev) {
        var interimSlide = this.element.querySelector('.interim');
        if (interimSlide !== null && interimSlide.classList.contains('interim'))
            this.element.querySelector('.interim').classList.remove('interim');
        prev.classList.add('interim');
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
