// let input1, input2, input3, input4
// if (confirm("Do you want to add first number?")){
//     input1 = parseInt(prompt("Write a number that you desire"))
// } else{
//     input1 = undefined
// }
// if (confirm("Do you want to add additional number?")){
//     input2 = parseInt(prompt("Enter your second number"))
// } else{
//     input2 = undefined
// }
// if(confirm("Maybe you want to pick a third number?")){
//     input3 = parseInt(prompt("Enter your third number"))

// } else{
//     input3 = undefined
// }
// if(confirm("Do you want to add fourth number?")){
//     input4 = parseInt(prompt("Enter your fourth champion"))
// } else{
//     input4 = undefined
// }

// if(input1 == undefined){
//     console.log("You did not enter any number")
// } else if (input1 > 0){
//     console.log("Your first number is positive")
// } else{
//     console.log("Your number is negative")
// }

// if(input1 == undefined){
//     console.log("You did not enter any number")
// } else if (input1 % 2 === 0){
//     console.log("Your first number is even")
// } else{
//     console.log("Your first number is odd")
// }
// if(input1 == undefined || input2 == undefined){
//     console.log("You didn't enter one of the numbers")
// } else if (input1 > input2){
//     console.log(`Your first number is bigger`)
// } else if(input1 == input2){
//     console.log("Your numbers are equal")
// } else{
//     console.log("Your second number is bigger")
// }
// if (input3 = undefined){
//     console.log("You did not enter third number")
// } else if (input3 >= 10 && input3 <= 20){
//     console.log("Your number fulfills the requirements of being between 10 and 20")
// } else{
//     console.log("Your number does not fulfills the requirements")
// }
// if (input4 == undefined){
//     console.log("You did not enter fourth number")
// } else if (input4 <= 100 && input4 >= 90){
//     console.log("Congratulations!!! You are very smart, you have received A")
// } else if (input4 <= 89 && input4 >= 80){
//     console.log("Congratulations, You are smart, you have received B")
// } else if (input4 <= 79 && input4 >= 70){
//     console.log("Congratulations, You are smart but need to study a little bit more, you have received C")
// } else if (input4 <= 69 && input4 >= 60){
//     console.log("Damn, you have received D")
// } else if (input4 <= 59 && input4 >=0){
//     console.log("Congratulations, You are the honored one, You have received F")    
// }

// let prod, dssa, disc
// dssa = 4.99
// disc = 0.8
// alert("OUR NEW PRODUCT - ONLY FOR 4.99$")
// if (confirm("Are you a student?")){
//     alert("Congratulations, you have received a 10% discount")
//     if (confirm("Do you want to make a purchase of our new product?")){
//         prod = prompt("Choose an amount of product")
//         prod = parseInt(prod)
//         if(prod > 10){
//             alert("Congratulations, you have just received a 20% discount on your next purchase")
//             console.log(`Your total price is going to be ${(dssa * prod) * disc}`)
//         } else if(prod > 0){
//             console.log(`Your total price is going to be ${(dssa * prod)}`)
//         }
//     } else{
//         console.log("Sorry, we take your discount")
//     }
// } else if (confirm("Do you want to make a purchase of our new product?")){
//         prod = prompt("Choose an amount of product")
//         prod = parseInt(prod)
//         disc = 0.9  
//         if(prod > 10){
//             console.log(`Your total price is going to be ${(dssa * prod) * disc}`)
//         } else if(prod > 0){
//             console.log(`Your total price is going to be ${(dssa * prod)}`)
//         }
//     }
// #9
// let pass, upcase, digitexist

// if (confirm("Do you want to create a password")){
//     pass = prompt("Create a password")
//     upcase = /[A-Z]/.test(pass)
//     digitexist = /\d/.test(pass)
//     if (pass.length >= 8 && upcase && digitexist){
//         alert("This is a good password")
//     } else{
//         alert("Try creating a new password")
//     }
// } else {
//     alert("You did not type any password")
// }   

// #11
// let data, dots, mon, day, year
// data = prompt("Please enter a date")
// dots = parseInt(data.replace(/\//g, ''))
// console.log(dots)
// mon = Math.floor((dots) / 1000000)
// day = Math.floor((dots - (mon*1000000)) / 10000)
// year = Math.floor(dots - mon*1000000 - day*10000)
// if (day <= 31 && mon <= 12){
//     alert(`Your date is ${mon}/${day}/${year}`)
//     if(year % 4 == 0){
//         alert("This year is a leap year")
//         if(day == 29 && mon == 2){
//             alert("Congratulations!!! It's 29th February")
//         }
//     } else{
//         alert("This year is not a leap year")
//     }
// } else{
//     alert("You entered the wrong date")
// }
// // #22
// let s1, s2, s3
// s1 = parseInt(prompt("Please enter the first side measurement "))
// s2 = parseInt(prompt("Please enter the second side measurement"))
// s3 = parseInt(prompt("Please enter the third side measurement"))
// if ((s1 + s2 <= s3) ||(s2 + s3 <= s1) || (s1 + s3 <= s2)){
//     alert("This is not a triangle")
// } else if( s1 == s2 && s2 == s3){
//     alert("true triangle")
// } else if(s1 == s2 || s2 == s3 || s1 == s3){
//     alert("There is third wheel")
// } else{
//     alert("just a triangle")
// }
// // #24
// let wd = prompt("Type a day of the week").trim().toLowerCase();
// let translation;
// switch (wd) {
//     case 'monday':
//         translation = 'Lunes';
//         break;
//     case 'tuesday':
//         translation = 'Martes';
//         break;
//     case 'wednesday':
//         translation = 'Miércoles';
//         break;
//     case 'thursday':
//         translation = 'Jueves';
//         break;
//     case 'friday':
//         translation = 'Viernes';
//         break;
//     case 'saturday':
//         translation = 'Sábado';
//         break;
//     case 'sunday':
//         translation = 'Domingo';
//         break;
//     default:
//         translation = "Wrong word";
// }

// alert(translation);
