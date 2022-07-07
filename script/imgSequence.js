var imgNum = 1;
var img = new Image();
var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var scrollYPos = 0;

img.src = "./images/crow/crow0.png";

window.addEventListener('scroll', function(e) {
    scrollYPos = Math.round(window.scrollY / 20);
    
    console.log("scroll y: " + window.scrollY + ", " + scrollYPos);
    
    if (scrollYPos == 0) scrollYPos = 0;
    if (scrollYPos > 86) scrollYPos = 86;
    player(scrollYPos);
});

function player(num) {
    img.src = "./images/crow/crow" + num + ".png";
}

img.addEventListener('load', function(e) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
//    ctx.drawImage(img, 0, 0, 300, 300); // image scale
});