document.addEventListener("DOMContentLoaded", function () {


    let html = document.querySelector("html")


function myChangeBackgroundColor(){
    if (window.innerWidth <= 504 ) {

        html.style.backgroundColor = "#003049"
    }
    else if( window.innerWidth < 1336 && window.innerWidth >= 505){
        html.style.backgroundColor ="#d90429"
    }
    else{
        html.style.backgroundColor = "#ffb703"
    }


}

myChangeBackgroundColor()

window.addEventListener("resize", myChangeBackgroundColor);
 
})
