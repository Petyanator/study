let input1 = parseFloat(prompt("Enter first number"))
let input2 = parseFloat(prompt("Enter second number"))
function numberComparison(number1, number2){
    if(isFinite(number1) && isFinite(number2)){
        if(number1 > number2){
            alert(`Your first number (${number1}) is bigger than your second number (${number2}))`)
            return
        } else if(number1 == number2){
            alert("Your numbers are equal")
            return
        } else if(number1 < number2){
            alert(`Your second number (${number2}) is bigger than your first number (${number1})`)
            return
        }
    } else{
        alert("Please enter valid numbers")
        return
    }
}
numberComparison(input1,input2)