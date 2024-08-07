const ul = document.getElementById("list")
let Userimput = prompt("Type in the highest number")
for(i = 1; i < Userimput; i++){
    let li = ul.appendChild(document.createElement("li"))
    if( i % 15 == 0){
        li.textContent = "FizzBuzz"
    } else if( i % 5 == 0){
        li.textContent = "Buzz"
    } else if( i % 3 == 0){
        li.textContent = "Fizz"
    } else{
        li.textContent = i
    }
}