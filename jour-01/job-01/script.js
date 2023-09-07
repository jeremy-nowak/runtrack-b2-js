
document.addEventListener("DOMContentLoaded", function(){

    
    function myCount(str) {
        let i = 0 ;

        while (str[i]!== undefined){
            i++
        }
        return i
        
        
    }


    function myUpperCase(string) {

        const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";    
        let result = ""

        for (let i = 0; i < myCount(string); i++) {
            
            for (let j = 0; j < myCount(lower); j++) {
                if (string[i] === lower[j]) {
                    result += maj[j]
                    break

                } else if (j === 25){
                    result += string[i]
                    break
                }   
            }
        }

        return result
    }

    console.log(myUpperCase("Hello World"))

})

