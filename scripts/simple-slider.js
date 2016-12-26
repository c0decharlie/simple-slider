(function(root){
    'use strict';

    function Slider(id) {
        this.wrapper = document.querySelector('#' + id);
        if (this.wrapper === null)
            throw new Error('There\'s no selector with such id!');
        this.slides = [];
        this.current = 0;
        this.slideInterval = null;
    }

    Slider.prototype.findSlides = function () {
        var $slides = this.wrapper.querySelectorAll('li');
        Array.from($slides).forEach(i => this.slides.push(i));
        this.showFirstSlide();
    };

    Slider.prototype.showFirstSlide = function () {
        this.slides[0].classList.add('active');
        this.current = 1;
    };

    Slider.prototype.setSlideOrder = function () {
        var currentSlide = this.slides[this.current];
        var prevSlide = (this.current === 0) ? this.slides[this.slides.length - 1] : this.slides[this.current - 1];
        return [currentSlide, prevSlide];
    };

    Slider.prototype.changeSlide = function (current, prev) {
        this.slideInterim(prev);
        current.classList.add('active');
        prev.classList.remove('active');
    };

    Slider.prototype.slideInterim = function (prev) {
        var interimSlide = this.wrapper.querySelector('.interim');
        if (interimSlide !== null && interimSlide.classList.contains('interim'))
            this.wrapper.querySelector('.interim').classList.remove('interim');
        prev.classList.add('interim');
    };

    Slider.prototype.incrementSlide = function () {
        this.current === (this.slides.length - 1) ? this.current = 0: this.current++;
    };

    Slider.prototype.decrementSlide = function () {
        (this.current === 0) ? this.current = this.slides.length - 1: this.current--;
    };

    Slider.prototype.next = function (event) {
        if (event !== undefined) {
            this.clearInterval(this.slideInterval);
        }
        var slides = this.setSlideOrder();
        this.changeSlide(slides[0], slides[1]);
        this.incrementSlide();
    };

    Slider.prototype.prev = function (event) {
        if (event !== undefined) {
            this.clearInterval(this.slideInterval);
        }
        this.decrementSlide();
        var slides = this.setSlideOrder();
        this.changeSlide(slides[1], slides[0]);
    };

    Slider.prototype.createNav = function() {
        this.createDOMElement('div', 'slider-nav', this.wrapper);
        this.createDOMElement('button', 'next', this.wrapper.querySelector('.slider-nav'), 'next');
        this.createDOMElement('button', 'prev', this.wrapper.querySelector('.slider-nav'), 'prev');
        this.eventAttach('.next', 'click', this.next.bind(this));
        this.eventAttach('.prev', 'click', this.prev.bind(this));
    };

    Slider.prototype.createDOMElement = function (element, elementClass, parent, inner) {
        inner = inner || '';
        var elem = document.createElement(element);
        elem.classList.add(elementClass);
        elem.innerHTML = inner;
        parent.appendChild(elem);
    };

    Slider.prototype.eventAttach = function (elemSelector, eventType, handler) {
        var element = this.wrapper.querySelector(elemSelector);
        element.addEventListener(eventType, handler);
    };

    Slider.prototype.clearInterval = function () {
        clearInterval(this.slideInterval);
    };

    Slider.prototype.changer = function (duration) {
        this.slideInterval = setInterval(() => this.next(), duration);
    };

    Slider.prototype.setup = function (duration) {
        duration = duration || 3000;
        this.findSlides();
        this.createNav();
        this.changer(duration);
    };

    root.Slider = Slider;

}(this));
