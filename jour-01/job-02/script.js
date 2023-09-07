document.addEventListener("DOMContentLoaded", function(){



function myCountChar(haystack, needle) {

let count = 0;

    for (const lettres of haystack) {
        if (lettres === needle) {

        count++;
        }
    }
    return count;
    
}


console.log(myCountChar("Hello World", "o"))

})