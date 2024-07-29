// Date: 07/16/2024
// By: Pe Te El
// Game of guessing number from 1 to 10
let num1, num2, num3, cor
num2 = Math.floor(Math.random()*10 + 1)
cor = false
num3 = 0
while(!cor){
    num1 = parseInt(prompt("Type any number between 1 and 10"))
    if (isNaN(num1) == true || num1 < 1 || num2 > 10){
        alert("Invalid input")
        continue
    }
    if (num1 != num2){
        alert("Wrong number. Try again")
        num3 ++
    } else if(num1 == num2){
        cor = true
        alert(`Congratulations. The number is ${num2} and number of attempts ${num3}`)
    }
}


