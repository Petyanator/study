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
const bracket = document.getElementById("brackets")
const percent = document.getElementById("percent")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const equal = document.getElementById("equal")
const dot = document.getElementById("dot")
const ChangeSign = document.getElementById("change-sign")
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
divide.addEventListener("click", function(){
    mainText.textContent += " / "
})
multiply.addEventListener("click", function(){
    mainText.textContent += " * "
})
minus.addEventListener("click", function(){
    mainText.textContent += " - "
})
plus.addEventListener("click", function(){
    mainText.textContent += " + "
})
dot.addEventListener("click", function(){
    mainText.textContent += "."
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
    mainText.textContent +="-"
}
bracket.addEventListener("click", function(){
    clickCount++
    if (clickCount % 2 === 1){
        firstAction()
    } else {
        secondAction()
    }
})
function firstAction(){
    mainText.textContent +="("
}
function secondAction(){
    mainText.textContent +=")"
}
percent.addEventListener("click", function(){
    mainText.textContent += "%"
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

