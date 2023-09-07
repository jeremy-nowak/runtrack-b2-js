document.addEventListener("DOMContentLoaded", function () {
  function myIsInString(haystack, needle) {
    let i = 0;
    let j = 0;
    let locateFirsLetter = [];
    let count =[""];

    // Je recupere le nombre de lettre dans les deux variables
    while (haystack[i] !== undefined) {
      i++;
    }

    while (needle[j] !== undefined) {
      j++;
    }

    // Je trouve le début de ma correspondance de mon aiguille dans ma botte de paille dans un for qui parcours ma botte
    for (let index = 0; index < i; index++) {
      // Je trouve les index correspondant aux premieres lettres de ma needle
      if (needle[0] === haystack[index]) {


    // Je veux ajouter index dans un tableau associatif pour pouvoir parcourir les index des lettres qui correspondent
        locateFirsLetter = locateFirsLetter[j]+= index
        for (let testd = 0; testd < j; testd++) {

          if (needle[testd] === haystack[index]) {
            count[testd] += testd

          }
          console.log(count)

        }

        // Je vérifie que les lettres apres cette correspondance soient les memes
      }
    }
  }

  myIsInString("Hello World", "llo");
});
