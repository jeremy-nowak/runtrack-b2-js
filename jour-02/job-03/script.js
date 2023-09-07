document.addEventListener("DOMContentLoaded", function () {


    let text = document.querySelector('#text-displayer')
    let inputText = document.querySelector('#input-text')
    let turnTextBold = document.querySelector('#turn-text-bold')
    let turnTextItalic = document.querySelector('#turn-text-italic')
    let clearText = document.querySelector('#clear-text')




    function myDisplayText(){

    text.innerHTML = inputText.value
    }


    function myTurnItalic(){
        text.style.fontStyle = "italic"

  }

    function myClearText(){
        text.style.fontWeight = "normal"
        text.style.fontStyle = "normal"
  }

    function myTurnBold(){
        text.style.fontWeight = "bold"
    }


  inputText.addEventListener('keyup', myDisplayText)
  clearText.addEventListener('click', myClearText)
  turnTextItalic.addEventListener('click', myTurnItalic)
  turnTextBold.addEventListener('click', myTurnBold)

})
