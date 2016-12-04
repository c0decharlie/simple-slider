# Simple slider 

It's just a very basic slider written in JavaScript using CSS transitions.

## Setup 

1. First you have to attach `slider.js` file into your main html file. 
```html
<script src="slider.js"></script>
 ```
2. You also have to attach `simple-slider.css` file. 
```html
<link rel="stylesheet" href="styles/simple-slider.css">
```
3. In your html file create list with images you want to display in slider. List must have unique id. 
```html
<ul id="slider">
 <li>
     <img src="image1.jpg">
 </li>
 <li>
     <img src="image2.jpg">
 </li>
 <li>
     <img src="image3.jpg">
 </li>
 <li>
     <img src="image4.jpg">
 </li>
</ul>
```
4. In your JS setup file create new instance of simple-slider.  
```javascript
var slider = new Slider('slider');
```
5. Initialize slider by using `setup()` method on your slider instance. This method is taking one argument which is slide change duration. 
```javascript
slider.setup('1000');
 ```
 
## TODO
 
- [ ] Pagination
- [ ] Navigation
- [ ] Animation speed control
- [ ] Change slide progress bar 

## License

MIT License. 
