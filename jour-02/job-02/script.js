document.addEventListener("DOMContentLoaded", function () {

    let para = document.querySelector("#count-displayer");
    let button = document.querySelector('#add-count-btn');
    let count = "0";


    function myAddCount(){
        count++;
        para.innerHTML = count
    }


    button.addEventListener('click', myAddCount)



})
