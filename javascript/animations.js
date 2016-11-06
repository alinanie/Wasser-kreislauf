//Animation des Meeres

var 
/*arizona = document.getElementById("content"),*/
vertHeight = document.getElementById("content"),
sun = document.getElementById("sun"),
sunbox = document.getElementById("svgbox-sun"),
ocean = document.getElementById("svgbox-ocean"),
y=10,
x=0,
lastScrollTop = 0,
sunPosFixed = 0;//window.pageYOffset || document.documentElement.scrollTop;;

function scrollHandler() {
    
    var rect = sun.getBoundingClientRect();
    var actPos = window.pageYOffset || document.documentElement.scrollTop;

    console.log("top", rect.top, /*rect.right, */"actPos", actPos);

    if (actPos == lastScrollTop) {
      return;
    }

    if (actPos > lastScrollTop) { // downScroll
       if (rect.right < 440) {
          x = actPos;
       } else if (rect.top < 0) {
          sunbox.style.position = "fixed";
          sunPosFixed = actPos;
       }
    } else {
        if (sunPosFixed == 0) {
          x = actPos;
        } else if (actPos <= sunPosFixed) {
          sunbox.style.position = "relative";
          sunPosFixed = 0;
          x = actPos;
        }
    }
    lastScrollTop = actPos;

    sun.style.transform = "translate3d("+ x + "px, "+ y + "px, 0)"; //+ "rotateZ(" + y +"deg)";
    
    //y = y + 10;
    //ocean[0].style.transform = "translate3d(0," + y + "px, 0)";
    

}

window.onscroll = function() {
    window.requestAnimationFrame(scrollHandler);
}



/*var el = document.getElementById('svgbox-ocean');
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
});*/