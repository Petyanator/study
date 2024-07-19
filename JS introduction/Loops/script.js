// const numbers = [12, 32, 42, 35, 64, 63, 600]
// let changnum = []
// for (let i = 0; i < numbers.length; i++){
//     changnum.push(numbers[i] * 10)
// }
// console.log("Original numbers:", numbers)
// console.log("Multiplied numbers:", changnum)
// //#1
// let num1, num2, num3, cor
// num2 = Math.floor(Math.random()*10 + 1)
// cor = false
// num3 = 0
// while(!cor){
//     num1 = parseInt(prompt("Type any number between 1 and 10"))
//     if (isNaN(num1) == true || num1 < 1 || num2 > 10){
//         alert("Invalid input")
//         continue
//     }
//     if (num1 != num2){
//         alert("Wrong number. Try again")
//         num3 ++
//     } else if(num1 == num2){
//         cor = true
//         alert(`Congratulations. The number is ${num2} and number of attempts ${num3}`)
//     }
// }
// #2
// let choice1, choice2, res1, res2, res3
// res1 = 0
// res2 = 0
// res3 = 0
// while(true){
//     choice1 = prompt("Try to win in Rock Paper Scissors")
//     if (choice1 === "exit") {
//         alert(`Thanks for playing! Won: ${res3}  Draw: ${res2} Lost: ${res1}`);
//         break;
//     }
//     choice2 = Math.floor((Math.random() * 3) + 1)
//     switch(choice2){
//         case 1:
//             choice2 = "rock"
//             break
//         case 2:
//             choice2 = "paper"
//             break
//         case 3:
//             choice2 = "scissors"
//             break
//     }
//     if(isNaN(choice1) == false){
//         switch(parseInt(choice1)){
//             case 1:
//                 choice1 = "rock"
//                 break
//             case 2:
//                 choice1 = "paper"
//                 break
//             case 3:
//                 choice1 = "scissors"
//                 break
//             default:
//                 alert("Invalid input")
//                 continue
//         }
//     }
//     if(choice1 == "rock" || choice1 == "paper" || choice1 == "scissors"){
//         if(choice1 == "rock"){
//             if(choice2 == "paper"){
//                 alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
//                 res1++
//             } else if(choice2 == "scissors"){
//                 alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
//                 res3++
//             } else if(choice2 == "rock"){
//                 alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
//                 res2++
//             }
//         }
//         if(choice1 == "paper"){
//             if(choice2 == "paper"){
//                 alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
//                 res2++
//             } else if(choice2 == "scissors"){
//                 alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
//                 res1++
//             } else if(choice2 == "rock"){
//                 alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
//                 res3++
//             }
//         }
//         if(choice1 == "scissors"){
//             if(choice2 == "paper"){
//                 alert(`You won. You picked ${choice1} and my choice was ${choice2}`)
//                 res3++
//             } else if(choice2 == "scissors"){
//                 alert(`Draw. You picked ${choice1} and my choice was ${choice2}`)
//                 res2++
//             } else if(choice2 == "rock"){
//                 alert(`You lost. You picked ${choice1} and my choice was ${choice2}`)
//                 res1++
//             }
//         }
//     }
// }
let input, i, j,k , stas
input = parseInt(prompt("Write a height of pyramid"))

for (i = 0; i < input; i++){
    stas = ''
    for (j = 0; j < input - i - 1; j++){
        stas +=' '
    }
    for(k = 0; k < 2 * i + 1; k++ ){
        stas += '*'
    }
    console.log(stas)
}
