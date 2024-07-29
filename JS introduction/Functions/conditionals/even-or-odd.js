// Date 08/19/2024
// By: Pe Te El
// Even or Odd numbers
let number  = numberEvenorOdd(prompt("Enter a number")) 
function numberEvenorOdd(input){
    if(isFinite(input) == true){
        if(input % 2 == 0){
            alert("Your number is even")
        } else if( input % 2 == 1){
            alert("Your number is odd")
        }
    } else{
        alert("Invalid input")
    }
}