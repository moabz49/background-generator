document.addEventListener("DOMContentLoaded", function() {  //this set the initial background and CSS.textcontent rule.
    var css = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");

    function setGradient() {
      body.style.background =
      "linear-gradient(to right, "
      + color1.value
      + ", "
      + color2.value
      +")";


      css.textContent = body.style.background + ";";
    }

    color2.addEventListener("input", setGradient);  // don't need to call function because it
    color1.addEventListener("input", setGradient);   // "getter function"
    setGradient();  //set initial background and css.textContent rule.

});
// In JavaScript, a function that does not require brackets to be called is called a
// ... "getter function" or simply a "getter". This is because when you access the
// ... function, it behaves like a property and returns a value without requiring the use of parentheses.




var css = document.querySelector("h3");
var randomBtn = document.getElementById("random-btn");
var body = document.querySelector("body");

// Getting a random number between 0 and 255.
function randomInteger(max) {
   return Math.floor(Math.random()*(max+1));  // get random number between 0 and 255.

}
// console.log(randomInteger(255));
// Getting randomIntegers for RGB colors.
function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return[r,g,b];
}

// for (i = 0; i < 2; i++) {
//   console.log(randomRgbColor());
// }

// convert rgb color to css rgb CSScolor example rgb(240, 122, 34)
function rgbToCssColor(color) {
  return "rgb(" + color.join(", ") + ")";
}

randomBtn.addEventListener("click", function() {
  var color1 = randomRgbColor();
  var color2 = randomRgbColor();
  
  body.style.background = "linear-gradient(to right, rgb(" + color1.join("%, ") + "%), rgb(" + color2.join("%, ") + "%))";
  css.textContent = body.style.background + ";";
});







// function randomHexColor() {
//   let [r,g,b] = randomRgbColor();
//
//   let hr = r.toString(16).padStart(2, '0');
//   let hg = g.toString(16).padStart(2, '0');
//   let hb = b.toString(16).padStart(2, '0');
//
//   return "#" + hr + hg + hb;
//
// }
//
// for (i = 0; i < 2; i++) {
//   console.log(randomHexColor());
// }
