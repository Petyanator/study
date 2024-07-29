// Date: 07/17/2024
// By: Pe Te El
// A lot of numbers
let input1, input2, input3, input4
if (confirm("Do you want to add first number?")){
    input1 = parseInt(prompt("Write a number that you desire"))
} else{
    input1 = undefined
}
if (confirm("Do you want to add additional number?")){
    input2 = parseInt(prompt("Enter your second number"))
} else{
    input2 = undefined
}
if(confirm("Maybe you want to pick a third number?")){
    input3 = parseInt(prompt("Enter your third number"))

} else{
    input3 = undefined
}
if(confirm("Do you want to add fourth number?")){
    input4 = parseInt(prompt("Enter your fourth champion"))
} else{
    input4 = undefined
}

if(input1 == undefined){
    console.log("You did not enter any number")
} else if (input1 > 0){
    console.log("Your first number is positive")
} else{
    console.log("Your number is negative")
}

if(input1 == undefined){
    console.log("You did not enter any number")
} else if (input1 % 2 === 0){
    console.log("Your first number is even")
} else{
    console.log("Your first number is odd")
}
if(input1 == undefined || input2 == undefined){
    console.log("You didn't enter one of the numbers")
} else if (input1 > input2){
    console.log(`Your first number is bigger`)
} else if(input1 == input2){
    console.log("Your numbers are equal")
} else{
    console.log("Your second number is bigger")
}
if (input3 = undefined){
    console.log("You did not enter third number")
} else if (input3 >= 10 && input3 <= 20){
    console.log("Your number fulfills the requirements of being between 10 and 20")
} else{
    console.log("Your number does not fulfills the requirements")
}
if (input4 == undefined){
    console.log("You did not enter fourth number")
} else if (input4 <= 100 && input4 >= 90){
    console.log("Congratulations!!! You are very smart, you have received A")
} else if (input4 <= 89 && input4 >= 80){
    console.log("Congratulations, You are smart, you have received B")
} else if (input4 <= 79 && input4 >= 70){
    console.log("Congratulations, You are smart but need to study a little bit more, you have received C")
} else if (input4 <= 69 && input4 >= 60){
    console.log("Damn, you have received D")
} else if (input4 <= 59 && input4 >=0){
    console.log("Congratulations, You are the honored one, You have received F")    
}



