function GuessTheNumber(){
    num2 = Math.floor(Math.random()*10 + 1)
    num3 = 0
    while(true){
        num1 = parseInt(prompt("Type any number between 1 and 10"))
        if (isNaN(num1) == true || num1 < 1 || num2 > 10){
            alert("Invalid input")
            continue
        }
        if (num1 != num2){
            alert("Wrong number. Try again")
            num3 ++
        } else if(num1 == num2){
            alert(`Congratulations. The number is ${num2} and number of attempts ${num3}`)
            break
        }
    }
}
GuessTheNumber()