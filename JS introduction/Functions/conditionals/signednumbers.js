// Date 08/19/2024
// By: Pe Te El
// Signed numbers
let input1 = numberPlusOrMinus(prompt('Enter a number'))
// You put another variable to use in function( its like for example to)
function numberPlusOrMinus(input){
    if(isFinite(input) == true){
        if(input < 0){
            alert("Your number is negative")
        } else{
            alert("Your number is positive")
        }
    } else{
        alert("Invalid input")
    }
}
