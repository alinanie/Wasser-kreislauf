var 
/*arizona = document.getElementById("content"),*/
vertHeight = document.getElementById("content"),
sun = document.getElementById("sun"),
ocean = document.getElementsByClassName("svgbox-ocean"),
y=1,
x=1;

function scrollHandler() {
    if (window.scrollY < vertHeight) {    
      //sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";    
      sun.style.transform = "translate3d("+ x + "px, 0, 0)" + "rotateZ(" + y +"deg)"; 
      x = x + 5;
      y = y + 10;
      ocean[0].style.transform = "translate3d(0," + y + "px, 0)";

  }
}

window.onscroll = function() {
    window.requestAnimationFrame(scrollHandler);
}