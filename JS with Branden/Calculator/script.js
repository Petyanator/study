const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const cleanAll = document.getElementById("C")
let mainText = document.getElementById("output")
const percent = document.getElementById("percent")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const equal = document.getElementById("equal")
const dot = document.getElementById("dot")
const ChangeSign = document.getElementById("change-sign")
const deleteBtn = document.getElementById("delete")
let clickCount = 0
let CountforSign = 0

cleanAll.addEventListener("click", function(){
    mainText.textContent = ""
}
)
two.addEventListener("click", function(){
    mainText.textContent += "2"
})
three.addEventListener("click", function(){
    mainText.textContent += "3"
})
four.addEventListener("click", function(){
    mainText.textContent += "4"
})
five.addEventListener("click", function(){
    mainText.textContent += "5"
})
six.addEventListener("click", function(){
    mainText.textContent += "6"
})
seven.addEventListener("click", function(){
    mainText.textContent += "7"
})
eight.addEventListener("click", function(){
    mainText.textContent += "8"
})
nine.addEventListener("click", function(){
    mainText.textContent += "9"
})
one.addEventListener("click", function(){
    mainText.textContent += "1"
})
zero.addEventListener("click", function(){
    mainText.textContent += "0"
})
    let Count1 = 0
    const operators = ["+", "-", "/", "*"]
divide.addEventListener("click", function(){
    const lastChar = mainText.textContent.trim().slice(-1)
    if(Count1 === 0 || !operators.includes(lastChar)){
        mainText.textContent += " / "
        Count1++
    }
})
    let Count2 = 0
multiply.addEventListener("click", function(){
    const lastChar1 = mainText.textContent.trim().slice(-1)
    if(Count2 === 0 || !operators.includes(lastChar1)){
        mainText.textContent += " * "
        Count2++
    }
})
    let Count3 = 0
minus.addEventListener("click", function(){
    const lastChar2 = mainText.textContent.trim().slice(-1)
    if(Count3 === 0 || !operators.includes(lastChar2)){
        mainText.textContent += " - "
        Count3++
    }
})
    let Count4 = 0
plus.addEventListener("click", function(){
    const lastChar3 = mainText.textContent.trim().slice(-1)
    if(Count4 === 0 || !operators.includes(lastChar3)){
        mainText.textContent += " + "
        Count4++
    }
})



ChangeSign.addEventListener("click", function(){
    CountforSign++
    if (CountforSign % 2 === 1){
        firstAction1()
    } else {
        secondAction2()
    }
})
function firstAction1(){
    mainText.textContent +=""
}
function secondAction2(){
    if(mainText.textContent.includes("-")){
        mainText.textContent += ""
    } else{
    mainText.textContent +="-"
    }
}

percent.addEventListener("click", function(){
    let percent = parseFloat(mainText.textContent) / 100
    mainText.textContent = percent
})

equal.addEventListener("click", function(){
    let numbers = mainText.textContent.split(" ")
    let result = parseFloat(numbers[0])
    for(i = 0; numbers.length > i; i++){
        let nextNumber = parseFloat(numbers[i + 1])
        if(isNaN(numbers[i]) == true){
            switch(numbers[i]){
                case "*":
                    result *= nextNumber
                    break
                case "/":
                    result /= nextNumber
                    break
                case "-":
                    result -= nextNumber
                    break
                case "+":
                    result += nextNumber
                    break 
                default:
                    break
            }
        }
    }   
    mainText.textContent = result   
})
dot.addEventListener("click", function(){
    let numbers1 = mainText.textContent.split(" ")
    if(numbers1.includes(".") || numbers1.includes("0.")){
        mainText.textContent += ""
    } else if(numbers1[0] == ""){
        mainText.textContent += "0."
    } else{
        mainText.textContent += "."
    }
})
deleteBtn.addEventListener("click", function(){
    let numbers2 = mainText.textContent.split("")
    numbers2.pop()
    mainText.textContent = numbers2.join("")
})
