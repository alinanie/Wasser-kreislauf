//Animation des Meeres

var 
/*arizona = document.getElementById("content"),*/
vertHeight = document.getElementById("content"),
sun = document.getElementById("sun"),
ocean = document.getElementById("svgbox-ocean"),
y=10,
x= 20;

function scrollHandler() {
    if (window.scrollY < 1000) {    
      //sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";    
      sun.style.transform = "translate3d("+ x + "px, 0, 0)" + "rotateZ(" + y +"deg)"; 
      x = x + 20;
      y = y + 20;
      //ocean[0].style.transform = "translate3d(0," + y + "px, 0)";
  }
}

window.onscroll = function() {
    window.requestAnimationFrame(scrollHandler);
}



var el = document.getElementById('svgbox-ocean');
var elTop = el.getBoundingClientRect().top; //- document.body.getBoundingClientRect().top;

window.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop < elTop){
        el.style.position = 'fixed';
        el.style.bottom = '0px';
    }
    else
    {
        el.style.position = 'static';
        el.style.top = 'auto';
    }
});